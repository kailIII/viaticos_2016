<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\JsonResponse;
use BackBundle\Entity\Solicitud;
use BackBundle\Entity\Persona;
use BackBundle\Entity\Departamento;
use BackBundle\Entity\Cargo;
use BackBundle\Entity\CargoPersona;
use BackBundle\Entity\Ciudad;
use BackBundle\Entity\CiudadSolicitud;
use BackBundle\Entity\EstadoSolicitud;
use BackBundle\Entity\PersonaComision;	
use BackBundle\Entity\Fondo;
use BackBundle\Entity\TipoTransporte;
use BackBundle\Entity\TransporteSolicitado;
use BackBundle\Entity\Anexo;
use BackBundle\Entity\CalLibres;
use BackBundle\Entity\AutorizadoSolicitud;
use BackBundle\Entity\Autorizacion;


use Symfony\Component\HttpFoundation\Response;

// require __DIR__.'/vendor/autoload.php';

use Spipu\Html2Pdf\Html2Pdf;
// use Spipu\Html2Pdf\Html2Pdf_Html2Pdf;
use Spipu\Html2Pdf\Exception\Html2PdfException;
use Spipu\Html2Pdf\Exception\HtmlParsingException;
use Spipu\Html2Pdf\Exception\ExceptionFormatter;

