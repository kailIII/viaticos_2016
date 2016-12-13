<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Solicitud
 *
 * @ORM\Table(name="solicitud", uniqueConstraints={@ORM\UniqueConstraint(name="solicitud_pk", columns={"sol_id"})}, indexes={@ORM\Index(name="per_sol_fk", columns={"per_id"})})
 * @ORM\Entity
 */
class Solicitud
{
    /**
     * @var integer
     *
     * @ORM\Column(name="sol_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="solicitud_sol_id_seq", allocationSize=1, initialValue=1)
     */
    private $solId;

    /**
     * @var integer
     *
     * @ORM\Column(name="sol_secuencial", type="integer", nullable=true)
     */
    private $solSecuencial;

    /**
     * @var string
     *
     * @ORM\Column(name="sol_idsolicitud", type="string", length=40, nullable=true)
     */
    private $solIdsolicitud;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="sol_fecharealizacion", type="date", nullable=true)
     */
    private $solFecharealizacion;

    /**
     * @var integer
     *
     * @ORM\Column(name="sol_numeroactualizacion", type="smallint", nullable=true)
     */
    private $solNumeroactualizacion;

    /**
     * @var string
     *
     * @ORM\Column(name="sol_estado", type="string", length=1, nullable=true)
     */
    private $solEstado;

    /**
     * @var string
     *
     * @ORM\Column(name="sol_anio", type="string", length=4, nullable=true)
     */
    private $solAnio;

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
     * Get solId
     *
     * @return integer
     */
    public function getSolId()
    {
        return $this->solId;
    }

    /**
     * Set solSecuencial
     *
     * @param integer $solSecuencial
     *
     * @return Solicitud
     */
    public function setSolSecuencial($solSecuencial)
    {
        $this->solSecuencial = $solSecuencial;

        return $this;
    }

    /**
     * Get solSecuencial
     *
     * @return integer
     */
    public function getSolSecuencial()
    {
        return $this->solSecuencial;
    }

    /**
     * Set solIdsolicitud
     *
     * @param string $solIdsolicitud
     *
     * @return Solicitud
     */
    public function setSolIdsolicitud($solIdsolicitud)
    {
        $this->solIdsolicitud = $solIdsolicitud;

        return $this;
    }

    /**
     * Get solIdsolicitud
     *
     * @return string
     */
    public function getSolIdsolicitud()
    {
        return $this->solIdsolicitud;
    }

    /**
     * Set solFecharealizacion
     *
     * @param \DateTime $solFecharealizacion
     *
     * @return Solicitud
     */
    public function setSolFecharealizacion($solFecharealizacion)
    {
        $this->solFecharealizacion = $solFecharealizacion;

        return $this;
    }

    /**
     * Get solFecharealizacion
     *
     * @return \DateTime
     */
    public function getSolFecharealizacion()
    {
        return $this->solFecharealizacion;
    }

    /**
     * Set solNumeroactualizacion
     *
     * @param integer $solNumeroactualizacion
     *
     * @return Solicitud
     */
    public function setSolNumeroactualizacion($solNumeroactualizacion)
    {
        $this->solNumeroactualizacion = $solNumeroactualizacion;

        return $this;
    }

    /**
     * Get solNumeroactualizacion
     *
     * @return integer
     */
    public function getSolNumeroactualizacion()
    {
        return $this->solNumeroactualizacion;
    }

    /**
     * Set solEstado
     *
     * @param integer $solEstado
     *
     * @return Solicitud
     */
    public function setSolEstado($solEstado)
    {
        $this->solEstado = $solEstado;

        return $this;
    }

    /**
     * Get solEstado
     *
     * @return string
     */
    public function getSolEstado()
    {
        return $this->solEstado;
    }

    /**
     * Set solAnio
     *
     * @param integer $solAnio
     *
     * @return Solicitud
     */
    public function setSolAnio($solAnio)
    {
        $this->solAnio = $solAnio;

        return $this;
    }

    /**
     * Get solAnio
     *
     * @return string
     */
    public function getSolAnio()
    {
        return $this->solAnio;
    }

    /**
     * Set per
     *
     * @param \BackBundle\Entity\Persona $per
     *
     * @return Solicitud
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
