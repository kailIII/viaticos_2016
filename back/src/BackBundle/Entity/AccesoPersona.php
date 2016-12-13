<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * AccesoPersona
 *
 * @ORM\Table(name="acceso_persona", uniqueConstraints={@ORM\UniqueConstraint(name="acceso_persona_pk", columns={"aper_usuario"})}, indexes={@ORM\Index(name="accper_per_fk", columns={"per_id"})})
 * @ORM\Entity
 */
class AccesoPersona
{
    /**
     * @var string
     *
     * @ORM\Column(name="aper_usuario", type="string", length=50, nullable=false)
     * @ORM\Id
     * @ORM\SequenceGenerator(sequenceName="acceso_persona_aper_usuario_seq", allocationSize=1, initialValue=1)
     */
    private $aperUsuario;

    /**
     * @var string
     *
     * @ORM\Column(name="aper_clave", type="string", length=100, nullable=true)
     */
    private $aperClave;

    /**
     * @var \Persona
     *
     * @ORM\ManyToOne(targetEntity="Persona")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="per_id", referencedColumnName="per_id")
     * })
     */
    private $per;

    /**
     * Set aperUsuario
     *
     * @param string $aperUsuario
     *
     * @return AccesoPersona
     */
    public function setAperUsuario($aperUsuario)
    {
        $this->aperUsuario = $aperUsuario;

        return $this;
    }

    /**
     * Get aperUsuario
     *
     * @return string
     */
    public function getAperUsuario()
    {
        return $this->aperUsuario;
    }

    /**
     * Set aperClave
     *
     * @param string $aperClave
     *
     * @return AccesoPersona
     */
    public function setAperClave($aperClave)
    {
        $this->aperClave = $aperClave;

        return $this;
    }

    /**
     * Get aperClave
     *
     * @return string
     */
    public function getAperClave()
    {
        return $this->aperClave;
    }

    /**
     * Set per
     *
     * @param \BackBundle\Entity\Persona $per
     *
     * @return AccesoPersona
     */
    public function setPer(\BackBundle\Entity\Persona $per = null)
    {
        $this->per = $per;

        return $this;
    }

    /**
     * Get per
     *
     * @return \BackBundle\Entity\Persona
     */
    public function getPer()
    {
        return $this->per;
    }
}
