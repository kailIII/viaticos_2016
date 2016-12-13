<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\JsonResponse;
use BackBundle\Entity\Persona;
use BackBundle\Entity\AccesoPersona;
use BackBundle\Entity\BancoPersona;

class PersonaController extends Controller {

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
                $creado = new \Datetime("now");
                $email = (isset($params->email)) ? $params->email : null;
                $nombre = (isset($params->nombre) /* && ctype_alpha($params->nombre) */) ? $params->nombre : null;
                $apellido = (isset($params->apellido)/* && ctype_alpha($params->apellido) */) ? $params->apellido : null;
                $identificacion = (isset($params->identificacion)/* && ctype_alnum($params->identificacion) */) ? $params->identificacion : null;
                $password = (isset($params->password)) ? $params->password : null;
                $iniciales = (isset($params->iniciales) /* && ctype_alpha($params->iniciales) */) ? $params->iniciales : null;

                $emailContraint = new Assert\Email();
                $emailContraint->message = "El correo electrónico no es valido !!";
                $validate_email = $this->get("validator")->validate($email, $emailContraint);

                if (count($validate_email) == 0) {

                    if ($email != null && $password != null && $nombre != null && $apellido != null && $identificacion != null) {

                        $usuario = new Persona();
                        $usuario->setPerNombre($nombre);
                        $usuario->setPerApellido($apellido);
                        $usuario->setPerIdentificacion($identificacion);
                        $usuario->setPerCorreoelectronico($email);
                        $usuario->setPerIniciales($iniciales);
                        $usuario->setPerCreado(new \DateTime());
                        $usuario->setNombrecompleto($nombre." ".$apellido);

                        $em = $this->getDoctrine()->getManager();

                        $isset_user_correo = $em->getRepository('BackBundle:Persona')->findBy(
                            array(
                                "perCorreoelectronico" => $email
                                )
                            );
                        $isset_user_identificacion = $em->getRepository('BackBundle:Persona')->findBy(
                            array(
                                "perIdentificacion" => $identificacion
                                )
                            );
                        $isset_user_nombre = $em->getRepository('BackBundle:Persona')->findBy(
                            array(
                                "perNombre" => $nombre
                                )
                            );
                        $isset_user_apellido = $em->getRepository('BackBundle:Persona')->findBy(
                            array(
                                "perApellido" => $apellido
                                )
                            );

                        if (count($isset_user_apellido) == 0 && count($isset_user_correo) == 0 && count($isset_user_nombre) == 0 && count($isset_user_identificacion) == 0) {
                            $em->persist($usuario);
                            $em->flush();
                            $data["status"] = "success";
                            $data["msg"] = "Nuevo usuario creado";

                            $acceso = new AccesoPersona();
                            $pwd = hash('sha256', $password);
                            $acceso->setAperUsuario($email);
                            $acceso->setPerId($usuario);
                            $acceso->setAperClave($pwd);

                            $isset_acceso = $em->getRepository('BackBundle:AccesoPersona')->findBy(
                                array(
                                    "aperUsuario" => $email
                                    )
                                );

                            if (count($isset_acceso) == 0) {
                                $em->persist($acceso);
                                $em->flush();

                                $banco = new BancoPersona();

                                $banco->setBanperNumerocuenta("00000000");
                                $banco->setBanperTipocuenta("A");
                                $banco->setBanperEstado("A");
                                $banco->setPer($usuario);

                                $dat_banco = $em->getRepository('BackBundle:Banco')->findOneBy(
                                    array(
                                        "banNombre" => "No Definido"
                                        )
                                    );

                                $banco->setBan($dat_banco);

                                $isset_banco = $em->getRepository('BackBundle:BancoPersona')->findOneBy(
                                    array(
                                        "per" => $identity->sub,
                                        "banperEstado" => "A"
                                        )
                                    );

                                if (count($isset_banco) == 0) {
                                    $em->persist($banco);
                                    $em->flush();

                                    $data["status"] = "success";
                                    $data["msg"] = "Usuario creado satisfactoriamente";
                                } else {
                                    $data = array(
                                        "status" => "error",
                                        "code" => 400,
                                        "msg" => "No se crearon los accesos del Usuario"
                                        );
                                }
                            } else {
                                $data = array(
                                    "status" => "error",
                                    "code" => 400,
                                    "msg" => "No se crearon los accesos del Usuario"
                                    );
                            }
                        } else {
                            $data = array(
                                "status" => "error",
                                "code" => 400,
                                "msg" => "Usuario duplicado, no se puedo crear Usuario"
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
                        "msg" => "Correo electronico no valido"
                        );
                }
            } else {

                $data = array(
                    "status" => "error",
                    "code" => 400,
                    "msg" => "No se puedo crear Usuario"
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
                $email = (isset($params->email)) ? $params->email : null;
                $password = (isset($params->password)) ? $params->password : null;
                $iniciales = (isset($params->iniciales) /* && ctype_alpha($params->iniciales) */) ? $params->iniciales : null;

                $emailContraint = new Assert\Email();
                $emailContraint->message = "El correo electrónico no es valido !!";
                $validate_email = $this->get("validator")->validate($email, $emailContraint);

                if (count($validate_email) == 0) {

                    if ($email != null) {

                        $em = $this->getDoctrine()->getManager();

                        $usuario = $em->getRepository('BackBundle:Persona')->findOneBy(
                            array(
                                "perId" => $identity->sub
                                )
                            );

                        $usuario->setPerCorreoelectronico($email);
                        $usuario->setPerIniciales($iniciales);

                        if (count($usuario) != 0) {
                            $em->persist($usuario);
                            $em->flush();

                            $acceso = $em->getRepository('BackBundle:AccesoPersona')->findOneBy(
                                array(
                                    "perid" => $identity->sub
                                    )
                                );

                            $acceso->setAperUsuario($email);

                            if (count($acceso) != 0) {
                                $em->persist($acceso);
                                $em->flush();

                                $data["status"] = "success";
                                $data["msg"] = "Usuario editado satisfactoriamente";
                            } else {
                                $data = array(
                                    "status" => "error",
                                    "code" => 400,
                                    "msg" => "No se actualizaron los accesos del Usuario"
                                    );
                            }
                        } else {
                            $data = array(
                                "status" => "error",
                                "code" => 400,
                                "msg" => "Usuario no existe"
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
                        "msg" => "Correo electronico no válido"
                        );
                }
            } else {

                $data = array(
                    "status" => "error",
                    "code" => 400,
                    "msg" => "No se enviaron datos"
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

    public function cambiarClaveAction(Request $request) {
        $helpers = $this->get("app.helpers");

        $json = $request->get("json", null);
        $params = json_decode($json);

        $hash = $request->get("authorization", null);
        $authCheck = $helpers->authCheck($hash);

        $data = array();

        if ($authCheck == true) {

            $identity = $helpers->authCheck($hash, true);

            if ($json != null) {
                $password = (isset($params->password)) ? $params->password : null;
                $em = $this->getDoctrine()->getManager();

                if ($password != null) {
                    $pwd = hash('sha256', $password);

                    $acceso = $em->getRepository('BackBundle:AccesoPersona')->findOneBy(
                        array(
                            "perid" => $identity->sub
                            )
                        );
                    $acceso->setAperClave($pwd);

                    if (count($acceso) != 0) {
                        $em->persist($acceso);
                        $em->flush();

                        $data["status"] = "success";
                        $data["msg"] = "Accesos actualizados satisfactoriamente";
                    }
                } else {
                    $data = array(
                        "status" => "error",
                        "code" => 400,
                        "msg" => "No se actualizaron los accesos del Usuario"
                        );
                }
            } else {

                $data = array(
                    "status" => "error",
                    "code" => 400,
                    "msg" => "No se enviaron datos"
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

    public function editarbancoAction(Request $request) {
        $helpers = $this->get("app.helpers");

        $json = $request->get("json", null);
        $params = json_decode($json);

        $hash = $request->get("authorization", null);
        $authCheck = $helpers->authCheck($hash);

        $data = array();

        $identity = $helpers->authCheck($hash, true);

        if ($authCheck == true) {

            if ($json != null) {
                $estado = (isset($params->estado)) ? $params->estado : null;
                $numerocuenta = (isset($params->numerocuenta)) ? $params->numerocuenta : null;
                $tipocuenta = (isset($params->tipocuenta)) ? $params->tipocuenta : null;
                $banconombre = (isset($params->banconombre)) ? $params->banconombre : null;
                $em = $this->getDoctrine()->getManager();

                $persona = $em->getRepository('BackBundle:Persona')->findOneBy(
                    array(
                        "perId" => $identity->sub
                        )
                    );

                $idbanco = $em->getRepository('BackBundle:Banco')->findOneBy(
                    array(
                        "banNombre" => $banconombre
                        )
                    );

                $banco = $em->getRepository('BackBundle:BancoPersona')->findOneBy(
                    array(
                        "per" => $persona
                        )
                    );
                if (count($banco) != 0) {
                    $banco->setBanperEstado($estado);
                    $banco->setBanperNumerocuenta($numerocuenta);
                    $banco->setBanperTipocuenta($tipocuenta);
                    $banco->setBan($idbanco);

                    $em->persist($banco);
                    $em->flush();

                    $data["status"] = "success";
                    $data["msg"] = "Datos actualizados satisfactoriamente";
                } else {
                    $data = array(
                        "status" => "error",
                        "code" => 400,
                        "msg" => "No se actualizaron los datos del Banco del Usuario"
                        );
                }
            } else {

                $data = array(
                    "status" => "error",
                    "code" => 400,
                    "msg" => "No se enviaron datos"
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

    public function agregarbancoAction(Request $request) {
        $helpers = $this->get("app.helpers");

        $json = $request->get("json", null);
        $params = json_decode($json);

        $hash = $request->get("authorization", null);
        $authCheck = $helpers->authCheck($hash);

        $data = array();

        $identity = $helpers->authCheck($hash, true);

        if ($authCheck == true) {

            if ($json != null) {
                // $estado = (isset($params->estado)) ? $params->estado : null;
                $numerocuenta = (isset($params->numerocuenta)) ? $params->numerocuenta : null;
                $tipocuenta = (isset($params->tipocuenta)) ? $params->tipocuenta : null;
                $banconombre = (isset($params->banconombre)) ? $params->banconombre : null;
                $em = $this->getDoctrine()->getManager();

                $persona = $em->getRepository('BackBundle:Persona')->findOneBy(
                    array(
                        "perId" => $identity->sub
                        )
                    );

                $idbanco = $em->getRepository('BackBundle:Banco')->findOneBy(
                    array(
                        "banNombre" => $banconombre
                        )
                    );

                $bancopersona = $em->getRepository('BackBundle:BancoPersona')->findOneBy(
                    array(
                        "per" => $persona,
                        "banperEstado" => "A"
                        )
                    );
                if (count($bancopersona) != 0) {
                    $bancopersona->setBanperEstado("C");
                    // $banco->setBanperNumerocuenta($numerocuenta);
                    // $banco->setBanperTipocuenta($tipocuenta);
                    // $banco->setBan($idbanco);
                    $em->persist($bancopersona);
                    $em->flush();

                    $nuevobanco = new BancoPersona();
                    $nuevobanco->setBanperEstado("A");
                    $nuevobanco->setBanperNumerocuenta($numerocuenta);
                    $nuevobanco->setBanperTipocuenta($tipocuenta);
                    $nuevobanco->setBan($idbanco);
                    $nuevobanco->setPer($persona);

                    $em->persist($nuevobanco);
                    $em->flush();

                    $data["status"] = "success";
                    $data["msg"] = "Nuevo banco ingresado satisfactoriamente";
                } else {
                    $data = array(
                        "status" => "error",
                        "code" => 400,
                        "msg" => "No se ingresaron los datos del Banco del Usuario"
                        );
                }
            } else {

                $data = array(
                    "status" => "error",
                    "code" => 400,
                    "msg" => "No se enviaron datos"
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
    public function verAction(Request $request) {

        $helpers = $this->get("app.helpers");

        $json = $request->get("json", null);
        $params = json_decode($json);

        $hash = $request->get("authorization", null);
        $authCheck = $helpers->authCheck($hash);

        $data = array();

        if ($authCheck == true) {
            $identity = $helpers->authCheck($hash, true);
            if ($json != null) {

                $id_fun = (isset($params->id_fun)) ? $params->id_fun : null;

                $em = $this->getDoctrine()->getManager();

                $persona = $em->getRepository('BackBundle:Persona')->findAll();

                if (count($persona) != 0) {
                    return $helpers->json($persona);
                    die();
                } else {
                    $data = array(
                        "status" => "error",
                        "code" => 400,
                        "msg" => "No puede visualizar los modulos"
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
