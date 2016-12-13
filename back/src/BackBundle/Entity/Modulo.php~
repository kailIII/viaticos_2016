<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Modulo
 *
 * @ORM\Table(name="modulo", uniqueConstraints={@ORM\UniqueConstraint(name="modulo_pk", columns={"mod_id"})})
 * @ORM\Entity
 */
class Modulo
{
    /**
     * @var integer
     *
     * @ORM\Column(name="mod_id", type="smallint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="modulo_mod_id_seq", allocationSize=1, initialValue=1)
     */
    private $modId;

    /**
     * @var string
     *
     * @ORM\Column(name="mod_nombre", type="string", length=50, nullable=true)
     */
    private $modNombre;

    /**
     * @var string
     *
     * @ORM\Column(name="mod_descripcion", type="string", length=200, nullable=true)
     */
    private $modDescripcion;

    /**
     * @var string
     *
     * @ORM\Column(name="mod_ubicacion", type="text", nullable=true)
     */
    private $modUbicacion;

    /**
     * @var integer
     *
     * @ORM\Column(name="mod_padre", type="smallint", nullable=true)
     */
    private $modPadre;

    /**
     * @var string
     *
     * @ORM\Column(name="mod_estado", type="string", length=1, nullable=true)
     */
    private $modEstado;

    /**
     * @var string
     *
     * @ORM\Column(name="mod_nombremostrar", type="string", length=50, nullable=true)
     */
    private $modNombremostrar;



    /**
     * Get modId
     *
     * @return integer
     */
    public function getModId()
    {
        return $this->modId;
    }

    /**
     * Set modNombre
     *
     * @param string $modNombre
     *
     * @return Modulo
     */
    public function setModNombre($modNombre)
    {
        $this->modNombre = $modNombre;

        return $this;
    }

    /**
     * Get modNombre
     *
     * @return string
     */
    public function getModNombre()
    {
        return $this->modNombre;
    }

    /**
     * Set modDescripcion
     *
     * @param string $modDescripcion
     *
     * @return Modulo
     */
    public function setModDescripcion($modDescripcion)
    {
        $this->modDescripcion = $modDescripcion;

        return $this;
    }

    /**
     * Get modDescripcion
     *
     * @return string
     */
    public function getModDescripcion()
    {
        return $this->modDescripcion;
    }

    /**
     * Set modUbicacion
     *
     * @param string $modUbicacion
     *
     * @return Modulo
     */
    public function setModUbicacion($modUbicacion)
    {
        $this->modUbicacion = $modUbicacion;

        return $this;
    }

    /**
     * Get modUbicacion
     *
     * @return string
     */
    public function getModUbicacion()
    {
        return $this->modUbicacion;
    }

    /**
     * Set modPadre
     *
     * @param integer $modPadre
     *
     * @return Modulo
     */
    public function setModPadre($modPadre)
    {
        $this->modPadre = $modPadre;

        return $this;
    }

    /**
     * Get modPadre
     *
     * @return integer
     */
    public function getModPadre()
    {
        return $this->modPadre;
    }

    /**
     * Set modEstado
     *
     * @param string $modEstado
     *
     * @return Modulo
     */
    public function setModEstado($modEstado)
    {
        $this->modEstado = $modEstado;

        return $this;
    }

    /**
     * Get modEstado
     *
     * @return string
     */
    public function getModEstado()
    {
        return $this->modEstado;
    }

    /**
     * Set modNombremostrar
     *
     * @param string $modNombremostrar
     *
     * @return Modulo
     */
    public function setModNombremostrar($modNombremostrar)
    {
        $this->modNombremostrar = $modNombremostrar;

        return $this;
    }

    /**
     * Get modNombremostrar
     *
     * @return string
     */
    public function getModNombremostrar()
    {
        return $this->modNombremostrar;
    }
}
