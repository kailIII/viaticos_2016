<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ModuloRol
 *
 * @ORM\Table(name="modulo_rol", uniqueConstraints={@ORM\UniqueConstraint(name="modulo_rol_pk", columns={"modrol_id"})}, indexes={@ORM\Index(name="mod_modrol_fk", columns={"mod_id"}), @ORM\Index(name="rol_modrol_fk", columns={"rol_id"})})
 * @ORM\Entity
 */
class ModuloRol
{
    /**
     * @var integer
     *
     * @ORM\Column(name="modrol_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="modulo_rol_modrol_id_seq", allocationSize=1, initialValue=1)
     */
    private $modrolId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="modrol_desde", type="date", nullable=true)
     */
    private $modrolDesde;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="modrol_hasta", type="date", nullable=true)
     */
    private $modrolHasta;

    /**
     * @var string
     *
     * @ORM\Column(name="modrol_observaciones", type="text", nullable=true)
     */
    private $modrolObservaciones;

    /**
     * @var \Modulo
     *
     * @ORM\ManyToOne(targetEntity="Modulo")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="mod_id", referencedColumnName="mod_id")
     * })
     */
    private $mod;

    /**
     * @var \Rol
     *
     * @ORM\ManyToOne(targetEntity="Rol")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="rol_id", referencedColumnName="rol_id")
     * })
     */
    private $rol;



    /**
     * Get modrolId
     *
     * @return integer
     */
    public function getModrolId()
    {
        return $this->modrolId;
    }

    /**
     * Set modrolDesde
     *
     * @param \DateTime $modrolDesde
     *
     * @return ModuloRol
     */
    public function setModrolDesde($modrolDesde)
    {
        $this->modrolDesde = $modrolDesde;

        return $this;
    }

    /**
     * Get modrolDesde
     *
     * @return \DateTime
     */
    public function getModrolDesde()
    {
        return $this->modrolDesde;
    }

    /**
     * Set modrolHasta
     *
     * @param \DateTime $modrolHasta
     *
     * @return ModuloRol
     */
    public function setModrolHasta($modrolHasta)
    {
        $this->modrolHasta = $modrolHasta;

        return $this;
    }

    /**
     * Get modrolHasta
     *
     * @return \DateTime
     */
    public function getModrolHasta()
    {
        return $this->modrolHasta;
    }

    /**
     * Set modrolObservaciones
     *
     * @param string $modrolObservaciones
     *
     * @return ModuloRol
     */
    public function setModrolObservaciones($modrolObservaciones)
    {
        $this->modrolObservaciones = $modrolObservaciones;

        return $this;
    }

    /**
     * Get modrolObservaciones
     *
     * @return string
     */
    public function getModrolObservaciones()
    {
        return $this->modrolObservaciones;
    }

    /**
     * Set mod
     *
     * @param \BackBundle\Entity\Modulo $mod
     *
     * @return ModuloRol
     */
    public function setMod(\BackBundle\Entity\Modulo $mod = null)
    {
        $this->mod = $mod;

        return $this;
    }

    /**
     * Get mod
     *
     * @return \BackBundle\Entity\Modulo
     */
    public function getMod()
    {
        return $this->mod;
    }

    /**
     * Set rol
     *
     * @param \BackBundle\Entity\Rol $rol
     *
     * @return ModuloRol
     */
    public function setRol(\BackBundle\Entity\Rol $rol = null)
    {
        $this->rol = $rol;

        return $this;
    }

    /**
     * Get rol
     *
     * @return \BackBundle\Entity\Rol
     */
    public function getRol()
    {
        return $this->rol;
    }
}
