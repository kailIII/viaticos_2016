<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TransporteInforme
 *
 * @ORM\Table(name="transporte_informe", uniqueConstraints={@ORM\UniqueConstraint(name="transporte_informe_pk", columns={"trainf_id"})}, indexes={@ORM\Index(name="estinf_trainf_fk", columns={"estinf_id"}), @ORM\Index(name="traext_trainf_fk", columns={"traasi_id"})})
 * @ORM\Entity
 */
class TransporteInforme
{
    /**
     * @var integer
     *
     * @ORM\Column(name="trainf_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="transporte_informe_trainf_id_seq", allocationSize=1, initialValue=1)
     */
    private $trainfId;

    /**
     * @var string
     *
     * @ORM\Column(name="trainf_rutainicio", type="string", length=70, nullable=true)
     */
    private $trainfRutainicio;

    /**
     * @var string
     *
     * @ORM\Column(name="trainf_rutafin", type="string", length=70, nullable=true)
     */
    private $trainfRutafin;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="trainf_fechasalida", type="date", nullable=true)
     */
    private $trainfFechasalida;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="trainf_horasalida", type="time", nullable=true)
     */
    private $trainfHorasalida;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="trainf_fechallegada", type="date", nullable=true)
     */
    private $trainfFechallegada;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="trainf_horallegada", type="time", nullable=true)
     */
    private $trainfHorallegada;

    /**
     * @var string
     *
     * @ORM\Column(name="trainf_seuso", type="string", length=1, nullable=true)
     */
    private $trainfSeuso;

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
     * @var \TransporteAsignado
     *
     * @ORM\ManyToOne(targetEntity="TransporteAsignado")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="traasi_id", referencedColumnName="traasi_id")
     * })
     */
    private $traasi;



    /**
     * Get trainfId
     *
     * @return integer
     */
    public function getTrainfId()
    {
        return $this->trainfId;
    }

    /**
     * Set trainfRutainicio
     *
     * @param string $trainfRutainicio
     *
     * @return TransporteInforme
     */
    public function setTrainfRutainicio($trainfRutainicio)
    {
        $this->trainfRutainicio = $trainfRutainicio;

        return $this;
    }

    /**
     * Get trainfRutainicio
     *
     * @return string
     */
    public function getTrainfRutainicio()
    {
        return $this->trainfRutainicio;
    }

    /**
     * Set trainfRutafin
     *
     * @param string $trainfRutafin
     *
     * @return TransporteInforme
     */
    public function setTrainfRutafin($trainfRutafin)
    {
        $this->trainfRutafin = $trainfRutafin;

        return $this;
    }

    /**
     * Get trainfRutafin
     *
     * @return string
     */
    public function getTrainfRutafin()
    {
        return $this->trainfRutafin;
    }

    /**
     * Set trainfFechasalida
     *
     * @param \DateTime $trainfFechasalida
     *
     * @return TransporteInforme
     */
    public function setTrainfFechasalida($trainfFechasalida)
    {
        $this->trainfFechasalida = $trainfFechasalida;

        return $this;
    }

    /**
     * Get trainfFechasalida
     *
     * @return \DateTime
     */
    public function getTrainfFechasalida()
    {
        return $this->trainfFechasalida;
    }

    /**
     * Set trainfHorasalida
     *
     * @param \DateTime $trainfHorasalida
     *
     * @return TransporteInforme
     */
    public function setTrainfHorasalida($trainfHorasalida)
    {
        $this->trainfHorasalida = $trainfHorasalida;

        return $this;
    }

    /**
     * Get trainfHorasalida
     *
     * @return \DateTime
     */
    public function getTrainfHorasalida()
    {
        return $this->trainfHorasalida;
    }

    /**
     * Set trainfFechallegada
     *
     * @param \DateTime $trainfFechallegada
     *
     * @return TransporteInforme
     */
    public function setTrainfFechallegada($trainfFechallegada)
    {
        $this->trainfFechallegada = $trainfFechallegada;

        return $this;
    }

    /**
     * Get trainfFechallegada
     *
     * @return \DateTime
     */
    public function getTrainfFechallegada()
    {
        return $this->trainfFechallegada;
    }

    /**
     * Set trainfHorallegada
     *
     * @param \DateTime $trainfHorallegada
     *
     * @return TransporteInforme
     */
    public function setTrainfHorallegada($trainfHorallegada)
    {
        $this->trainfHorallegada = $trainfHorallegada;

        return $this;
    }

    /**
     * Get trainfHorallegada
     *
     * @return \DateTime
     */
    public function getTrainfHorallegada()
    {
        return $this->trainfHorallegada;
    }

    /**
     * Set trainfSeuso
     *
     * @param string $trainfSeuso
     *
     * @return TransporteInforme
     */
    public function setTrainfSeuso($trainfSeuso)
    {
        $this->trainfSeuso = $trainfSeuso;

        return $this;
    }

    /**
     * Get trainfSeuso
     *
     * @return string
     */
    public function getTrainfSeuso()
    {
        return $this->trainfSeuso;
    }

    /**
     * Set estinf
     *
     * @param \BackBundle\Entity\EstadoInforme $estinf
     *
     * @return TransporteInforme
     */
    public function setEstInf(\BackBundle\Entity\EstadoInforme $estinf = null)
    {
        $this->estinf = $estinf;

        return $this;
    }

    /**
     * Get estinf
     *
     * @return \BackBundle\Entity\EstadoInforme
     */
    public function getEstInf()
    {
        return $this->estinf;
    }

    /**
     * Set traasi
     *
     * @param \BackBundle\Entity\TransporteAsignado $traasi
     *
     * @return TransporteInforme
     */
    public function setTraasi(\BackBundle\Entity\TransporteAsignado $traasi = null)
    {
        $this->traasi = $traasi;

        return $this;
    }

    /**
     * Get traasi
     *
     * @return \BackBundle\Entity\TransporteAsignado
     */
    public function getTraasi()
    {
        return $this->traasi;
    }
}
