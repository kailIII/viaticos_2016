<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * VehiculoPersonaComision
 *
 * @ORM\Table(name="vehiculo_persona_comision", uniqueConstraints={@ORM\UniqueConstraint(name="vehiculo_persona_comision_pk", columns={"vps_id"})}, indexes={@ORM\Index(name="per_vps_fk", columns={"per_id"}), @ORM\Index(name="veh_vps_fk", columns={"veh_id"}), @ORM\Index(name="com_vps_fk", columns={"com_id"})})
 * @ORM\Entity
 */
class VehiculoPersonaComision
{
    /**
     * @var integer
     *
     * @ORM\Column(name="vps_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="vehiculo_persona_comision_vps_id_seq", allocationSize=1, initialValue=1)
     */
    private $vpsId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="vps_fechainicio", type="date", nullable=true)
     */
    private $vpsFechainicio;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="vps_horainicio", type="time", nullable=true)
     */
    private $vpsHorainicio;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="vps_fechafin", type="date", nullable=true)
     */
    private $vpsFechafin;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="vps_horafin", type="time", nullable=true)
     */
    private $vpsHorafin;

    /**
     * @var \Comision
     *
     * @ORM\ManyToOne(targetEntity="Comision")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="com_id", referencedColumnName="com_id")
     * })
     */
    private $com;

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
     * @var \Vehiculo
     *
     * @ORM\ManyToOne(targetEntity="Vehiculo")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="veh_id", referencedColumnName="veh_id")
     * })
     */
    private $veh;



    /**
     * Get vpsId
     *
     * @return integer
     */
    public function getVpsId()
    {
        return $this->vpsId;
    }

    /**
     * Set vpsFechainicio
     *
     * @param \DateTime $vpsFechainicio
     *
     * @return VehiculoPersonaComision
     */
    public function setVpsFechainicio($vpsFechainicio)
    {
        $this->vpsFechainicio = $vpsFechainicio;

        return $this;
    }

    /**
     * Get vpsFechainicio
     *
     * @return \DateTime
     */
    public function getVpsFechainicio()
    {
        return $this->vpsFechainicio;
    }

    /**
     * Set vpsHorainicio
     *
     * @param \DateTime $vpsHorainicio
     *
     * @return VehiculoPersonaComision
     */
    public function setVpsHorainicio($vpsHorainicio)
    {
        $this->vpsHorainicio = $vpsHorainicio;

        return $this;
    }

    /**
     * Get vpsHorainicio
     *
     * @return \DateTime
     */
    public function getVpsHorainicio()
    {
        return $this->vpsHorainicio;
    }

    /**
     * Set vpsFechafin
     *
     * @param \DateTime $vpsFechafin
     *
     * @return VehiculoPersonaComision
     */
    public function setVpsFechafin($vpsFechafin)
    {
        $this->vpsFechafin = $vpsFechafin;

        return $this;
    }

    /**
     * Get vpsFechafin
     *
     * @return \DateTime
     */
    public function getVpsFechafin()
    {
        return $this->vpsFechafin;
    }

    /**
     * Set vpsHorafin
     *
     * @param \DateTime $vpsHorafin
     *
     * @return VehiculoPersonaComision
     */
    public function setVpsHorafin($vpsHorafin)
    {
        $this->vpsHorafin = $vpsHorafin;

        return $this;
    }

    /**
     * Get vpsHorafin
     *
     * @return \DateTime
     */
    public function getVpsHorafin()
    {
        return $this->vpsHorafin;
    }

    /**
     * Set com
     *
     * @param \BackBundle\Entity\Comision $com
     *
     * @return VehiculoPersonaComision
     */
    public function setCom(\BackBundle\Entity\Comision $com = null)
    {
        $this->com = $com;

        return $this;
    }

    /**
     * Get com
     *
     * @return \BackBundle\Entity\Comision
     */
    public function getCom()
    {
        return $this->com;
    }

    /**
     * Set per
     *
     * @param \BackBundle\Entity\Persona $per
     *
     * @return VehiculoPersonaComision
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

    /**
     * Set veh
     *
     * @param \BackBundle\Entity\Vehiculo $veh
     *
     * @return VehiculoPersonaComision
     */
    public function setVeh(\BackBundle\Entity\Vehiculo $veh = null)
    {
        $this->veh = $veh;

        return $this;
    }

    /**
     * Get veh
     *
     * @return \BackBundle\Entity\Vehiculo
     */
    public function getVeh()
    {
        return $this->veh;
    }
}
