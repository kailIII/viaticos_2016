<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\JsonResponse;
use BackBundle\Entity\Rol;

class RolController extends Controller {

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
				$nombre = (isset($params->nombre)) ? $params->nombre : null;
				// $estado = (isset($params->estado)) ? $params->estado : null;
				
				$em = $this->getDoctrine()->getManager();

				$isset_rol = $em->getRepository('BackBundle:Rol')->findBy(
					array(
						"rolNombre" => $nombre
						)
					);

				if (count($isset_rol) == 0) {
					$rol = new Rol();
					$rol->setRolNombre($nombre);
					$rol->setRolEstado("A");
					$em->persist($rol);
					$em->flush();
					$data["status"] = "success";
					$data["msg"] = "Rol creado satisfactoriamente";
				} else {
					$data = array(
						"status" => "error",
						"code" => 400,
						"msg" => "No pudo crear el Rol"
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
				$nombreantiguo = (isset($params->nombreantiguo)) ? $params->nombreantiguo : null;
				$nombrenuevo = (isset($params->nombrenuevo)) ? $params->nombrenuevo : null;
				$estado = (isset($params->estado)) ? $params->estado : null;
				
				$em = $this->getDoctrine()->getManager();

				$rol = $em->getRepository('BackBundle:Rol')->findOneBy(
					array(
						"rolNombre" => $nombreantiguo
						)
					);

				if (count($rol) != 0) {
					if($nombrenuevo != null){
						$rol->setRolNombre($nombrenuevo);
					}

					if($estado != null){
						$rol->setRolEstado($estado);
					}
					$em->persist($rol);
					$em->flush();
					$data["status"] = "success";
					$data["msg"] = "Rol actualizado satisfactoriamente";
				} else {
					$data = array(
						"status" => "error",
						"code" => 400,
						"msg" => "No pudo actualizar el Rol"
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