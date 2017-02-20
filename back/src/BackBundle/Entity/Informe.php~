<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Solicitud
 *
 * @ORM\Table(name="informe", uniqueConstraints={@ORM\UniqueConstraint(name="informe_pk", columns={"inf_id"})}, indexes={@ORM\Index(name="sol_inf_fk", columns={"sol_id"})})
 * @ORM\Entity
 */
class Informe
{
    /**
     * @var integer
     *
     * @ORM\Column(name="inf_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="informe_inf_id_seq", allocationSize=1, initialValue=1)
     */
    private $infId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="inf_fecharealizacion", type="date", nullable=true)
     */
    private $infFecharealizacion;

    /**
     * @var integer
     *
     * @ORM\Column(name="inf_numeroactualizacion", type="smallint", nullable=true)
     */
    private $infNumeroactualizacion;

    /**
     * @var string
     *
     * @ORM\Column(name="inf_estado", type="string", length=1, nullable=true)
     */
    private $infEstado;

    /**
     * @var string
     *
     * @ORM\Column(name="inf_anio", type="string", length=4, nullable=true)
     */
    private $infAnio;

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
     * Get infId
     *
     * @return integer
     */
    public function getInfId()
    {
        return $this->infId;
    }
   
    /**
     * Set infFecharealizacion
     *
     * @param \DateTime $infFecharealizacion
     *
     * @return Informe
     */
    public function setInfFecharealizacion($infFecharealizacion)
    {
        $this->infFecharealizacion = $infFecharealizacion;

        return $this;
    }

    /**
     * Get infFecharealizacion
     *
     * @return \DateTime
     */
    public function getSolFecharealizacion()
    {
        return $this->infFecharealizacion;
    }

    /**
     * Set infNumeroactualizacion
     *
     * @param integer $infNumeroactualizacion
     *
     * @return Informe
     */
    public function setInfNumeroactualizacion($infNumeroactualizacion)
    {
        $this->infNumeroactualizacion = $infNumeroactualizacion;

        return $this;
    }

    /**
     * Get infNumeroactualizacion
     *
     * @return integer
     */
    public function getInfNumeroactualizacion()
    {
        return $this->infNumeroactualizacion;
    }

    /**
     * Set infEstado
     *
     * @param integer $infEstado
     *
     * @return Informe
     */
    public function setInfEstado($infEstado)
    {
        $this->infEstado = $infEstado;

        return $this;
    }

    /**
     * Get infEstado
     *
     * @return string
     */
    public function getInfEstado()
    {
        return $this->infEstado;
    }

    /**
     * Set infAnio
     *
     * @param integer $infAnio
     *
     * @return Informe
     */
    public function setInfAnio($infAnio)
    {
        $this->infAnio = $infAnio;

        return $this;
    }

    /**
     * Get infAnio
     *
     * @return string
     */
    public function getSolAnio()
    {
        return $this->infAnio;
    }

    /**
     * Set sol
     *
     * @param \BackBundle\Entity\Solicitud $sol
     *
     * @return Solicitud
     */
    public function setPer(\BackBundle\Entity\Solicitud $sol = null)
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