class SolicitudController extends Controller {
	public function nuevoAction(Request $request) {
		$helpers = $this->get("app.helpers");
		$json = $request->get("json", null);
		$params = json_decode($json);
		$hash = $request->get("authorization", null);
		$authCheck = $helpers->authCheck($hash);
		$data = array();
		if ($authCheck == true) {
			$identity = $helpers->authCheck($hash, true);
			if ($json != null) {
				$correo = (isset($params->correo)) ? $params->correo : null;
				$funcionarios_sol = (isset($params->funcionarios_sol)) ? $params->funcionarios_sol : null;
				$Fecha_sol = (isset($params->Fecha_sol)) ? $params->Fecha_sol : null;
				$FechaDesde_sol = (isset($params->FechaDesde_sol)) ? $params->FechaDesde_sol : null;
				$HoraDesde_sol = (isset($params->HoraDesde_sol)) ? $params->HoraDesde_sol : null;
				$FechaHasta_sol = (isset($params->FechaHasta_sol)) ? $params->FechaHasta_sol : null;
				$HoraHasta_sol = (isset($params->HoraHasta_sol)) ? $params->HoraHasta_sol : null;
				$actividadessol = (isset($params->actividadessol)) ? $params->actividadessol : null;
				$observacionsol = (isset($params->observacionsol)) ? $params->observacionsol : null;
				$ciudades_sol = (isset($params->ciudades_sol)) ? $params->ciudades_sol : null;
				$solotransporteSol = (isset($params->solotransporteSol)) ? $params->solotransporteSol : null;
				
				$fondovalor = (isset($params->fondovalor)) ? $params->fondovalor : null;
				$fondoobservacion = (isset($params->fondoobservacion)) ? $params->fondoobservacion : null;
				$anexotitulo = (isset($params->anexotitulo)) ? $params->anexotitulo : null;
				$aneodescripcion = (isset($params->aneodescripcion)) ? $params->aneodescripcion : null;
				$anexoruta = (isset($params->anexoruta)) ? $params->anexoruta : null;

				$fechaDesde = $FechaDesde_sol;
				$fechaHasta = $FechaHasta_sol;
				$HoraDesde = $HoraDesde_sol;
				$HoraHasta = $HoraHasta_sol;
				$fecha = $Fecha_sol;

				$em = $this->getDoctrine()->getManager();

				$isset_funsol = $em->getRepository('BackBundle:Persona')->findOneBy(
					array(
						"perCorreoelectronico" => $correo,
						"perEstado"=> "A"
						)
					);
				$existe_solicitud_comisionados = $em->createQuery('SELECT MAX(m.percomComision)+1 FROM BackBundle:PersonaComision m')->getSingleScalarResult();

				if(count($existe_solicitud_comisionados) == 0){
					$secuencialComision = 1;
				}else{
					$secuencialComision = $existe_solicitud_comisionados;	
				}

				if($funcionarios_sol == ""){
					$funcionarios_sol = $isset_funsol->getPerNombrecompleto();
				}else{
					$funcionarios_sol = $isset_funsol->getPerNombrecompleto().",".$funcionarios_sol;
				}

				$soloanio = (new \DateTime())->format('Y');
				$departamento = $em->getRepository('BackBundle:Departamento')->findBy(
					array(
						"depEstado" => "A"
						)
					);
				$cargo = $em->getRepository('BackBundle:Cargo')->findBy(
					array(
						"dep" => $departamento
						)
					);

				$funcionarios = Array();
				$funcionarios = explode(',', $funcionarios_sol);
				foreach ($funcionarios as $sol_persona) {

					$isset_persona = $em->getRepository('BackBundle:Persona')->findOneBy(
						array(
							"perNombrecompleto" => trim($sol_persona),
							"perEstado"=> "A"
							)
						);
					if(count($isset_persona)>0){
						$cargo_persona = $em->getRepository('BackBundle:CargoPersona')->findBy(
							array(
								"car" => $cargo,
								"per"=> $isset_persona,
								"carperEstado" => "A"
								)
							);
						$secuencial = $em->getRepository('BackBundle:Solicitud')->findBy(
							array(
								"solAnio" => $soloanio,
								"per" => $isset_persona
								)
							);
						if(count($secuencial) == 0){
							$idsecuencial = 1;
						}else{
							$idsecuencial = count($secuencial)+1;
						}
						$numsol = trim($cargo_persona[0]->getCar()->getDep()->getDepSiglas())."-".date('Y')."-SAPCSI-".trim($isset_persona->getPerIniciales())."-".$idsecuencial;

						$query_isset_solicitud = $em->createQueryBuilder('s')
						->add('select', 'es')
						->add('from', 'BackBundle:Solicitud s')
						->join('BackBundle:EstadoSolicitud', 'es')
						->where('es.sol = s.solId')
						->andWhere('(es.estsolFechasalida between :fechasalida AND :fechallegada) OR (es.estsolFechallegada between :fechasalida and :fechallegada)')
						->andWhere('s.per = :per')
						->setParameter('per', $isset_persona)
						->setParameter('fechasalida', $FechaDesde_sol)
						->setParameter('fechallegada', $FechaHasta_sol)
						->getQuery()
						->getResult();

						if(count($query_isset_solicitud) > 0){
							$solicitud = new Solicitud();
							$solicitud->setSolSecuencial($idsecuencial);
							$solicitud->setSolIdsolicitud($numsol);
							$solicitud->setSolFecharealizacion($fecha);
							$solicitud->setSolNumeroactualizacion("0");
							$solicitud->setSolEstado("REV");
							$solicitud->setSolAnio($soloanio);
							$solicitud->setPer($isset_persona);
							$em->persist($solicitud);
							$em->flush();
						}else{
							$solicitud = new Solicitud();
							$solicitud->setSolSecuencial($idsecuencial);
							$solicitud->setSolIdsolicitud($numsol);
							$solicitud->setSolFecharealizacion($fecha);
							$solicitud->setSolNumeroactualizacion("0");
							$solicitud->setSolEstado("P");
							$solicitud->setSolAnio($soloanio);
							$solicitud->setPer($isset_persona);
							$em->persist($solicitud);
							$em->flush();
						}
						$personacomision = new PersonaComision();
						$personacomision->setPer($isset_persona);
						$personacomision->setSol($solicitud);
						$personacomision->setPercomComision($secuencialComision);
						$em->persist($personacomision);
						$em->flush();

						$rutasol = "pdf/".trim($isset_persona->getPerIdentificacion())."/".$numsol.".pdf";

						$existe_estado_solicitud = $em->getRepository('BackBundle:EstadoSolicitud')->findBy(
							array(
								"sol" => $solicitud
								)
							);
						if (count($existe_estado_solicitud) == 0){
							$estado_solicitud = new EstadoSolicitud();
							$estado_solicitud->setEstsolFechasalida($fechaDesde);
							$estado_solicitud->setEstsolHorasalida($HoraDesde);
							$estado_solicitud->setEstsolFechallegada($fechaHasta);
							$estado_solicitud->setEstsolHorallegada($HoraHasta);
							$estado_solicitud->setEstsolActividades($actividadessol);
							$estado_solicitud->setEstsolEstado("A");
							$estado_solicitud->setEstsolNumeroactualizacion("0");
							$estado_solicitud->setEstsolRutapdf($rutasol);
							$estado_solicitud->setEstsolObservacion($observacionsol);
							$estado_solicitud->setSol($solicitud);
							$em->persist($estado_solicitud);
							$em->flush();

							$existe_solicitud_ciudad = $em->getRepository('BackBundle:CiudadSolicitud')->findBy(
								array(
									"estsol" => $estado_solicitud
									)
								);

							if (count($existe_solicitud_ciudad) == 0){
								$ciudad_sol = Array();
								$ciudad_sol = explode(',', $ciudades_sol);
								foreach ($ciudad_sol as $isset_ciudad) {
									$ciudad = $em->getRepository('BackBundle:Ciudad')->findOneBy(
										array(
											"ciuId" => $isset_ciudad
											)
										);
									if (count($ciudad) !== 0){
										$ciudad_solicitud = new CiudadSolicitud();
										$ciudad_solicitud->setCiu($ciudad);
										$ciudad_solicitud->setEstsol($estado_solicitud);
										$em->persist($ciudad_solicitud);
										$em->flush();
									}else {
										$data = array(
											"status" => "error",
											"code" => 400,
											"msg" => "Ciudad no existe, por favor ingrese los datos correctos"
											);
									}
								}
							}else {
								$data = array(
									"status" => "error",
									"code" => 400,
									"msg" => "Ya existe la o las ciudades asignadas a la solicitud"
									);
							}
							if($solotransporteSol != null){
								$traruta_sol = Array();
								$traruta_sol = explode(';', $solotransporteSol);
								foreach ($traruta_sol as $existe_transporte) {
									$isset_transporte = Array();
									$isset_transporte = explode(',', $existe_transporte);
									$Tiptramod = $isset_transporte[1];
									$TrasolRutainicio = $isset_transporte[2];
									$TrasolRutafin = $isset_transporte[3];
									$TrasolFechasalida = $isset_transporte[4];
									$TrasolHorasalida = $isset_transporte[5];
									$TrasolFechallegada = $isset_transporte[6];
									$TrasolHorallegada = $isset_transporte[7];

									$tiptra = $em->getRepository('BackBundle:TipoTransporte')->findOneBy(
										array(
											"tiptraNombre" => $Tiptramod
											)
										);
									$transporte_solicitud = new TransporteSolicitado();
									$transporte_solicitud->setTrasolRutainicio($TrasolRutainicio);
									$transporte_solicitud->setTrasolRutafin($TrasolRutafin);
									$transporte_solicitud->setTrasolFechasalida($TrasolFechasalida);
									$transporte_solicitud->setTrasolHorasalida($TrasolHorasalida);
									$transporte_solicitud->setTrasolFechallegada($TrasolFechallegada);
									$transporte_solicitud->setTrasolHorallegada($TrasolHorallegada);
									$transporte_solicitud->setTiptra($tiptra);
									$transporte_solicitud->setEstsol($estado_solicitud);
									$em->persist($transporte_solicitud);
									$em->flush();
								}
								if($solicitud->getSolEstado() === "P" && $solicitud->getPer() === $isset_funsol->getPerId()){

									$cargoPer = $em->getRepository('BackBundle:CargoPersona')->findOneBy(
										array(
											"per" => $isset_persona,
											"carperEstado"=> "A"
											)
										);
									$cargoPer1 = $em->getRepository('BackBundle:CargoPersona')->findOneBy(
										array(
											"car" => $cargoPer->getCar()->getCarJefe(),
											"carperEstado"=> "A"
											)
										);
									$isset_autorizacion = $em->getRepository('BackBundle:Autorizacion')->findOneBy(
										array(
											"per" => $cargoPer1->getPer(),
											"autEstado" => "A"
											)
										);
									$isset_solicitud_jefe = $em->getRepository('BackBundle:AutorizadoSolicitud')->findBy(
										array(
											"estsol" => $estado_solicitud,
											"aut" => $isset_autorizacion
											)
										);
									if(count($isset_solicitud_jefe) == 0){
										$envio_firma_jefe = new AutorizadoSolicitud();
										$envio_firma_jefe->setEstsol($estado_solicitud);
										$envio_firma_jefe->setAut($isset_autorizacion);
										$em->persist($envio_firma_jefe);
										$em->flush();
									}else{
										$data = array(
											"status" => "error",
											"code" => 400,
											"msg" => "Ya se encuentra enviada esta solicitud para la firma"
											);
									}
								}
								$data["status"] = "success";
								$data["code"] = $solicitud->getSolId();
								$data["msg"] = "Solicitud creada satisfactoriamente";
							}else {
								$data = array(
									"status" => "error",
									"code" => 400,
									"msg" => "Ya existe el transporte asignado a la solicitud"
									);
							}
						}else {
							$data = array(
								"status" => "error",
								"code" => 400,
								"msg" => "No existe la solicitud, por favor cree una solicitud para poder continuar"
								);
						}
					}
				}
			} else {
				$data = array(
					"status" => "error",
					"code" => 400,
					"msg" => "No existen datos, por favor ingrese los datos"
					);
			}	
		} else {
			$data = array(
				"status" => "error",
				"code" => 400,
				"msg" => "Los datos de acceso son incorrectos"
				);
		}
		return $helpers->json($data);
	}

