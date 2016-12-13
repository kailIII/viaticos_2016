<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Institucion
 *
 * @ORM\Table(name="institucion", uniqueConstraints={@ORM\UniqueConstraint(name="institucion_pk", columns={"ins_id"})})
 * @ORM\Entity
 */
class Institucion
{
    /**
     * @var integer
     *
     * @ORM\Column(name="ins_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="institucion_ins_id_seq", allocationSize=1, initialValue=1)
     */
    private $insId;

    /**
     * @var string
     *
     * @ORM\Column(name="ins_nombre", type="string", length=150, nullable=true)
     */
    private $insNombre;

    /**
     * @var string
     *
     * @ORM\Column(name="ins_direccion", type="string", length=200, nullable=true)
     */
    private $insDireccion;

    /**
     * @var string
     *
     * @ORM\Column(name="ins_logo", type="string", length=250, nullable=true)
     */
    private $insLogo;

    /**
     * @var string
     *
     * @ORM\Column(name="ins_estado", type="string", length=1, nullable=true)
     */
    private $insEstado;



    /**
     * Get insId
     *
     * @return integer
     */
    public function getInsId()
    {
        return $this->insId;
    }

    /**
     * Set insNombre
     *
     * @param string $insNombre
     *
     * @return Institucion
     */
    public function setInsNombre($insNombre)
    {
        $this->insNombre = $insNombre;

        return $this;
    }

    /**
     * Get insNombre
     *
     * @return string
     */
    public function getInsNombre()
    {
        return $this->insNombre;
    }

    /**
     * Set insDireccion
     *
     * @param string $insDireccion
     *
     * @return Institucion
     */
    public function setInsDireccion($insDireccion)
    {
        $this->insDireccion = $insDireccion;

        return $this;
    }

    /**
     * Get insDireccion
     *
     * @return string
     */
    public function getInsDireccion()
    {
        return $this->insDireccion;
    }

    /**
     * Set insLogo
     *
     * @param string $insLogo
     *
     * @return Institucion
     */
    public function setInsLogo($insLogo)
    {
        $this->insLogo = $insLogo;

        return $this;
    }

    /**
     * Get insLogo
     *
     * @return string
     */
    public function getInsLogo()
    {
        return $this->insLogo;
    }

    /**
     * Set insEstado
     *
     * @param string $insEstado
     *
     * @return Institucion
     */
    public function setInsEstado($insEstado)
    {
        $this->insEstado = $insEstado;

        return $this;
    }

    /**
     * Get insEstado
     *
     * @return string
     */
    public function getInsEstado()
    {
        return $this->insEstado;
    }
}
