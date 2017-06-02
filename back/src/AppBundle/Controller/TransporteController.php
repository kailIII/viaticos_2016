<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\JsonResponse;
use BackBundle\Entity\TipoTransporte;

class TransporteController extends Controller {
	public function buscarAction(Request $request) {
			$helpers = $this->get("app.helpers");

			$json = $request->get("json", null);
			$params = json_decode($json);

			$hash = $request->get("authorization", null);
			$authCheck = $helpers->authCheck($hash);

			$data = array();

			if ($authCheck == true) {
				$identity = $helpers->authCheck($hash, true);
				if ($json != null) {
					$tritra = (isset($params->tritra)) ? $params->tritra : null;

				$em = $this->getDoctrine()->getManager();
				$isset_tritra = $em->getRepository('BackBundle:TipoTransporte')->findBy(
					array(
						"tiptraTipo" => $tritra,
						"tiptraEstado" => "A"
						)
					);
				if(count($isset_tritra) != 0){
					return $helpers->json($isset_tritra);
				}else{
					alert("Por favor ingrese el tipo de movilización");
				}
				}
			}
		}
	
}