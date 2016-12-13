<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\JsonResponse;
use BackBundle\Entity\Comision;

class ComisionController extends Controller {
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
				// $identificacion = (isset($params->identificacion)) ? $params->identificacion : null;
				$FechaDesde_com = (isset($params->FechaDesde_com)) ? $params->FechaDesde_com : null;
				$HoraDesde_com = (isset($params->HoraDesde_com)) ? $params->HoraDesde_com : null;
				$FechaHasta_com = (isset($params->FechaHasta_com)) ? $params->FechaHasta_com : null;
				$HoraHasta_com = (isset($params->HoraHasta_com)) ? $params->HoraHasta_com : null;
				$Nombre_com = (isset($params->Nombre_com)) ? $params->Nombre_com : null;
				$Obs_com = (isset($params->Obs_com)) ? $params->Obs_com : null;

				$fechaDesde = new \DateTime($FechaDesde_com);
				$fechaHasta = new \DateTime($FechaHasta_com);
				$HoraDesde = new \DateTime($HoraDesde_com);
				$HoraHasta = new \DateTime($HoraHasta_com);

				// $fechaDesde1 = $fechaDesde->format('d/m/Y');
				// $fechaHasta1 = $fechaHasta->format('d/m/Y');
				// $HoraDesde1 = $HoraDesde->format('H:i');
				// $HoraHasta1 = $HoraHasta->format('H:i');


				$em = $this->getDoctrine()->getManager();
				$isset_comision = $em->getRepository('BackBundle:Comision')->findBy(
					array(
						"comNombre" => $Nombre_com,
						"comFechadesde" => $fechaDesde,
						"comFechahasta" => $fechaHasta,
						"comEstado" => "A"
						)
					);

				// return $helpers->json($isset_comision);
				if (count($isset_comision) == 0){
					$comision = new Comision();
					$comision->setComNombre($Nombre_com);
					$comision->setcomFechadesde($fechaDesde);
					$comision->setcomFechahasta($fechaHasta);
					$comision->setcomHoradesde($HoraDesde);
					$comision->setcomHorahasta($HoraHasta);
					$comision->setcomObservacion($Obs_com);
					$comision->setcomEstado("A");
					$em->persist($comision);
					$em->flush();
					$data["status"] = "success";
					$data["msg"] = "Comision creada satisfactoriamente";

				}else {
					$data = array(
						"status" => "error",
						"code" => 400,
						"msg" => "Comision duplicada, no se puedo crear nueva Comision"
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