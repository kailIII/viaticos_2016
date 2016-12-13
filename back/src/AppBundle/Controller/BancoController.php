<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\JsonResponse;
use BackBundle\Entity\Banco;

class BancoController extends Controller {

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
				$nombrebanco = (isset($params->nombrebanco)) ? $params->nombrebanco : null;

				$em = $this->getDoctrine()->getManager();
				$isset_banco = $em->getRepository('BackBundle:Banco')->findBy(
					array(
						"banNombre" => $nombrebanco
						)
					);

				if (count($isset_banco) == 0) {
					$banco = new Banco();
					$banco->setBanNombre($nombrebanco);
					$em->persist($banco);
					$em->flush();
					$data["status"] = "success";
					$data["msg"] = "Banco creado satisfactoriamente";
				} else {
					$data = array(
						"status" => "error",
						"code" => 400,
						"msg" => "No pudo crear el Banco"
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

	public function editarAction(Request $request) {
		$helpers = $this->get("app.helpers");

		$json = $request->get("json", null);
		$params = json_decode($json);

		$hash = $request->get("authorization", null);
		$authCheck = $helpers->authCheck($hash);

		$data = array();

		if ($authCheck == true) {
			$identity = $helpers->authCheck($hash, true);
			if ($json != null) {
			$nombrebanco = (isset($params->nombrebanco)) ? $params->nombrebanco : null;
			$nuevobanco = (isset($params->nuevobanco)) ? $params->nuevobanco : null;
				
				$em = $this->getDoctrine()->getManager();

				$banco = $em->getRepository('BackBundle:Banco')->findOneBy(
					array(
						"banNombre" => $nombrebanco
						)
					);

				if (count($banco) != 0) {
					$banco->setBanNombre($nuevobanco);
					$em->persist($banco);
					$em->flush();
					$data["status"] = "success";
					$data["msg"] = "Banco actualizado satisfactoriamente";
				} else {
					$data = array(
						"status" => "error",
						"code" => 400,
						"msg" => "No pudo crear el Banco"
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