	public function reporteAction(Request $request) {
		$helpers = $this->get("app.helpers");

		$json = $request->get("json", null);
		$params = json_decode($json);

		$hash = $request->get("authorization", null);
		$authCheck = $helpers->authCheck($hash);

		$data = array();
		$reporte = array();

		if ($authCheck == true) {
			$identity = $helpers->authCheck($hash, true);
			if ($json != null) {
				$fun_id = (isset($params->fun_id)) ? $params->fun_id : null;
				$em = $this->getDoctrine()->getManager();
				$solPer = $em->getRepository('BackBundle:Solicitud')->findBy(
					array(
						"per" => $fun_id
						)
					);
				$estsolPer = $em->getRepository('BackBundle:EstadoSolicitud')->findBy(
					array(
						"sol" => $solPer
						)
					);
				// $valormasuno=0;
				foreach ($estsolPer as $estsolPer1) {
					$ciuPer = $em->getRepository('BackBundle:CiudadSolicitud')->findBy(
						array(
							"estsol" => $estsolPer1
							)
						);
				// return $helpers->json(count($ciuPer));
					if(count($ciuPer) > 0){
						array_push($reporte, $ciuPer);
					}
				}
				return $helpers->json($reporte);
			} else {
				$data = array(
					"status" => "error",
					"code" => 400,
					"msg" => "No existen datos, por favor ingrese los datos"
					);
			}
		} else {
			$data = array(
				"status" => "error",
				"code" => 400,
				"msg" => "Los datos de acceso son incorrectos"
				);
		}
		return $helpers->json($data);
	}

