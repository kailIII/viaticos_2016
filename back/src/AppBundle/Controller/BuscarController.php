<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\JsonResponse;
use BackBundle\Entity\Persona;
use BackBundle\Entity\Ciudad;

class BuscarController extends Controller {

	public function personaAction(Request $request) {

		$helpers = $this->get("app.helpers");

		// $json = $request->get("json", null);
		// $params = json_decode($json);

		// $hash = $request->get("authorization", null);
		// $authCheck = $helpers->authCheck($hash);

		// $data = array();

		// if ($authCheck == true) {
		// 	$identity = $helpers->authCheck($hash, true);
			// if ($json != null) {
				
			// 	$nombre_persona = (isset($params->nombre_persona)) ? $params->nombre_persona : null;

				$em = $this->getDoctrine()->getManager();



				$persona = $em->getRepository('BackBundle:Persona')->findBy(
					array(
						"perEstado" => "A"
						)
					);

				
				if (count($persona) != 0) {
					$data = $persona;
					// die();

				} else {
					$data = array(
						"status" => "error",
						"code" => 400,
						"msg" => "No puede visualizar los modulos"
						);
				}

			// } else {
			// 	$data = array(
			// 		"status" => "error",
			// 		"code" => 400,
			// 		"msg" => "Por favor faltan datos"
			// 		);
			// }
		// } else {
		// 	$data = array(
		// 		"status" => "error",
		// 		"code" => 400,
		// 		"msg" => "Los datos de acceso son incorrectos"
		// 		);
		// }
		return $helpers->json($data);
	}

	public function ciudadAction() {

		$helpers = $this->get("app.helpers");

		// $json = $request->get("json", null);
		// $params = json_decode($json);

		// $hash = $request->get("authorization", null);
		// $authCheck = $helpers->authCheck($hash);

		// $data = array();

		// if ($authCheck == true) {
		// 	$identity = $helpers->authCheck($hash, true);
			// if ($json != null) {

				// $nombre_ciudad = (isset($params->nombre_ciudad)) ? $params->nombre_ciudad : null;

			$em = $this->getDoctrine()->getManager();



			$ciudades = $em->getRepository('BackBundle:Ciudad')->findAll();


			if (count($ciudades) != 0) {
				$data = $ciudades;
				// return $data;
				// die();

			} else {
				$data = array(
					"status" => "error",
					"code" => 400,
					"msg" => "No puede visualizar los modulos"
					);
			}

			// } else {
			// 	$data = array(
			// 		"status" => "error",
			// 		"code" => 400,
			// 		"msg" => "Por favor faltan datos"
			// 		);
			// }
		// } else {
		// 	$data = array(
		// 		"status" => "error",
		// 		"code" => 400,
		// 		"msg" => "Los datos de acceso son incorrectos"
		// 		);
		// }
		return $helpers->json($data);
	}
}
