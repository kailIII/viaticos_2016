<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Fondo
 *
 * @ORM\Table(name="fondo", uniqueConstraints={@ORM\UniqueConstraint(name="fondo_pk", columns={"fon_id"})}, indexes={@ORM\Index(name="sol_val_fk", columns={"sol_id"})})
 * @ORM\Entity
 */
class Fondo
{
    /**
     * @var integer
     *
     * @ORM\Column(name="fon_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="fondo_fon_id_seq", allocationSize=1, initialValue=1)
     */
    private $fonId;

    /**
     * @var float
     *
     * @ORM\Column(name="fon_valor", type="float", precision=10, scale=0, nullable=true)
     */
    private $fonValor;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="fon_fecha", type="date", nullable=true)
     */
    private $fonFecha;

    /**
     * @var string
     *
     * @ORM\Column(name="fon_observacion", type="text", nullable=true)
     */
    private $fonObservacion;

    /**
     * @var \Solicitud
     *
     * @ORM\ManyToOne(targetEntity="Solicitud")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="sol_id", referencedColumnName="sol_id")
     * })
     */
    private $sol;



    /**
     * Get fonId
     *
     * @return integer
     */
    public function getFonId()
    {
        return $this->fonId;
    }

    /**
     * Set fonValor
     *
     * @param float $fonValor
     *
     * @return Fondo
     */
    public function setFonValor($fonValor)
    {
        $this->fonValor = $fonValor;

        return $this;
    }

    /**
     * Get fonValor
     *
     * @return float
     */
    public function getFonValor()
    {
        return $this->fonValor;
    }

    /**
     * Set fonFecha
     *
     * @param \DateTime $fonFecha
     *
     * @return Fondo
     */
    public function setFonFecha($fonFecha)
    {
        $this->fonFecha = $fonFecha;

        return $this;
    }

    /**
     * Get fonFecha
     *
     * @return \DateTime
     */
    public function getFonFecha()
    {
        return $this->fonFecha;
    }

    /**
     * Set fonObservacion
     *
     * @param string $fonObservacion
     *
     * @return Fondo
     */
    public function setFonObservacion($fonObservacion)
    {
        $this->fonObservacion = $fonObservacion;

        return $this;
    }

    /**
     * Get fonObservacion
     *
     * @return string
     */
    public function getFonObservacion()
    {
        return $this->fonObservacion;
    }

    /**
     * Set sol
     *
     * @param \BackBundle\Entity\Solicitud $sol
     *
     * @return Fondo
     */
    public function setSol(\BackBundle\Entity\Solicitud $sol = null)
    {
        $this->sol = $sol;

        return $this;
    }

    /**
     * Get sol
     *
     * @return \BackBundle\Entity\Solicitud
     */
    public function getSol()
    {
        return $this->sol;
    }
}