	public function porfirmarAction(Request $request) {
		$helpers = $this->get("app.helpers");

		$json = $request->get("json", null);
		$params = json_decode($json);

		$hash = $request->get("authorization", null);
		$authCheck = $helpers->authCheck($hash);

		$data = array();

		if ($authCheck == true) {
			$identity = $helpers->authCheck($hash, true);
			if ($json != null) {
				$fun_id = (isset($params->fun_id)) ? $params->fun_id : null;
				$em = $this->getDoctrine()->getManager();

				$cargoPer = $em->getRepository('BackBundle:CargoPersona')->findOneBy(
					array(
						"per" => $fun_id,
						"carperEstado"=> "A"
						)
					);
				$cargos = $em->getRepository('BackBundle:Cargo')->findOneBy(
					array(
						"carId" => $cargoPer->getCar()
						)
					);
				$cargoPadre = $em->getRepository('BackBundle:Cargo')->findBy(
					array(
						"carJefe" => $cargos
						)
					);
				if(count($cargoPadre) > 0){
					$cargoPer1 = $em->getRepository('BackBundle:CargoPersona')->findBy(
						array(
							"car" => $cargoPadre,
							"carperEstado"=> "A"
							)
						);
					$solicitudPer = array();
					// $solicitudPer = null;
					foreach ($cargoPer1 as $cargoHijo) {
						// return $helpers->json($cargoHijo);
						$solPer1 = $em->getRepository('BackBundle:Solicitud')->findBy(
							array(
								"per" => $cargoHijo->getPer()
								)
							);
						$estsolPer1 = $em->getRepository('BackBundle:EstadoSolicitud')->findBy(
							array(
								"sol" => $solPer1
								)
							);
						$ciuPer1 = $em->getRepository('BackBundle:CiudadSolicitud')->findBy(
							array(
								"estsol" => $estsolPer1
								)
							);
						// if(count($solPer1) > 0){
						// 	$solicitudPer = $solPer1;
						// }
						if(count($ciuPer1) > 0){
							array_push($solicitudPer,$ciuPer1);
						}
					}
						// return $helpers->json($solPer1);
					return $helpers->json($solicitudPer);
				}
			} else {
				$data = array(
					"status" => "error",
					"code" => 400,
					"msg" => "No existen datos, por favor ingrese los datos"
					);
			}
		} else {
			$data = array(
				"status" => "error",
				"code" => 400,
				"msg" => "Los datos de acceso son incorrectos"
				);
		}
		return $helpers->json($data);
	}

	public function detallesolrealizadasAction(Request $request) {
		$helpers = $this->get("app.helpers");

		$json = $request->get("json", null);
		$params = json_decode($json);

		$hash = $request->get("authorization", null);
		$authCheck = $helpers->authCheck($hash);

		$data = array();

		if ($authCheck == true) {
			$identity = $helpers->authCheck($hash, true);
			if ($json != null) {
				$DetsolIdsolicitud = (isset($params->DetsolIdsolicitud)) ? $params->DetsolIdsolicitud : null;
				$em = $this->getDoctrine()->getManager();
				//aqui se obtiene solicitud, fecha y funcionario
				$solicitud = $em->getRepository('BackBundle:Solicitud')->findOneBy(
					array(
						"solId" => $DetsolIdsolicitud
						// "solIdsolicitud" => $DetsolIdsolicitud

						)
					);

				//aqui se obtiene cargo y departamento
				$cargopersonasolicitud = $em->getRepository('BackBundle:CargoPersona')->findOneBy(
					array(
						"per" => $solicitud->getPer()
						)
					);
				// return $helpers->json($cargopersonasolicitud);
				$cargosolicitud = $em->getRepository('BackBundle:Cargo')->findOneBy(
					array(
						"carId" => $cargopersonasolicitud->getCar()
						)
					);
				//aqui se obtiene fechas, horas solicitud y actividades
				$estadosolicitud = $em->getRepository('BackBundle:EstadoSolicitud')->findBy(
					array(
						"sol" => $solicitud
						)
					);
				//aqui se obtiene ciudades
				$ciudadesporsolicitud = $em->getRepository('BackBundle:Ciudad')->findAll();
				$ciudadsolicitud = $em->getRepository('BackBundle:CiudadSolicitud')->findBy(
					array(
						"estsol" => $estadosolicitud,
						"ciu" => $ciudadesporsolicitud
						)
					);
				//aqui se obtiene servidores integran
				$funcionario = $em->getRepository('BackBundle:Persona')->findAll();
				$personassolicitud = $em->getRepository('BackBundle:PersonaComision')->findBy(
					array(
						"sol" => $solicitud,
						"per" => $funcionario
						)
					);
				//aqui se obtiene el transporte solicitado
				$transporte = $em->getRepository('BackBundle:TipoTransporte')->findAll();
				$transportesolicitud = $em->getRepository('BackBundle:TransporteSolicitado')->findBy(
					array(
						"estsol" => $estadosolicitud,
						"tiptra" => $transporte
						)
					);
				//aqui se obtiene el banco de persona
				$banco = $em->getRepository('BackBundle:Banco')->findAll();
				$bancopersonasolicitud = $em->getRepository('BackBundle:BancoPersona')->findOneBy(
					array(
						"ban" => $banco,
						"per" => $solicitud->getPer(),
						"banperEstado" => "A"
						)
					);
				//aqui se obtiene el jefe
				$cargojefesolicitud = $em->getRepository('BackBundle:Cargo')->findOneBy(
					array(
						"carId" => $cargopersonasolicitud->getCar()->getCarJefe()
						)
					);
				$cargopersonajefesolicitud = $em->getRepository('BackBundle:CargoPersona')->findOneBy(
					array(
						"car" => $cargojefesolicitud
						)
					);
				//aqui se obtiene el coordinador administrativo Financiero
				$cargocotosolicitud = $em->getRepository('BackBundle:Cargo')->findOneBy(
					array(
						"carNombre" => "COORDINADOR GENERAL ADMINISTRATIVO FINANCIERO"
						)
					);
				$cargopersonacotosolicitud = $em->getRepository('BackBundle:CargoPersona')->findOneBy(
					array(
						"car" => $cargocotosolicitud
						)
					);
				$data = array('cargocotosol' => $cargopersonacotosolicitud, 'cargojefesol' => $cargopersonajefesolicitud, 'transportessol' => $transportesolicitud,'bancosol' => $bancopersonasolicitud,'personasssol' => $personassolicitud, 'ciudadessol' => $ciudadsolicitud,'estadosol' => $estadosolicitud, 'cardep' => $cargosolicitud, 'solifecfun' => $solicitud);
			}else {
				$data = array(
					"status" => "error",
					"code" => 400,
					"msg" => "No existen datos, por favor ingrese los datos"
					);
			}
		}else {
			$data = array(
				"status" => "error",
				"code" => 400,
				"msg" => "Los datos de acceso son incorrectos"
				);
		}
		return $helpers->json($data);
	}

