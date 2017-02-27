<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * EstadoSolicitud
 *
 * @ORM\Table(name="estado_solicitud", uniqueConstraints={@ORM\UniqueConstraint(name="estado_solicitud_pk", columns={"estsol_id"})}, indexes={@ORM\Index(name="sol_estsol_fk", columns={"sol_id"})})
 * @ORM\Entity
 */
class EstadoSolicitud
{
    /**
     * @var integer
     *
     * @ORM\Column(name="estsol_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="estado_solicitud_estsol_id_seq", allocationSize=1, initialValue=1)
     */
    private $estsolId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="estsol_fechasalida", type="date", nullable=true)
     */
    private $estsolFechasalida;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="estsol_horasalida", type="time", nullable=true)
     */
    private $estsolHorasalida;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="estsol_fechallegada", type="date", nullable=true)
     */
    private $estsolFechallegada;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="estsol_horallegada", type="time", nullable=true)
     */
    private $estsolHorallegada;

    /**
     * @var string
     *
     * @ORM\Column(name="estsol_actividades", type="text", nullable=true)
     */
    private $estsolActividades;

    /**
     * @var string
     *
     * @ORM\Column(name="estsol_estado", type="string", length=1, nullable=true)
     */
    private $estsolEstado;

    /**
     * @var string
     *
     * @ORM\Column(name="estsol_rutapdf", type="text", nullable=true)
     */
    private $estsolRutapdf;

    /**
     * @var string
     *
     * @ORM\Column(name="estsol_observacion", type="text", nullable=true)
     */
    private $estsolObservacion;

    /**
     * @var integer
     *
     * @ORM\Column(name="estsol_numeroactualizacion", type="smallint", nullable=true)
     */
    private $estsolNumeroactualizacion;

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
     * Get estsolId
     *
     * @return integer
     */
    public function getEstsolId()
    {
        return $this->estsolId;
    }

    /**
     * Set estsolFechasalida
     *
     * @param \DateTime $estsolFechasalida
     *
     * @return EstadoSolicitud
     */
    public function setEstsolFechasalida($estsolFechasalida)
    {
        $this->estsolFechasalida = $estsolFechasalida;

        return $this;
    }

    /**
     * Get estsolFechasalida
     *
     * @return \DateTime
     */
    public function getEstsolFechasalida()
    {
        return $this->estsolFechasalida;
    }

    /**
     * Set estsolHorasalida
     *
     * @param \DateTime $estsolHorasalida
     *
     * @return EstadoSolicitud
     */
    public function setEstsolHorasalida($estsolHorasalida)
    {
        $this->estsolHorasalida = $estsolHorasalida;

        return $this;
    }

    /**
     * Get estsolHorasalida
     *
     * @return \DateTime
     */
    public function getEstsolHorasalida()
    {
        return $this->estsolHorasalida;
    }

    /**
     * Set estsolFechallegada
     *
     * @param \DateTime $estsolFechallegada
     *
     * @return EstadoSolicitud
     */
    public function setEstsolFechallegada($estsolFechallegada)
    {
        $this->estsolFechallegada = $estsolFechallegada;

        return $this;
    }

    /**
     * Get estsolFechallegada
     *
     * @return \DateTime
     */
    public function getEstsolFechallegada()
    {
        return $this->estsolFechallegada;
    }

    /**
     * Set estsolHorallegada
     *
     * @param \DateTime $estsolHorallegada
     *
     * @return EstadoSolicitud
     */
    public function setEstsolHorallegada($estsolHorallegada)
    {
        $this->estsolHorallegada = $estsolHorallegada;

        return $this;
    }

    /**
     * Get estsolHorallegada
     *
     * @return \DateTime
     */
    public function getEstsolHorallegada()
    {
        return $this->estsolHorallegada;
    }

    /**
     * Set estsolActividades
     *
     * @param string $estsolActividades
     *
     * @return EstadoSolicitud
     */
    public function setEstsolActividades($estsolActividades)
    {
        $this->estsolActividades = $estsolActividades;

        return $this;
    }

    /**
     * Get estsolActividades
     *
     * @return string
     */
    public function getEstsolActividades()
    {
        return $this->estsolActividades;
    }

    /**
     * Set estsolEstado
     *
     * @param string $estsolEstado
     *
     * @return EstadoSolicitud
     */
    public function setEstsolEstado($estsolEstado)
    {
        $this->estsolEstado = $estsolEstado;

        return $this;
    }

    /**
     * Get estsolEstado
     *
     * @return string
     */
    public function getEstsolEstado()
    {
        return $this->estsolEstado;
    }

    /**
     * Set estsolRutapdf
     *
     * @param string $estsolRutapdf
     *
     * @return EstadoSolicitud
     */
    public function setEstsolRutapdf($estsolRutapdf)
    {
        $this->estsolRutapdf = $estsolRutapdf;

        return $this;
    }

    /**
     * Get estsolRutapdf
     *
     * @return string
     */
    public function getEstsolRutapdf()
    {
        return $this->estsolRutapdf;
    }

    /**
     * Set estsolObservacion
     *
     * @param string $estsolObservacion
     *
     * @return EstadoSolicitud
     */
    public function setEstsolObservacion($estsolObservacion)
    {
        $this->estsolObservacion = $estsolObservacion;

        return $this;
    }

    /**
     * Get estsolObservacion
     *
     * @return string
     */
    public function getEstsolObservacion()
    {
        return $this->estsolObservacion;
    }

    /**
     * Set estsolNumeroactualizacion
     *
     * @param integer $estsolNumeroactualizacion
     *
     * @return EstadoSolicitud
     */
    public function setEstsolNumeroactualizacion($estsolNumeroactualizacion)
    {
        $this->estsolNumeroactualizacion = $estsolNumeroactualizacion;

        return $this;
    }

    /**
     * Get estsolNumeroactualizacion
     *
     * @return integer
     */
    public function getEstsolNumeroactualizacion()
    {
        return $this->estsolNumeroactualizacion;
    }

    /**
     * Set sol
     *
     * @param \BackBundle\Entity\Solicitud $sol
     *
     * @return EstadoSolicitud
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
