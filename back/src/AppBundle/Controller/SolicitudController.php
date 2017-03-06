<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
// use Symfony\Component\Form\Extension\Core\Type\DateType;
// use Symfony\Component\Validator\Constraints\DateTime;
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
				$Fecha_sol = (isset($params->Fecha_sol)) ? $params->Fecha_sol : null;
				$fecha = $Fecha_sol;
				$em = $this->getDoctrine()->getManager();
//inicio crear solicitud
				$isset_persona = $em->getRepository('BackBundle:Persona')->findOneBy(
					array(
						"perCorreoelectronico" => $correo,
						"perEstado"=> "A"
						)
					);
				$isset_solicitud = $em->getRepository('BackBundle:Solicitud')->findBy(
					array(
						"solFecharealizacion" => $fecha, 
						"per" => $isset_persona,
						"solEstado" => "P"
						)
					);
				if (count($isset_solicitud) == 0){
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
//inicio crear estado solicitud
					$FechaDesde_sol = (isset($params->FechaDesde_sol)) ? $params->FechaDesde_sol : null;
					$HoraDesde_sol = (isset($params->HoraDesde_sol)) ? $params->HoraDesde_sol : null;
					$FechaHasta_sol = (isset($params->FechaHasta_sol)) ? $params->FechaHasta_sol : null;
					$HoraHasta_sol = (isset($params->HoraHasta_sol)) ? $params->HoraHasta_sol : null;
					$actividadessol = (isset($params->actividadessol)) ? $params->actividadessol : null;
					$observacionsol = (isset($params->observacionsol)) ? $params->observacionsol : null;

					// $datetime = new \DateTime();
// $newDate = $datetime->createFromFormat('d/m/Y', '23/05/2013');

					$fechaDesde = $FechaDesde_sol;
					$fechaHasta = $FechaHasta_sol;
					$HoraDesde = $HoraDesde_sol;
					$HoraHasta = $HoraHasta_sol;

					
					// $fechaDesde = $datetime->createFromFormat('d-m-Y', $FechaDesde_sol);
					// $fechaHasta = $datetime->createFromFormat('d-m-Y', $FechaHasta_sol);
					// $HoraDesde = $datetime->createFromFormat('d-m-Y', $HoraDesde_sol);
					// $HoraHasta = $datetime->createFromFormat('d-m-Y', $HoraHasta_sol);

					// $fechaDesde = new \DateTime($FechaDesde_sol);
					// $fechaHasta = new \DateTime($FechaHasta_sol);
					// $HoraDesde = new \DateTime($HoraDesde_sol);
					// $HoraHasta = new \DateTime($HoraHasta_sol);

// $fechastotales = ("fechaDesde: ".$fechaDesde." fechaHasta: ".$fechaHasta. " HoraDesde: ".$HoraDesde." HoraHasta: ".$HoraHasta);

// $fechastotales = ("fechaDesde: ".$fechaDesde." fechaHasta: ".$fechaHasta);


					// return $helpers->json($fechastotales);

					$rutasol = "pdf/".trim($isset_persona->getPerIdentificacion())."/".$numsol.".pdf";

					$existe_estado_solicitud = $em->getRepository('BackBundle:EstadoSolicitud')->findBy(
						array(
							"sol" => $solicitud
							)
						);
					// return $helpers->json($existe_estado_solicitud);
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
// return $helpers->json($estado_solicitud);

// inicio crear ciudad solicitud		
						$existe_solicitud_ciudad = $em->getRepository('BackBundle:CiudadSolicitud')->findBy(
							array(
								"estsol" => $estado_solicitud
								)
							);
						if (count($existe_solicitud_ciudad) == 0){
							$ciudades_sol = (isset($params->ciudades_sol)) ? $params->ciudades_sol : null;
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
//crear personas que integran la solicitud
							$existe_solicitud_comisionados = $em->getRepository('BackBundle:PersonaComision')->findBy(
								array(
									"sol" => $solicitud
									)
								);
							if (count($existe_solicitud_comisionados) == 0){
								$funcionarios_sol = (isset($params->funcionarios_sol)) ? $params->funcionarios_sol : null;
								$funcionarios = Array();
								$funcionarios = explode(',', $funcionarios_sol);
								foreach ($funcionarios as $sol_persona) {
									$hay_persona = $em->getRepository('BackBundle:Persona')->findOneBy(
										array(
											"perNombrecompleto" => trim($sol_persona),
											"perEstado"=> "A"
											)
										);
									if (count($hay_persona) !== 0){
										$personacomision = new PersonaComision();
										$personacomision->setPer($hay_persona);
										$personacomision->setSol($solicitud);
										$em->persist($personacomision);
										$em->flush();
									}else {
										$data = array(
											"status" => "error",
											"code" => 400,
											"msg" => "Funcionario no existe, por favor ingrese los datos correctos1"
											);
									}
										//inicio crear transporte solicitud
									$transportesolicitado1 = $em->getRepository('BackBundle:TransporteSolicitado')->findBy(
										array(
											"estsol" => $estado_solicitud
											)
										);
									if(count($transportesolicitado1)==0){
										$solotransporteSol = (isset($params->solotransporteSol)) ? $params->solotransporteSol : null;
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

// $TrasolFechasalida = \DateTime::createFromFormat('d/m/Y', $isset_transporte[4]);
// 												$TrasolHorasalida = new \DateTime($isset_transporte[5]);
// 												$TrasolFechallegada = \DateTime::createFromFormat('d/m/Y', $isset_transporte[6]);
// 												$TrasolHorallegada = new \DateTime($isset_transporte[7]);

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
										$data["status"] = "success";
										$data["msg"] = "Solicitud creada satisfactoriamente";
									}
//fin crear transporte solicitud
								}
// //fin crear transporte solicitud
							}
// fin crear comisionados solicitud
						}else {
							$data = array(
								"status" => "error",
								"code" => 400,
								"msg" => "Ya existe la o las ciudades asignadas a la solicitud"
								);
						}
// fin crear ciudad solicitud
					}else {
						$data = array(
							"status" => "error",
							"code" => 400,
							"msg" => "No existe la solicitud, por favor cree una solicitud para poder continuar"
							);
					}
