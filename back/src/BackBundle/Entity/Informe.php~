<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Informe
 *
 * @ORM\Table(name="informe", uniqueConstraints={@ORM\UniqueConstraint(name="informe_pk", columns={"inf_id"})}, indexes={@ORM\Index(name="ciu_inf_fk", columns={"ciusol_id"}), @ORM\Index(name="sol_inf_fk", columns={"sol_id"})})
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
     * @ORM\Column(name="inf_fecharealizado", type="date", nullable=true)
     */
    private $infFecharealizado;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="inf_fechasalida", type="date", nullable=true)
     */
    private $infFechasalida;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="inf_horasalida", type="time", nullable=true)
     */
    private $infHorasalida;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="inf_fechallegada", type="date", nullable=true)
     */
    private $infFechallegada;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="inf_horallegada", type="time", nullable=true)
     */
    private $infHorallegada;

    /**
     * @var string
     *
     * @ORM\Column(name="inf_actividades", type="text", nullable=true)
     */
    private $infActividades;

    /**
     * @var string
     *
     * @ORM\Column(name="inf_estado", type="string", length=1, nullable=true)
     */
    private $infEstado;

    /**
     * @var string
     *
     * @ORM\Column(name="inf_rutapdf", type="text", nullable=true)
     */
    private $infRutapdf;

    /**
     * @var \CiudadSolicitud
     *
     * @ORM\ManyToOne(targetEntity="CiudadSolicitud")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="ciusol_id", referencedColumnName="ciusol_id")
     * })
     */
    private $ciusol;

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
     * Set infFecharealizado
     *
     * @param \DateTime $infFecharealizado
     *
     * @return Informe
     */
    public function setInfFecharealizado($infFecharealizado)
    {
        $this->infFecharealizado = $infFecharealizado;

        return $this;
    }

    /**
     * Get infFecharealizado
     *
     * @return \DateTime
     */
    public function getInfFecharealizado()
    {
        return $this->infFecharealizado;
    }

    /**
     * Set infFechasalida
     *
     * @param \DateTime $infFechasalida
     *
     * @return Informe
     */
    public function setInfFechasalida($infFechasalida)
    {
        $this->infFechasalida = $infFechasalida;

        return $this;
    }

    /**
     * Get infFechasalida
     *
     * @return \DateTime
     */
    public function getInfFechasalida()
    {
        return $this->infFechasalida;
    }

    /**
     * Set infHorasalida
     *
     * @param \DateTime $infHorasalida
     *
     * @return Informe
     */
    public function setInfHorasalida($infHorasalida)
    {
        $this->infHorasalida = $infHorasalida;

        return $this;
    }

    /**
     * Get infHorasalida
     *
     * @return \DateTime
     */
    public function getInfHorasalida()
    {
        return $this->infHorasalida;
    }

    /**
     * Set infFechallegada
     *
     * @param \DateTime $infFechallegada
     *
     * @return Informe
     */
    public function setInfFechallegada($infFechallegada)
    {
        $this->infFechallegada = $infFechallegada;

        return $this;
    }

    /**
     * Get infFechallegada
     *
     * @return \DateTime
     */
    public function getInfFechallegada()
    {
        return $this->infFechallegada;
    }

    /**
     * Set infHorallegada
     *
     * @param \DateTime $infHorallegada
     *
     * @return Informe
     */
    public function setInfHorallegada($infHorallegada)
    {
        $this->infHorallegada = $infHorallegada;

        return $this;
    }

    /**
     * Get infHorallegada
     *
     * @return \DateTime
     */
    public function getInfHorallegada()
    {
        return $this->infHorallegada;
    }

    /**
     * Set infActividades
     *
     * @param string $infActividades
     *
     * @return Informe
     */
    public function setInfActividades($infActividades)
    {
        $this->infActividades = $infActividades;

        return $this;
    }

    /**
     * Get infActividades
     *
     * @return string
     */
    public function getInfActividades()
    {
        return $this->infActividades;
    }

    /**
     * Set infEstado
     *
     * @param string $infEstado
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
     * Set infRutapdf
     *
     * @param string $infRutapdf
     *
     * @return Informe
     */
    public function setInfRutapdf($infRutapdf)
    {
        $this->infRutapdf = $infRutapdf;

        return $this;
    }

    /**
     * Get infRutapdf
     *
     * @return string
     */
    public function getInfRutapdf()
    {
        return $this->infRutapdf;
    }

    /**
     * Set ciusol
     *
     * @param \BackBundle\Entity\CiudadSolicitud $ciusol
     *
     * @return Informe
     */
    public function setCiusol(\BackBundle\Entity\CiudadSolicitud $ciusol = null)
    {
        $this->ciusol = $ciusol;

        return $this;
    }

    /**
     * Get ciusol
     *
     * @return \BackBundle\Entity\CiudadSolicitud
     */
    public function getCiusol()
    {
        return $this->ciusol;
    }

    /**
     * Set sol
     *
     * @param \BackBundle\Entity\Solicitud $sol
     *
     * @return Informe
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
