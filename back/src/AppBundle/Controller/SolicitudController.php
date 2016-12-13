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
				$fecha = (new \DateTime());

				$em = $this->getDoctrine()->getManager();
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
						"solEstado" => "A"
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
//inicio crear solicitud
					$solicitud = new Solicitud();
					$solicitud->setSolSecuencial($idsecuencial);
					$solicitud->setSolIdsolicitud($numsol);
					$solicitud->setSolFecharealizacion($fecha);
					$solicitud->setSolNumeroactualizacion("0");
					$solicitud->setSolEstado("A");
					$solicitud->setSolAnio($soloanio);
					$solicitud->setPer($isset_persona);
					$em->persist($solicitud);
					$em->flush();

//fin crear solicitud
//crear personas que integran la solicitud
					$PersonasComision = (isset($params->PersonasComision)) ? $params->PersonasComision : null;
					$funcionarios = Array();
					$funcionarios = explode(',', $PersonasComision);
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
						}
					}
//fin crear personas que integran la solicitud
// inicio crear de estado solicitud
					$FechaDesde_sol = (isset($params->FechaDesde_sol)) ? $params->FechaDesde_sol : null;
					$HoraDesde_sol = (isset($params->HoraDesde_sol)) ? $params->HoraDesde_sol : null;
					$FechaHasta_sol = (isset($params->FechaHasta_sol)) ? $params->FechaHasta_sol : null;
					$HoraHasta_sol = (isset($params->HoraHasta_sol)) ? $params->HoraHasta_sol : null;
					$actividadessol = (isset($params->actividadessol)) ? $params->actividadessol : null;
					$observacionsol = (isset($params->observacionsol)) ? $params->observacionsol : null;

					$fechaDesde = new \DateTime($FechaDesde_sol);
					$fechaHasta = new \DateTime($FechaHasta_sol);
					$HoraDesde = new \DateTime($HoraDesde_sol);
					$HoraHasta = new \DateTime($HoraHasta_sol);
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
						$estado_solicitud->setEstsolRutapdf($rutasol);
						$estado_solicitud->setEstsolObservacion($observacionsol);
						$estado_solicitud->setSol($solicitud);
						$em->persist($estado_solicitud);
						$em->flush();
// inicio crear ciudad solicitud
						$existe_solicitud_ciudad = $em->getRepository('BackBundle:CiudadSolicitud')->findBy(
							array(
								"estsol" => $estado_solicitud
								)
							);
						if (count($existe_solicitud_ciudad) == 0){
							$ciudades_solicitud = (isset($params->ciudades_solicitud)) ? $params->ciudades_solicitud : null;
							$ciudad_sol = Array();
							$ciudad_sol = explode(',', $ciudades_solicitud);
							foreach ($ciudad_sol as $isset_ciudad) {
								$ciudad = $em->getRepository('BackBundle:Ciudad')->findOneBy(
									array(
										"ciuNombre" => $isset_ciudad
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
										"msg" => "No existe la ciudad, por favor ingrese correctamente la ciudad"
										);
								}
							}
//inicio crear transporte solicitud
							$trarutaInicio = (isset($params->trarutaInicio)) ? $params->trarutaInicio : null;
							$trarutaFin = (isset($params->trarutaFin)) ? $params->trarutaFin : null;
							$trahoraInicio = (isset($params->trahoraInicio)) ? $params->trahoraInicio : null;
							$trahoraFin = (isset($params->trahoraFin)) ? $params->trahoraFin : null;
							$trafechaSalida = (isset($params->trafechaSalida)) ? $params->trafechaSalida : null;
							$trahoraSalida = (isset($params->trahoraSalida)) ? $params->trahoraSalida : null;
							$trafechaLlegada = (isset($params->trafechaLlegada)) ? $params->trafechaLlegada : null;
							$trahoraLlegada = (isset($params->trahoraLlegada)) ? $params->trahoraLlegada : null;
							$vehiculo_solicitud = (isset($params->vehiculo_solicitud)) ? $params->vehiculo_solicitud : null;

							$fechaSalida = new \DateTime($trafechaSalida);
							$horaSalida = new \DateTime($trahoraSalida);
							$fechaLlegada = new \DateTime($trafechaLlegada);
							$horaLlegada = new \DateTime($trahoraLlegada);

							$transporte_solu = Array();
							$transporte_solu = explode(',', $vehiculo_solicitud);

							foreach ($transporte_solu as $isset_tipotransporte) {
								$tipotransporte = $em->getRepository('BackBundle:TipoTransporte')->findOneBy(
									array(
										"tiptraNombre" => $isset_tipotransporte
										)
									);
								// return $helpers->json($tipotransporte);
								if(count($tipotransporte)!==0){
									$transporte_solicitud = new TransporteSolicitado();
									$transporte_solicitud->setTrasolRutainicio($trarutaInicio);
									$transporte_solicitud->setTrasolRutafin($trarutaFin);
									$transporte_solicitud->setTrasolFechasalida($fechaSalida);
									$transporte_solicitud->setTrasolHorasalida($horaSalida);
									$transporte_solicitud->setTrasolFechallegada($fechaLlegada);
									$transporte_solicitud->setTrasolHorallegada($horaLlegada);
									$transporte_solicitud->setTiptra($tipotransporte);
									$transporte_solicitud->setEstsol($estado_solicitud);
									$em->persist($transporte_solicitud);
									$em->flush();
								}
							}

// fin crear transporte solicitud
// inicio fondo solicitud
							$valorFondo = (isset($params->valorFondo)) ? $params->valorFondo : null;
							$existe_fondo_solicitud = $em->getRepository('BackBundle:Fondo')->findBy(
								array(
									"sol" => $solicitud
									)
								);

							if (count($existe_fondo_solicitud) == 0){
								$fondosol = new Fondo();
								$fondosol->setFonValor($valorFondo);
								$fondosol->setFonFecha(new \DateTime());
								$fondosol->setSol($solicitud);
								$em->persist($fondosol);
								$em->flush();
								$data["status"] = "success";
								$data["msg"] = "Solicitud creada satisfactoriamente";

							}else {
								$data = array(
									"status" => "error",
									"code" => 400,
									"msg" => "No existe asignadas la o las ciudades en la solicitud, por favor ingrese las ciudades"
									);
							}
					// fin fondo solicitud



						}else {
							$data = array(
								"status" => "error",
								"code" => 400,
								"msg" => "No existe la solicitud, por favor ingrese la solicitud"
								);
						}
// fin crear ciudad solicitud
					}else {
						$data = array(
							"status" => "error",
							"code" => 400,
							"msg" => "No existe la solicitud"
							);
					}
// fin crear de estado solicitud
				}else {
					$data = array(
						"status" => "error",
						"code" => 400,
						"msg" => "Solicitud duplicada, no se puedo crear nueva solicitud"
						);
				}
			} else {
				$data = array(
					"status" => "error",
					"code" => 400,
					"msg" => "Por favor faltan datos"
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

}
