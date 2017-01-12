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
				// $fechahoy = (new \DateTime());
				$Fecha_sol = (isset($params->Fecha_sol)) ? $params->Fecha_sol : null;
				$fecha = new \DateTime($Fecha_sol);
				// $fecha = \DateTime::createFromFormat('m/d/Y', $Fecha_sol);
				// $fechabusqueda = (\DateTime::createFromFormat('d/m/Y', $fecha));

				// return $helpers->json($fecha);
				// return $helpers->json($fecha);

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
//inicio crear estado solicitud
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
								// "perId" => $sol_persona,
											"perEstado"=> "A"
											)
										);
									if (count($hay_persona) !== 0){
										$personacomision = new PersonaComision();
										$personacomision->setPer($hay_persona);
										$personacomision->setSol($solicitud);
										$em->persist($personacomision);
										$em->flush();
										
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
												// var_dump($traruta_sol);
											foreach ($traruta_sol as $existe_transporte) {
												// $existe_transporte1 = "";
												// $existe_transporte1 = $helpers->json($existe_transporte);

											$isset_transporte = Array();
												// $isset_transporte.length=0;
												$isset_transporte = explode(',', $existe_transporte);
												// var_dump($isset_transporte);
												
												$Tiptramod = $isset_transporte[1];
												$TrasolRutainicio = $isset_transporte[2];
												$TrasolRutafin = $isset_transporte[3];
												// $TrasolFechasalida = (new \DateTime($isset_transporte[4]))->format('m/d/Y');
												$TrasolFechasalida = \DateTime::createFromFormat('d/m/Y', $isset_transporte[4]);
												$TrasolHorasalida = new \DateTime($isset_transporte[5]);
												// $TrasolFechallegada = (new \DateTime($isset_transporte[6]))->format('m/d/Y');
												$TrasolFechallegada = \DateTime::createFromFormat('d/m/Y', $isset_transporte[6]);
												$TrasolHorallegada = new \DateTime($isset_transporte[7]);
// var_dump($TrasolFechasalida);
					// return $helpers->json($TrasolFechasalida);
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
										}else {
											$data = array(
												"status" => "error",
												"code" => 400,
												"msg" => "Solicitud no existe, por favor ingrese la solicitud"
												);
										}
//fin crear transporte solicitud
									}else {
										$data = array(
											"status" => "error",
											"code" => 400,
											"msg" => "Funcionario no existe, por favor ingrese los datos correctos"
											);
									}
								}


//inicio crear transporte solicitud
								// $solotransporteSol = (isset($params->solotransporteSol)) ? $params->solotransporteSol : null;

								// $traruta_sol = Array();
								// $traruta_sol = explode(';', $solotransporteSol);
								// $transportesolicitado1 = $em->getRepository('BackBundle:TransporteSolicitado')->findBy(
								// 	array(
								// 		"estsol" => $estado_solicitud
								// 		)
								// 	);
// if(count($transportesolicitado1)==0){
// 										foreach ($transporte_solu as $isset_tipotransporte) {
// 											$tipotransporte = $em->getRepository('BackBundle:TipoTransporte')->findOneBy(
// 												array(
// 													"tiptraNombre" => $isset_tipotransporte
// 													)
// 												);
// 											foreach ($trarutaInicio_sol as $trarutaInicio_sol_ini) {
// 												foreach ($trarutaFin_sol as $trarutaFin_sol_ini) {
// 													foreach ($trahoraInicio_sol as $trahoraInicio_sol_ini) {
// 														foreach ($trahoraFin_sol as $trahoraFin_sol_ini) {
// 															foreach ($trafechaInicio_sol as $trafechaInicio_sol_ini) {
// 																foreach ($trafechaFin_sol as $trafechaFin_sol_ini) {
// 																	$transporte_solicitud = new TransporteSolicitado();
// 																	$transporte_solicitud->setTrasolRutainicio($trarutaInicio_sol_ini);
// 																	$transporte_solicitud->setTrasolRutafin($trarutaFin_sol_ini);
// 																	$transporte_solicitud->setTrasolFechasalida($trafechaInicio_sol_ini);
// 																	$transporte_solicitud->setTrasolHorasalida($trahoraInicio_sol_ini);
// 																	$transporte_solicitud->setTrasolFechallegada($trafechaFin_sol_ini);
// 																	$transporte_solicitud->setTrasolHorallegada($trahoraFin_sol_ini);
// 																	$transporte_solicitud->setTiptra($tipotransporte);
// 																	$transporte_solicitud->setEstsol($estado_solicitud);
// 																	$em->persist($transporte_solicitud);
// 																	$em->flush();
// 																}
// 															}
// 														}
// 													}
// 												}
// 											}
// 										}
// //fin crear transporte solicitud
							}else {
								$data = array(
									"status" => "error",
									"code" => 400,
									"msg" => "Funcionario no existe, por favor ingrese los datos correctos"
									);
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
//fin crear estado solicitud
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
}