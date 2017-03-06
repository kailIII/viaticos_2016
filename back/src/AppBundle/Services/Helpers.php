<?php
namespace AppBundle\Services;

class Helpers {
	public $jwt_auth;
	
	public function __construct($jwt_auth) {
		$this->jwt_auth = $jwt_auth;
	}
	
	public function authCheck($hash, $getIdentity = false){
		$jwt_auth = $this->jwt_auth;
		
		$auth = false;
		if($hash != null){
			if($getIdentity == false){
				$check_token = $jwt_auth->checkToken($hash);
				if($check_token == true){
					$auth = true;
				}
			}else{
				$check_token = $jwt_auth->checkToken($hash, true);
				if(is_object($check_token)){
					$auth = $check_token;
				}
			}
		}
		
		return $auth;
	}
	
	public function json($data){
		$normalizers = array(new \Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer());
		$encoders = array("json" => new \Symfony\Component\Serializer\Encoder\JsonEncoder());
		
		$serializer = new \Symfony\Component\Serializer\Serializer($normalizers, $encoders);
		$json = $serializer->serialize($data, 'json');
		
		$response = new \Symfony\Component\HttpFoundation\Response();
		$response->setContent($json);
		$response->headers->set("Content-Type", "application/json");
		
		return $response;
	}

	public function correosol($solId, $solTo, $solFrom)
	{

		$message = \Swift_Message::newInstance()
		->setSubject('Nueva Solicitud de Viatico:')
		->setFrom($solFrom)
		->setTo($solTo)
		// ->setBody(
		// 	$this->renderView(
  //               // app/Resources/views/Correo/correosolicitud.html.twig
		// 		'Correo/correosolicitud.html.twig',
		// 		array('solId' => $solId)
		// 		),
		// 	'text/html'
		// 	)
		->setBody('AppBundle:Correo:correosolicitud.html.twig', 'text/html');        
         // * If you also want to include a plaintext version of the message
        // ->addPart(
        //     $this->renderView(
        //         'Emails/registration.txt.twig',
        //         array('name' => $name)
        //     ),
        //     'text/plain'
        // )
		
        // ;

// var_dump($message);
		return $this->get('mailer')->send($message);
		// return $this->render(...);

        // return $this->render(...);

		
        // $enviook = $this->mailer->send($message);

        // return $enviook;

    //Incluimos swiftmailer
   // require_once __DIR__.'/../../vendor/swiftmailer/swiftmailer/lib/swift_required.php';
		
   //  /* 
   //  *   Creamos la instancia para el transporte SMTP
   //  *  le indicamos el servidor smtp a utilizar y el puerto
   //  *  le indicamos el usuario y la contraseña 
   //  *  de nuestra cuenta de correo
   //  */
   //  $mensaje = '
   //  <h3>Ha recibido una nueva solicitud de viaticos</h3>
   //  La solicitud N. {{ solId }} fue enviada para su firma.
   //  Gracias
   //  ';
   //  $transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 587)
   //                                  ->setUsername('sbenitez.sbe@gmail.com')
   //                                  ->setPassword('esemayuscula01');
		
   //  // Creamos el mensaje
   //  $message = Swift_Message::newInstance()
		
   //  //Al ser un formulario de contacto nos lo enviamos a nosotros mismos
   //  ->setTo(array(
   //    "sbenitez.sbe@gmail.com" => "Prueba Santiago Benitez",
   //  ))
		
   //  // Definimos el asunto
   //  ->setSubject("Ha recibido una nueva solicitud de viaticos")
		
   //  // Podemos tener un cuerpo del mensaje en texto plano
   //  //->setBody($_POST["mensaje"])
		
   //  // Escribimos el mensaje en html
   //  ->addPart('<h1>Mensaje enviado con Swiftmailer - Santiago Benitez</h1>
   //             <p>Email: '.$solTo.'</p>
   //             <p>Mensaje: '.$mensaje.'</p>', 'text/html')
		
   //  // Indicamos que el mensaje llega desde nuestra cuenta de correo
   //  ->setFrom("santiago.benitez@vicepresidencia.gob.ec", "Correo desde Vice")
		
   //  // Añadimos un archivo adjunto
   //  ->attach(Swift_Attachment::fromPath("https://d1bm3dmew779uf.cloudfront.net/large/925f2b80d03e3547791d417bfc1524f7.jpg"));
		
   //  // Enviamos el email
   //  $mailer = Swift_Mailer::newInstance($transport);
   //  $mailer->send($message);
		
   //  echo "Correo enviado correctamente<br/>";
   //  // echo "<a href='index.php'>Volver</a>";
   //  return $mailer;

	}

}
