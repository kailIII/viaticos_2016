<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CiudadComision
 *
 * @ORM\Table(name="ciudad_comision", uniqueConstraints={@ORM\UniqueConstraint(name="ciudad_comision_pk", columns={"ciucom_id"})}, indexes={@ORM\Index(name="com_ciucom_fk", columns={"com_id"}), @ORM\Index(name="ciu_ciucom_fk", columns={"ciu_id"})})
 * @ORM\Entity
 */
class CiudadComision
{
    /**
     * @var integer
     *
     * @ORM\Column(name="ciucom_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="ciudad_comision_ciucom_id_seq", allocationSize=1, initialValue=1)
     */
    private $ciucomId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ciucom_fechadesde", type="date", nullable=true)
     */
    private $ciucomFechadesde;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ciucom_horadesde", type="time", nullable=true)
     */
    private $ciucomHoradesde;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ciucom_fechahasta", type="date", nullable=true)
     */
    private $ciucomFechahasta;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ciucom_horahasta", type="time", nullable=true)
     */
    private $ciucomHorahasta;

    /**
     * @var \Ciudad
     *
     * @ORM\ManyToOne(targetEntity="Ciudad")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="ciu_id", referencedColumnName="ciu_id")
     * })
     */
    private $ciu;

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
     * Get ciucomId
     *
     * @return integer
     */
    public function getCiucomId()
    {
        return $this->ciucomId;
    }

    /**
     * Set ciucomFechadesde
     *
     * @param \DateTime $ciucomFechadesde
     *
     * @return CiudadComision
     */
    public function setCiucomFechadesde($ciucomFechadesde)
    {
        $this->ciucomFechadesde = $ciucomFechadesde;

        return $this;
    }

    /**
     * Get ciucomFechadesde
     *
     * @return \DateTime
     */
    public function getCiucomFechadesde()
    {
        return $this->ciucomFechadesde;
    }

    /**
     * Set ciucomHoradesde
     *
     * @param \DateTime $ciucomHoradesde
     *
     * @return CiudadComision
     */
    public function setCiucomHoradesde($ciucomHoradesde)
    {
        $this->ciucomHoradesde = $ciucomHoradesde;

        return $this;
    }

    /**
     * Get ciucomHoradesde
     *
     * @return \DateTime
     */
    public function getCiucomHoradesde()
    {
        return $this->ciucomHoradesde;
    }

    /**
     * Set ciucomFechahasta
     *
     * @param \DateTime $ciucomFechahasta
     *
     * @return CiudadComision
     */
    public function setCiucomFechahasta($ciucomFechahasta)
    {
        $this->ciucomFechahasta = $ciucomFechahasta;

        return $this;
    }

    /**
     * Get ciucomFechahasta
     *
     * @return \DateTime
     */
    public function getCiucomFechahasta()
    {
        return $this->ciucomFechahasta;
    }

    /**
     * Set ciucomHorahasta
     *
     * @param \DateTime $ciucomHorahasta
     *
     * @return CiudadComision
     */
    public function setCiucomHorahasta($ciucomHorahasta)
    {
        $this->ciucomHorahasta = $ciucomHorahasta;

        return $this;
    }

    /**
     * Get ciucomHorahasta
     *
     * @return \DateTime
     */
    public function getCiucomHorahasta()
    {
        return $this->ciucomHorahasta;
    }

    /**
     * Set ciu
     *
     * @param \BackBundle\Entity\Ciudad $ciu
     *
     * @return CiudadComision
     */
    public function setCiu(\BackBundle\Entity\Ciudad $ciu = null)
    {
        $this->ciu = $ciu;

        return $this;
    }

    /**
     * Get ciu
     *
     * @return \BackBundle\Entity\Ciudad
     */
    public function getCiu()
    {
        return $this->ciu;
    }

    /**
     * Set com
     *
     * @param \BackBundle\Entity\Comision $com
     *
     * @return CiudadComision
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
}