	public function esjefeAction(Request $request) {
		$helpers = $this->get("app.helpers");

		$json = $request->get("json", null);
		$params = json_decode($json);

		$hash = $request->get("authorization", null);
		$authCheck = $helpers->authCheck($hash);

		$data = array();
		$reporte = array();

		if ($authCheck == true) {
			$identity = $helpers->authCheck($hash, true);
			if ($json != null) {
				$fun_id = (isset($params->fun_id)) ? $params->fun_id : null;
				$em = $this->getDoctrine()->getManager();

				$cargoPer = $em->getRepository('BackBundle:CargoPersona')->findOneBy(
					array(
						"per" => $fun_id,
						"carperEstado"=> "A"
						)
					);
				$cargos = $em->getRepository('BackBundle:Cargo')->findOneBy(
					array(
						"carId" => $cargoPer->getCar()
						)
					);
				$cargoPadre = $em->getRepository('BackBundle:Cargo')->findBy(
					array(
						"carJefe" => $cargos
						)
					);
				// if(count($cargoPadre) > 0){

				return $helpers->json(count($cargoPadre));
					// }
				// }

			} else {
				$data = array(
					"status" => "error",
					"code" => 400,
					"msg" => "No existen datos, por favor ingrese los datos"
					);
			}
		} else {
			$data = array(
				"status" => "error",
				"code" => 400,
				"msg" => "Los datos de acceso son incorrectos"
				);
		}
		return $helpers->json($data);
	}
	public function detallejefeAction(Request $request) {
		$helpers = $this->get("app.helpers");

		$json = $request->get("json", null);
		$params = json_decode($json);

		$hash = $request->get("authorization", null);
		$authCheck = $helpers->authCheck($hash);

		$data = array();
		$reporte = array();

		if ($authCheck == true) {
			$identity = $helpers->authCheck($hash, true);
			if ($json != null) {
				$fun_id = (isset($params->fun_id)) ? $params->fun_id : null;
				$em = $this->getDoctrine()->getManager();

				$cargoPer = $em->getRepository('BackBundle:CargoPersona')->findOneBy(
					array(
						"per" => $fun_id,
						"carperEstado"=> "A"
						)
					);
				$cargos = $em->getRepository('BackBundle:Cargo')->findOneBy(
					array(
						"carId" => $cargoPer->getCar()
						)
					);
				$cargoPadre = $em->getRepository('BackBundle:Cargo')->findBy(
					array(
						"carJefe" => $cargos
						)
					);
				// if(count($cargoPadre) > 0){

				return $helpers->json($cargoPadre);
					// }
				// }

			} else {
				$data = array(
					"status" => "error",
					"code" => 400,
					"msg" => "No existen datos, por favor ingrese los datos"
					);
			}
		} else {
			$data = array(
				"status" => "error",
				"code" => 400,
				"msg" => "Los datos de acceso son incorrectos"
				);
		}
		return $helpers->json($data);
	}
	public function firmarAction(Request $request) {
		$helpers = $this->get("app.helpers");
		$json = $request->get("json", null);
		$params = json_decode($json);
		$hash = $request->get("authorization", null);
		$authCheck = $helpers->authCheck($hash);
		$data = array();
		if ($authCheck == true) {
			$identity = $helpers->authCheck($hash, true);
			if ($json != null) {
				// $correo = (isset($params->correo)) ? $params->correo : null;
				$Idsolicitud = (isset($params->Idsolicitud)) ? $params->Idsolicitud : null;
				// $fecha = $Fecha_sol;
				$em = $this->getDoctrine()->getManager();

				$isset_solicitud = $em->getRepository('BackBundle:Solicitud')->findOneBy(
					array(
						"solIdsolicitud" => $Idsolicitud
						)
					);
				return $helpers->json($isset_solicitud);
			}
		}
	}

