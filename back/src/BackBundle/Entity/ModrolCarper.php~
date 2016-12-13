<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ModrolCarper
 *
 * @ORM\Table(name="modrol_carper", uniqueConstraints={@ORM\UniqueConstraint(name="pk_Modrol_Carper", columns={"mrcp_id"})}, indexes={@ORM\Index(name="Modrol_Carper_carper_fk", columns={"carper_id"}), @ORM\Index(name="Modrol_Carper_modrol_fk", columns={"modrol_id"})})
 * @ORM\Entity
 */
class ModrolCarper
{
    /**
     * @var integer
     *
     * @ORM\Column(name="mrcp_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="modrol_carper_mrcp_id_seq", allocationSize=1, initialValue=1)
     */
    private $mrcpId;

    /**
     * @var string
     *
     * @ORM\Column(name="mrcp_observacion", type="string", length=150, nullable=true)
     */
    private $mrcpObservacion;

    /**
     * @var \CargoPersona
     *
     * @ORM\ManyToOne(targetEntity="CargoPersona")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="carper_id", referencedColumnName="carper_id")
     * })
     */
    private $carper;

    /**
     * @var \ModuloRol
     *
     * @ORM\ManyToOne(targetEntity="ModuloRol")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="modrol_id", referencedColumnName="modrol_id")
     * })
     */
    private $modrol;



    /**
     * Get mrcpId
     *
     * @return integer
     */
    public function getMrcpId()
    {
        return $this->mrcpId;
    }

    /**
     * Set mrcpObservacion
     *
     * @param string $mrcpObservacion
     *
     * @return ModrolCarper
     */
    public function setMrcpObservacion($mrcpObservacion)
    {
        $this->mrcpObservacion = $mrcpObservacion;

        return $this;
    }

    /**
     * Get mrcpObservacion
     *
     * @return string
     */
    public function getMrcpObservacion()
    {
        return $this->mrcpObservacion;
    }

    /**
     * Set carper
     *
     * @param \BackBundle\Entity\CargoPersona $carper
     *
     * @return ModrolCarper
     */
    public function setCarper(\BackBundle\Entity\CargoPersona $carper = null)
    {
        $this->carper = $carper;

        return $this;
    }

    /**
     * Get carper
     *
     * @return \BackBundle\Entity\CargoPersona
     */
    public function getCarper()
    {
        return $this->carper;
    }

    /**
     * Set modrol
     *
     * @param \BackBundle\Entity\ModuloRol $modrol
     *
     * @return ModrolCarper
     */
    public function setModrol(\BackBundle\Entity\ModuloRol $modrol = null)
    {
        $this->modrol = $modrol;

        return $this;
    }

    /**
     * Get modrol
     *
     * @return \BackBundle\Entity\ModuloRol
     */
    public function getModrol()
    {
        return $this->modrol;
    }
}
