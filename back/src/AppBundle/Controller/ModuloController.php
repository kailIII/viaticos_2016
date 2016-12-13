<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\JsonResponse;
use BackBundle\Entity\Modulo;

class ModuloController extends Controller {

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
				$descripcion = (isset($params->descripcion)) ? $params->descripcion : null;
				$ubicacion = (isset($params->ubicacion)) ? $params->ubicacion : null;
				$nombre_padre = (isset($params->nombre_padre)) ? $params->nombre_padre : null;
				$nombre_mostrar = (isset($params->nombre_mostrar)) ? $params->nombre_mostrar : null;

				$em = $this->getDoctrine()->getManager();

				$modulo_padre = $em->getRepository('BackBundle:Modulo')->findBy(
					array(
						"modNombre" => "menu_".strtolower(str_replace(' ', '_', $nombre_padre))
						)
					);

				$isset_modulo = $em->getRepository('BackBundle:Modulo')->findBy(
					array(
						"modNombremostrar" => $nombre_mostrar,
						"modPadre" => $modulo_padre
						)
					);

				if (count($isset_modulo) == 0) {
					$modulo = new Modulo();
					$modulo->setModNombre(strtolower($nombre_padre).'_'.strtolower(str_replace(' ', '_', $nombre_mostrar)));
					$modulo->setModDescripcion($descripcion);
					$modulo->setModUbicacion($ubicacion);
					foreach($modulo_padre as $modulopadre) {
						$modu = $modulopadre->getModId();
						$modulo->setModPadre($modu);
					}
					$modulo->setModEstado("A");
					$modulo->setModNombremostrar($nombre_mostrar);
					$em->persist($modulo);
					$em->flush();
					$data["status"] = "success";
					$data["msg"] = "Modulo creado satisfactoriamente";
				} else {
					$data = array(
						"status" => "error",
						"code" => 400,
						"msg" => "No pudo crear el Modulo"
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
				$descripcion = (isset($params->siglas)) ? $params->siglas : null;
				$ubicacion = (isset($params->ubicacion)) ? $params->ubicacion : null;
				$nombre_padre_antiguo = (isset($params->nombre_padre_antiguo)) ? $params->nombre_padre_antiguo : null;
				$nombre_padre_nuevo = (isset($params->nombre_padre_nuevo)) ? $params->nombre_padre_nuevo : null;
				$estado = (isset($params->estado)) ? $params->estado : null;
				$nombre_mostrar_antiguo = (isset($params->nombre_mostrar_antiguo)) ? $params->nombre_mostrar_antiguo : null;
				$nombre_mostrar_nuevo = (isset($params->nombre_mostrar_nuevo)) ? $params->nombre_mostrar_nuevo : null;

				$em = $this->getDoctrine()->getManager();

				$modulo_padre_antiguo = $em->getRepository('BackBundle:Modulo')->findOneBy(
					array(
						"modNombre" => "menu_".strtolower(str_replace(' ', '', $nombre_padre_antiguo))
						)
					);
				$modulo = $em->getRepository('BackBundle:Modulo')->findOneBy(
					array(
						"modNombremostrar" => ucwords($nombre_mostrar_antiguo),
						"modPadre" => $modulo_padre_antiguo->getModId()
						)
					);
				// return $helpers->json(ucwords($nombre_mostrar_antiguo));
				if (count($modulo) != 0) {

					if($nombre_padre_nuevo == null){
						$nombre_padre_nuevo = $nombre_padre_antiguo;
					}

					if($nombre_mostrar_nuevo == null){
						$nombre_mostrar_nuevo = $nombre_mostrar_antiguo;
					}

						$modulo_padre_nuevo = $em->getRepository('BackBundle:Modulo')->findOneBy(
							array(
								"modNombre" => "menu_".strtolower(str_replace(' ', '', $nombre_padre_nuevo))
								)
							);
						$modulo_nuevo = $em->getRepository('BackBundle:Modulo')->findOneBy(
							array(
								"modNombremostrar" => ucwords($nombre_mostrar_nuevo),
								"modPadre" => $modulo_padre_nuevo->getModId()
								)
							);

// return $helpers->json($modulo_padre_nuevo->getModId());
					$id_padre_antiguo = $modulo->getModPadre();
					$id_padre_nuevo = $modulo_padre_nuevo->getModId();

					// if($nombre_mostrar_nuevo != null ){
						// $modulo_Comparacion = $em->getRepository('BackBundle:Modulo')->findOneBy(
						// 	array(
						// 		"modNombremostrar" => ucwords($nombre_mostrar_nuevo),
						// 		"modPadre" => $modulo_padre_antiguo
						// 		)
						// 	);

					
					if($id_padre_antiguo===$id_padre_nuevo && $nombre_mostrar_antiguo!==$nombre_mostrar_nuevo && count($modulo_nuevo)==0){
// $modulo->setModPadre($id_padre_nuevo);
						$modulo->setModNombre(strtolower(str_replace(' ', '', $modulo->getModNombremostrar())).'_'.strtolower(str_replace(' ', '_', $nombre_mostrar_nuevo)));
						$modulo->setModNombremostrar(ucwords(str_replace(' ', '_', $nombre_mostrar_nuevo)));
						if($ubicacion != null){
							$modulo->setModUbicacion($ubicacion);
						}
						if($estado != null){
							$modulo->setModEstado($estado);
						}

						if($descripcion != null){
							$modulo->setModDescripcion($descripcion);
						}

						$em->persist($modulo);
						$em->flush();
						$data["status"] = "success";
						$data["msg"] = "Modulo actualizado satisfactoriamente 1";

					}elseif($id_padre_antiguo!==$id_padre_nuevo && $nombre_mostrar_antiguo===$nombre_mostrar_nuevo && count($modulo_nuevo)==0){
						$modulo->setModPadre($id_padre_nuevo);
						$modulo->setModNombre(strtolower(str_replace(' ', '', $modulo_padre_nuevo->getModNombremostrar())).'_'.strtolower(str_replace(' ', '_', $nombre_mostrar_antiguo)));
						if($ubicacion != null){
							$modulo->setModUbicacion($ubicacion);
						}
						if($estado != null){
							$modulo->setModEstado($estado);
						}

						if($descripcion != null){
							$modulo->setModDescripcion($descripcion);
						}

						$em->persist($modulo);
						$em->flush();
						$data["status"] = "success";
						$data["msg"] = "Modulo actualizado satisfactoriamente 2";

					}elseif($id_padre_antiguo!==$id_padre_nuevo && $nombre_mostrar_antiguo!==$nombre_mostrar_nuevo && count($modulo_nuevo)==0){
						// return $helpers->json($modulo);
						$modulo->setModPadre($id_padre_nuevo);
						$modulo->setModNombre(strtolower(str_replace(' ', '', $modulo_padre_nuevo->getModNombremostrar())).'_'.strtolower(str_replace(' ', '_', $nombre_mostrar_nuevo)));
						$modulo->setModNombremostrar(ucwords(str_replace(' ', '_', $nombre_mostrar_nuevo)));
						if($ubicacion != null){
							$modulo->setModUbicacion($ubicacion);
						}
						if($estado != null){
							$modulo->setModEstado($estado);
						}

						if($descripcion != null){
							$modulo->setModDescripcion($descripcion);
						}

						$em->persist($modulo);
						$em->flush();
						$data["status"] = "success";
						$data["msg"] = "Modulo actualizado satisfactoriamente 3";

					}elseif(count($modulo_nuevo)!=0){
						$data = array(
							"status" => "error",
							"code" => 400,
							"msg" => "No se realizó ninguna actualización del módulo existente, duplicado"
							);
					}
				// }
				}  else {
					$data = array(
						"status" => "error",
						"code" => 400,
						"msg" => "No existe registrado el Modulo"
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