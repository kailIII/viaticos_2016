<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CiudadInforme
 *
 * @ORM\Table(name="ciudad_informe", uniqueConstraints={@ORM\UniqueConstraint(name="ciudad_informe_pk", columns={"ciuinf_id"})}, indexes={@ORM\Index(name="ciu_ciuinf_fk", columns={"ciu_id"}), @ORM\Index(name="ciu_inf_fk", columns={"estinf_id"})})
 * @ORM\Entity
 */
class CiudadInforme
{
    /**
     * @var integer
     *
     * @ORM\Column(name="ciuinf_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="ciudad_informe_ciuinf_id_seq", allocationSize=1, initialValue=1)
     */
    private $ciuinfId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ciuinf_fechadesde", type="date", nullable=true)
     */
    private $ciuinfFechadesde;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ciuinf_horadesde", type="time", nullable=true)
     */
    private $ciuinfHoradesde;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ciuinf_fechahasta", type="date", nullable=true)
     */
    private $ciuinfFechahasta;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ciuinf_horahasta", type="time", nullable=true)
     */
    private $ciuinfHorahasta;

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
     * @var \EstadoInforme
     *
     * @ORM\ManyToOne(targetEntity="EstadoInforme")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="estinf_id", referencedColumnName="estinf_id")
     * })
     */
    private $estinf;



    /**
     * Get ciuinfId
     *
     * @return integer
     */
    public function getCiuinfId()
    {
        return $this->ciuinfId;
    }

    /**
     * Set ciuinfFechadesde
     *
     * @param \DateTime $ciuinfFechadesde
     *
     * @return CiudadInforme
     */
    public function setCiuinfFechadesde($ciuinfFechadesde)
    {
        $this->ciuinfFechadesde = $ciuinfFechadesde;

        return $this;
    }

    /**
     * Get ciuinfFechadesde
     *
     * @return \DateTime
     */
    public function getCiuinfFechadesde()
    {
        return $this->ciuinfFechadesde;
    }

    /**
     * Set ciuinfHoradesde
     *
     * @param \DateTime $ciuinfHoradesde
     *
     * @return CiudadInforme
     */
    public function setCiuinfHoradesde($ciuinfHoradesde)
    {
        $this->ciuinfHoradesde = $ciuinfHoradesde;

        return $this;
    }

    /**
     * Get ciuinfHoradesde
     *
     * @return \DateTime
     */
    public function getCiuinfHoradesde()
    {
        return $this->ciuinfHoradesde;
    }

    /**
     * Set ciuinfFechahasta
     *
     * @param \DateTime $ciuinfFechahasta
     *
     * @return CiudadInforme
     */
    public function setCiuinfFechahasta($ciuinfFechahasta)
    {
        $this->ciuinfFechahasta = $ciuinfFechahasta;

        return $this;
    }

    /**
     * Get ciuinfFechahasta
     *
     * @return \DateTime
     */
    public function getCiuinfFechahasta()
    {
        return $this->ciuinfFechahasta;
    }

    /**
     * Set ciuinfHorahasta
     *
     * @param \DateTime $ciuinfHorahasta
     *
     * @return CiudadInforme
     */
    public function setCiuinfHorahasta($ciuinfHorahasta)
    {
        $this->ciuinfHorahasta = $ciuinfHorahasta;

        return $this;
    }

    /**
     * Get ciuinfHorahasta
     *
     * @return \DateTime
     */
    public function getCiuinfHorahasta()
    {
        return $this->ciuinfHorahasta;
    }

    /**
     * Set ciu
     *
     * @param \BackBundle\Entity\Ciudad $ciu
     *
     * @return CiudadInforme
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
     * Set estinf
     *
     * @param \BackBundle\Entity\EstadoInforme $estinf
     *
     * @return CiudadInforme
     */
    public function setEstinf(\BackBundle\Entity\EstadoInforme $estinf = null)
    {
        $this->estsol = $estinf;

        return $this;
    }

    /**
     * Get estinf
     *
     * @return \BackBundle\Entity\EstadoInforme
     */
    public function getEstinf()
    {
        return $this->estinf;
    }
}