	public function correoAction(Request $request) {
		$helpers = $this->get("app.helpers");
		$json = $request->get("json", null);
		$params = json_decode($json);
		$hash = $request->get("authorization", null);
		$authCheck = $helpers->authCheck($hash);
		$data = array();
		if ($authCheck == true) {
			$identity = $helpers->authCheck($hash, true);
			if ($json != null) {
				$sendTo = (isset($params->sendTo)) ? $params->sendTo : null;
				$solicitud = (isset($params->solicitud)) ? $params->solicitud : null;
				$sendToFun = (isset($params->sendToFun)) ? $params->sendToFun : null;
				$subject = "Notificación Sistema de Viaticos VPR";
				$message = "";

				$em = $this->getDoctrine()->getManager();

				$email = $this->getParameter('mailer_user');
				$data['subject'] = $subject;
				$data['message'] = $message;

				$sendTo1 = array();
				$sendTo1 = explode(",", $sendTo);
				foreach ($sendTo1 as $sendTo2) {
					$isset_persona = $em->getRepository('BackBundle:Persona')->findOneBy(
						array(
							"perNombrecompleto" => trim($sendTo2)
							)
						);
					$isset_solicitud = $em->getRepository('BackBundle:Solicitud')->findOneBy(
						array(
							"per" => $isset_persona
							), array('solId' => 'DESC'),1
						);
					if(trim($sendTo2) === $sendToFun){
						$data['nombre'] = trim($sendTo2);
						$data['solicitud'] = $isset_solicitud->getSolIdsolicitud();

						$message = \Swift_Message::newInstance()
						->setSubject($subject)
						->setFrom($email)
						->setTo(trim($isset_persona->getPerCorreoelectronico()))
					// ->setTo(trim($sendTo2))

				// ->setBody($message);
						->setBody(
							$this->renderView(
								'Email/solicitudFun.html.twig',
								array('data' => $data)
								),
							'text/html'
							)
						// ->attach(Swift_Attachment::fromPath('/ruta/hasta/el/archivo.zip'))
						;
						$this->get('mailer')->send($message);
					}else{
						$data['nombre'] = trim($sendTo2);
						$data['solicitud'] = $isset_solicitud->getSolIdsolicitud();


						$message = \Swift_Message::newInstance()
						->setSubject($subject)
						->setFrom($email)
						->setTo(trim($isset_persona->getPerCorreoelectronico()))
					// ->setTo(trim($sendTo2))

				// ->setBody($message);
						->setBody(
							$this->renderView(
								'Email/solicitudOtros.html.twig',
								array('data' => $data)
								),
							'text/html'
							)
						// ->attach(Swift_Attachment::fromPath('/ruta/hasta/el/archivo.zip'))
						;
						$this->get('mailer')->send($message);
					}
				}
				$datos["status"] = "success";
				$datos["msg"] = "Correo enviado correctamente";

			} else {
				$datos = array(
					"status" => "error",
					"code" => 400,
					"msg" => "No existen datos, por favor ingrese los datos"
					);
			}
		} else {
			$datos = array(
				"status" => "error",
				"code" => 400,
				"msg" => "Los datos de acceso son incorrectos"
				);
		}
		return $helpers->json($datos);
	}

