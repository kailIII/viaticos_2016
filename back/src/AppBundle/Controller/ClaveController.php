<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\JsonResponse;
use BackBundle\Entity\AccesoPersona;

class ClaveController extends Controller {

	public function cambiarAction(Request $request) {
		$helpers = $this->get("app.helpers");
		$json = $request->get("json", null);
		$params = json_decode($json);
		$hash = $request->get("authorization", null);
		$authCheck = $helpers->authCheck($hash);
		$data = array();

		if ($authCheck == true) {
			$identity = $helpers->authCheck($hash, true);

			if ($json != null) {
				$clave = (isset($params->clave)) ? $params->clave : null;
				$correopersona = (isset($params->correopersona)) ? $params->correopersona : null;

				$pwd = hash('sha256', $clave);

				$em = $this->getDoctrine()->getManager();
				$isset_persona = $em->getRepository('BackBundle:AccesoPersona')->findOneBy(
					array(
						"aperUsuario" => $correopersona
						)
					);
				if (count($isset_persona) > 0) {
					// $banco = new Banco();
					$isset_persona->setAperClave($pwd);
					$isset_persona->setAperCambioclave("A");
					$em->persist($isset_persona);
					$em->flush();
					$data["status"] = "success";
					$data["msg"] = "Clave actualizada correctamente";
				} else {
					$data = array(
						"status" => "error",
						"code" => 400,
						"msg" => "Error al actualizar la clave"
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