//fin crear estado solicitud  //aqui
				}else {
					$data = array(
						"status" => "error",
						"code" => 400,
						"msg" => "La solicitud ya existe, por favor ingrese una nueva solicitud"
						);
				}
//fin crear solicitud
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

				// $cargoPer = $em->getRepository('BackBundle:CargoPersona')->findOneBy(
				// 	array(
				// 		"per" => $fun_id,
				// 		"carperEstado"=> "A"
				// 		)
				// 	);
				// // $cargos = $em->getRepository('BackBundle:Cargo')->findOneBy(
				// 	array(
				// 		"carId" => $cargoPer->getCar()
				// 		)
				// 	);
				// $cargoPadre = $em->getRepository('BackBundle:Cargo')->findBy(
				// 	array(
				// 		"carJefe" => $cargos
				// 		)
				// 	);
				// if(count($cargoPadre)==0){
				// if(count($cargoPer) > 0){
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
				foreach ($estsolPer as $estsolPer1) {
					$ciuPer = $em->getRepository('BackBundle:CiudadSolicitud')->findBy(
						array(
							"estsol" => $estsolPer1
							)
						);
					// return $helpers->json($ciuPer);
					if(count($ciuPer)>0){
						array_push($reporte, $ciuPer);
					}
				}
				return $helpers->json($reporte);

				// }else{
				// 	$cargoPer1 = $em->getRepository('BackBundle:CargoPersona')->findBy(
				// 		array(
				// 			"car" => $cargoPadre,
				// 			"carperEstado"=> "A"
				// 			)
				// 		);
				// 	$solicitudPer = array();
				// 	// $solicitudPer = null;
				// 	foreach ($cargoPer1 as $cargoHijo) {
				// 		// return $helpers->json($cargoHijo);
				// 		$solPer1 = $em->getRepository('BackBundle:Solicitud')->findBy(
				// 			array(
				// 				"per" => $cargoHijo->getPer()
				// 				)
				// 			);
				// 		$estsolPer1 = $em->getRepository('BackBundle:EstadoSolicitud')->findBy(
				// 			array(
				// 				"sol" => $solPer1
				// 				)
				// 			);
				// 		$ciuPer1 = $em->getRepository('BackBundle:CiudadSolicitud')->findBy(
				// 			array(
				// 				"estsol" => $estsolPer1
				// 				)
				// 			);
				// 		// if(count($solPer1) > 0){
				// 		// 	$solicitudPer = $solPer1;
				// 		// }
				// 		if(count($ciuPer1) > 0){
				// 			array_push($solicitudPer,$ciuPer1);
				// 		}
				// 	}
				// 		// return $helpers->json($solPer1);
				// 	return $helpers->json($solicitudPer);
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
						"solIdsolicitud" => $DetsolIdsolicitud
						)
					);
				//aqui se obtiene cargo y departamento
				$cargopersonasolicitud = $em->getRepository('BackBundle:CargoPersona')->findOneBy(
					array(
						"per" => $solicitud->getPer()
						)
					);
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

	public function enviarCorreoAction(Request $request) {
		$helpers = $this->get("app.helpers");
		$json = $request->get("json", null);
		$params = json_decode($json);
		$hash = $request->get("authorization", null);
		$authCheck = $helpers->authCheck($hash);
		$data = array();
		if ($authCheck == true) {
			$identity = $helpers->authCheck($hash, true);
			if ($json != null) {
				$mailto = (isset($params->mailto)) ? $params->mailto : null;
				$mailfrom = (isset($params->mailfrom)) ? $params->mailfrom : null;
				$mailheader = (isset($params->mailheader)) ? $params->mailheader: null;
				$mailmsg = (isset($params->mailmsg)) ? $params->mailmsg : null;
				$mailviatico = (isset($params->mailviatico)) ? $params->mailviatico : null;



				// echo 'Enviando correo';
				// $to = $mailto;
				// $subject = "Nueva Solicitud de Viatico: ". $mailviatico;
				// $txt = "Hola es un placer saludar desde el correo en pruebas!";
				// $headers = "From: aquiotrocorreo@ejemplo.com" . "\r\n" .
				// "CC: yaquiotrocorreocomocc@aprenderaprogramar.com";
				// mail($to,$subject,$txt,$headers);

				$helpers->correosol($mailviatico,$mailto,$mailfrom);
			}
		}
	}

	
}