	public function correojiAction(Request $request) {
		$helpers = $this->get("app.helpers");
		$json = $request->get("json", null);
		$params = json_decode($json);
		$hash = $request->get("authorization", null);
		$authCheck = $helpers->authCheck($hash);
		$dato = array();
		$datos = array();
		if ($authCheck == true) {
			$identity = $helpers->authCheck($hash, true);
			if ($json != null) {
				$solicitud = (isset($params->solicitud)) ? $params->solicitud : null;
				$sendToFun2 = (isset($params->sendToFun2)) ? $params->sendToFun2 : null;
				$subject = "Notificación Sistema de Viaticos VPR";
				$personasencomision = "";
				$message = "";

				$em = $this->getDoctrine()->getManager();

				$email = $this->getParameter('mailer_user');
				$dato['subject'] = $subject;
				$dato['message'] = $message;

				$sol_com = $em->getRepository('BackBundle:PersonaComision')->findOneBy(
					array(
						"sol" => $solicitud
						)
					);
				$sol_com1 = $em->getRepository('BackBundle:PersonaComision')->findBy(
					array(
						"percomComision" => $sol_com->getPercomComision()
						)
					);
				foreach ($sol_com1 as $comisiona) {
					if($personasencomision === ""){
						$personasencomision = ($comisiona->getPer()->getPerNombrecompleto());
					}else{
						$personasencomision = $personasencomision.",".($comisiona->getPer()->getPerNombrecompleto());
					}
				}
				foreach ($sol_com1 as $sendTo2) {
					$funComision = str_replace($sendToFun2.","," ",$personasencomision);
					if($sendTo2->getPer()->getPerNombrecompleto() === $sendToFun2){
						$isset_fun = $em->getRepository('BackBundle:CargoPersona')->findOneBy(
							array(
								"per" => $sendTo2->getPer()
								)
							);

						$cargo_fun = $em->getRepository('BackBundle:Cargo')->findOneBy(
							array(
								"carId" => $isset_fun->getCar()
								)
							);
						$cargo_jefe = $em->getRepository('BackBundle:CargoPersona')->findOneBy(
							array(
								"car" => $cargo_fun->getCarJefe()
								)
							);
//fin aqui obtengo datos del jefe
						$dato['parajefe'] = $cargo_jefe->getPer()->getPerNombrecompleto();
						$dato['nombrefun'] = trim($sendTo2->getPer()->getPerNombrecompleto());
						$dato['solicitud'] = $sendTo2->getSol()->getSolIdsolicitud();
						$dato['enlace'] =  "Por favor ingrese al Sistema de Viáticos para firmar la solicitud N°.";
						$dato['comisionados'] = $funComision;

						$message = \Swift_Message::newInstance()
						->setSubject($subject)
						->setFrom($email)
						->setTo(trim($cargo_jefe->getPer()->getPerCorreoelectronico()))
					// ->setTo(trim($sendTo2))

				// ->setBody($message);
						->setBody(
							$this->renderView(
								'Email/firmasolicitud.html.twig',
								array('dato' => $dato)
								),
							'text/html'
							)
					// ->attach(Swift_Attachment::fromPath('/ruta/hasta/el/archivo.zip'))
						;
						$this->get('mailer')->send($message);
						$datos["status"] = "success";
						$datos["msg"] = "Correo enviado correctamente";
					}
				}

			} else {
				$datos = array(
					"status" => "error",
					"code" => 400,
					"msg" => "No existen datos, por favor ingrese los datos"
					);
			}
		} else {
			$datos = array(
				"status" => "error",
				"code" => 400,
				"msg" => "Los datos de acceso son incorrectos"
				);
		}
		return $helpers->json($datos);
	}

