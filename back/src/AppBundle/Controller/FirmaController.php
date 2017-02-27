<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\JsonResponse;
use BackBundle\Entity\Autorizacion;
use BackBundle\Entity\EstadoInforme;
use BackBundle\Entity\Informe;
use BackBundle\Entity\Solicitud;

class FirmaController extends Controller {
	public function autfirAction(Request $request) {
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
				$password = (isset($params->password)) ? $params->password : null;
				$sol_id = (isset($params->sol_id)) ? $params->sol_id : null;
				// $fecha = $Fecha_sol;
				$em = $this->getDoctrine()->getManager();

				$isset_auth = $em->getRepository('BackBundle:Autorizacion')->findOneBy(
					array(
						"per" => $fun_id,
						"autEstado"=> "A"
						)
					);
				if(count($isset_auth)>0){

					$pwd = hash('sha256', $password);

					if($pwd === $isset_auth->getAutClave()){

						$isset_sol = $em->getRepository('BackBundle:Solicitud')->findOneBy(
							array(
								"solIdsolicitud" => $sol_id,
								"solEstado"=> "P"
								)
							);

						if(count($isset_sol)>0){

							$isset_sol->setSolEstado("A");
							$em->persist($isset_sol);
							$em->flush();

							$hoy = (new \DateTime())->format("d/m/Y");
							$anioactual = (new \DateTime())->format('Y');

							$informe = new Informe();
							$informe->setInfFecharealizacion($hoy);
							$informe->setInfNumeroactualizacion(0);
							$informe->setInfEstado("P");
							$informe->setInfAnio($anioactual);
							$informe->setSol($isset_sol);
							$em->persist($informe);
							$em->flush();

							$isset_estadosol = $em->getRepository('BackBundle:EstadoSolicitud')->findOneBy(
								array(
									"sol" => $isset_sol,
									"estsolEstado"=> "A"
									)
								);
							if(count($isset_estadosol)>0){

								// return $helpers->json($informe);

								$rutainforme = str_replace('solicitud', 'informe', $isset_estadosol->getEstsolRutapdf());

								$EstinfFechasalida = $isset_estadosol->getEstsolFechasalida();
								$EstinfHorasalida = $isset_estadosol->getEstsolHorasalida();
								$EstinfFechallegada = $isset_estadosol->getEstsolFechallegada();
								$EstinfHorallegada = $isset_estadosol->getEstsolHorallegada();
								$EstinfActividades = $isset_estadosol->getEstsolActividades();
								$EstinfObservacion = $isset_estadosol->getEstsolObservacion();

								$estadoinforme = new EstadoInforme();
								$estadoinforme->setEstinfFechasalida($EstinfFechasalida);
								$estadoinforme->setEstinfHorasalida($EstinfHorasalida);
								$estadoinforme->setEstinfFechallegada($EstinfFechallegada);
								$estadoinforme->setEstinfHorallegada($EstinfHorallegada);
								$estadoinforme->setEstinfActividades($EstinfActividades);
								$estadoinforme->setEstinfEstado("A");
								$estadoinforme->setEstinfNumeroactualizacion("0");
								$estadoinforme->setEstinfRutapdf($rutainforme);
								$estadoinforme->setEstinfObservacion($EstinfObservacion);
								$estadoinforme->setInf($informe);
								

								$em->persist($estadoinforme);
								$em->flush();
								// return $helpers->json($isset_estadosol);
								$data["status"] = "success";
								$data["msg"] = "Solicitud firmada satisfactoriamente";
							}
						}

					}else{
						$data = array(
							"status" => "error",
							"code" => 400,
							"msg" => "Contraseña incorrecta"
							);
					}
					return $helpers->json($data);
				}

			}
		}
	}
}