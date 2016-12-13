<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\JsonResponse;
use BackBundle\Entity\Departamento;

class DepartamentoController extends Controller {

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
				$siglas = (isset($params->siglas)) ? $params->siglas : null;
				$nombre_padre = (isset($params->nombre_padre)) ? $params->nombre_padre : null;

				$em = $this->getDoctrine()->getManager();

				$departamento_padre = $em->getRepository('BackBundle:Departamento')->findBy(
					array(
						"depNombre" => $nombre_padre
						)
					);

				$isset_departamento = $em->getRepository('BackBundle:Departamento')->findBy(
					array(
						"depNombre" => $nombre
						)
					);

				if (count($isset_departamento) == 0) {
					$departamento = new Departamento();
					$departamento->setDepNombre($nombre);
					$departamento->setDepSiglas($siglas);

					foreach($departamento_padre as $departamentopadre) {
							$depar = $departamentopadre->getDepId();
							$departamento->setDepPadre($depar);
						}

					$departamento->setDepEstado("A");
					$em->persist($departamento);
					$em->flush();
					$data["status"] = "success";
					$data["msg"] = "Departamento creado satisfactoriamente";
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
				$nombreantiguo = (isset($params->nombreantiguo)) ? $params->nombreantiguo : null;
				$nombrenuevo = (isset($params->nombrenuevo)) ? $params->nombrenuevo : null;
				$siglas = (isset($params->siglas)) ? $params->siglas : null;
				$nombre_padre = (isset($params->nombre_padre)) ? $params->nombre_padre : null;
				$estado = (isset($params->estado)) ? $params->estado : null;
				
				$em = $this->getDoctrine()->getManager();

				$departamento_padre = $em->getRepository('BackBundle:Departamento')->findBy(
					array(
						"depNombre" => $nombre_padre
						)
					);

				$departamento = $em->getRepository('BackBundle:Departamento')->findOneBy(
					array(
						"depNombre" => $nombreantiguo
						)
					);

				if (count($departamento) != 0) {
					if($nombrenuevo != null){
						$departamento->setDepNombre($nombrenuevo);
					}

					if($siglas != null){
						$departamento->setDepSiglas($siglas);
					}
					if(count($departamento_padre) != 0){

						foreach($departamento_padre as $departamentopadre) {
							$depar = $departamentopadre->getDepId();
							$departamento->setDepPadre($depar);
						}
					}

					if($estado != null){
						$departamento->setDepEstado($estado);
					}
					$em->persist($departamento);
					$em->flush();
					$data["status"] = "success";
					$data["msg"] = "Departamento actualizado satisfactoriamente";
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