	public function generarpdfAction(Request $request) {
		$helpers = $this->get("app.helpers");
		$json = $request->get("json", null);
		$params = json_decode($json);
		$hash = $request->get("authorization", null);
		$authCheck = $helpers->authCheck($hash);
		$dato = array();
		$datos = array();
		if ($authCheck == true) {
			$identity = $helpers->authCheck($hash, true);
			if ($json != null) {
				$Idsolicitud = (isset($params->Idsolicitud)) ? $params->Idsolicitud : null;
				// $FechaSolicitud = (isset($params->FechaSolicitud)) ? $params->FechaSolicitud : null;
				// $SolCiudades = (isset($params->SolCiudades)) ? $params->SolCiudades : null;


				$em = $this->getDoctrine()->getManager();

				$solicitud = $em->getRepository('BackBundle:Solicitud')->findOneBy(
					array(
						"solIdsolicitud" => $Idsolicitud
						// "solIdsolicitud" => $DetsolIdsolicitud

						)
					);
// return $helpers->json($solicitud);
				//aqui se obtiene cargo y departamento
				$cargopersonasolicitud = $em->getRepository('BackBundle:CargoPersona')->findOneBy(
					array(
						"per" => $solicitud->getPer()
						)
					);
				// return $helpers->json($cargopersonasolicitud);
				$cargosolicitud = $em->getRepository('BackBundle:Cargo')->findOneBy(
					array(
						"carId" => $cargopersonasolicitud->getCar()
						)
					);
				// return $helpers->json($cargosolicitud);
				//aqui se obtiene fechas, horas solicitud y actividades
				$estadosolicitud = $em->getRepository('BackBundle:EstadoSolicitud')->findBy(
					array(
						"sol" => $solicitud
						)
					);
				// return $helpers->json($estadosolicitud);
				//aqui se obtiene ciudades
				$ciudadesporsolicitud = $em->getRepository('BackBundle:Ciudad')->findAll();
				$ciudadsolicitud = $em->getRepository('BackBundle:CiudadSolicitud')->findBy(
					array(
						"estsol" => $estadosolicitud,
						"ciu" => $ciudadesporsolicitud
						)
					);
				// return $helpers->json($ciudadsolicitud);
				//aqui se obtiene servidores integran
				$funcionario = $em->getRepository('BackBundle:Persona')->findAll();
				$personassolicitud = $em->getRepository('BackBundle:PersonaComision')->findBy(
					array(
						"sol" => $solicitud,
						"per" => $funcionario
						)
					);
				// return $helpers->json($personassolicitud);
				//aqui se obtiene el transporte solicitado
				$transporte = $em->getRepository('BackBundle:TipoTransporte')->findAll();
				$transportesolicitud = $em->getRepository('BackBundle:TransporteSolicitado')->findBy(
					array(
						"estsol" => $estadosolicitud,
						"tiptra" => $transporte
						)
					);
				// return $helpers->json($transportesolicitud);
				//aqui se obtiene el banco de persona
				$banco = $em->getRepository('BackBundle:Banco')->findAll();
				$bancopersonasolicitud = $em->getRepository('BackBundle:BancoPersona')->findOneBy(
					array(
						"ban" => $banco,
						"per" => $solicitud->getPer(),
						"banperEstado" => "A"
						)
					);
				// return $helpers->json($bancopersonasolicitud);
				//aqui se obtiene el jefe
				$cargojefesolicitud = $em->getRepository('BackBundle:Cargo')->findOneBy(
					array(
						"carId" => $cargopersonasolicitud->getCar()->getCarJefe()
						)
					);
				// return $helpers->json($cargojefesolicitud);
				$cargopersonajefesolicitud = $em->getRepository('BackBundle:CargoPersona')->findOneBy(
					array(
						"car" => $cargojefesolicitud
						)
					);
				// return $helpers->json($cargopersonajefesolicitud);
				//aqui se obtiene el coordinador administrativo Financiero
				$cargocotosolicitud = $em->getRepository('BackBundle:Cargo')->findOneBy(
					array(
						"carNombre" => "COORDINADOR/A GENERAL ADMINISTRATIVO FINANCIERO"
						)
					);
				// return $helpers->json($cargocotosolicitud);
				$cargopersonacotosolicitud = $em->getRepository('BackBundle:CargoPersona')->findOneBy(
					array(
						"car" => $cargocotosolicitud
						)
					);
				// return $helpers->json($cargopersonacotosolicitud);
				// $data = array('cargocotosol' => $cargopersonacotosolicitud, 'cargojefesol' => $cargopersonajefesolicitud, 'transportessol' => $transportesolicitud,'bancosol' => $bancopersonasolicitud,'personasssol' => $personassolicitud, 'ciudadessol' => $ciudadsolicitud,'estadosol' => $estadosolicitud, 'cardep' => $cargosolicitud, 'solifecfun' => $solicitud);



				// $html2pdf = new \Spipu\Html2Pdf\Html2Pdf('P', 'A4', 'es');
				// $filename = $Idsolicitud;
				// $url = $Idsolicitud.".pdf";
				$url = 'pdfSol/'.trim($Idsolicitud).".pdf";
				$img1 = $this->container->getParameter('kernel.root_dir') . '\..\web\assets\images\logo.png';
				$directoryPath = preg_replace("/app..../i", "", $img1);
    // echo $directoryPath;
				// $img = 'http://localhost/sistema_viaticos/back/web/assets/images/logo.png';

				// $css = '<style>'.file_get_contents('PATH TO FILE/print2pdf.css').'</style>';

				$css1 = $this->container->getParameter('kernel.root_dir') . '\..\web\assets\css\tables.css';
				$cssPath = preg_replace("/app..../i", "", $css1);

				// $css1 = file_get_contents('PATH TO FILE');

				// return $helpers->json($cssPath);

				$html = $this->renderView(
					'PDF/solicitud.html.twig',
					array(
						// 'data' => $data
						'cargocotosol' => $cargopersonacotosolicitud, 
						'cargojefesol' => $cargopersonajefesolicitud, 
						'transportessol' => $transportesolicitud,
						'bancosol' => $bancopersonasolicitud,
						'personasssol' => $personassolicitud, 
						'ciudadessol' => $ciudadsolicitud,
						'estadosol' => $estadosolicitud, 
						'cardep' => $cargosolicitud, 
						'solifecfun' => $solicitud,
						'imagen' => $directoryPath

						)
					);
				try {
					ob_start();
					// $html2pdf = new \Spipu\Html2Pdf\Html2Pdf('P', 'A4', 'es', true, 'UTF-8',array(0, 0, 0, 0));
					$html2pdf = new \Spipu\Html2Pdf\Html2Pdf('P', 'A4', 'es', 'UTF-8');

					$html2pdf->pdf->SetAuthor('Vicepresidencia de la República del Ecuador');
					$html2pdf->setDefaultFont('Arial');
					// $html2pdf->pdf->SetDisplayMode('fullpage');
					$html2pdf->pdf->SetDisplayMode('real');

// 					$html2pdf->writeHTML("    <style>
//     .centrarVerviatico h5{
//     text-align: center;
//     font-size: 40px;
// }
//     </style>".$html);
					// $html2pdf->setCSS($cssPath);
					$html2pdf->writeHTML($html);
					$html2pdf->output($url,'FD');
					ob_end_clean();
					$datos["status"] = "success";
					// $datos["url"] = $url;
					$datos["msg"] = "Se creo correctamente el documento ".trim($Idsolicitud).".pdf";
				} catch(HTML2PDF_exception $e) {
					$datos["status"] = "error";
					$datos["msg"] = "No se genero el documento ".trim($Idsolicitud).".pdf";
					die($e);
				}
			} else {
				$datos = array(
					"status" => "error",
					"code" => 400,
					"msg" => "No existen datos, por favor ingrese los datos"
					);
			}
		} else {
			$datos = array(
				"status" => "error",
				"code" => 400,
				"msg" => "Los datos de acceso son incorrectos"
				);
		}
		return $helpers->json($datos);

	}


}