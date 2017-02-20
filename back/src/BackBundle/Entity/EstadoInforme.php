<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * EstadoInforme
 *
 * @ORM\Table(name="estado_informe", uniqueConstraints={@ORM\UniqueConstraint(name="estado_informe_pk", columns={"estinf_id"})}, indexes={@ORM\Index(name="inf_estinf_fk", columns={"inf_id"})})
 * @ORM\Entity
 */
class EstadoInforme
{
    /**
     * @var integer
     *
     * @ORM\Column(name="estinf_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="estado_informe_estinf_id_seq", allocationSize=1, initialValue=1)
     */
    private $estinfId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="estinf_fechasalida", type="date", nullable=true)
     */
    private $estinfFechasalida;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="estinf_horasalida", type="time", nullable=true)
     */
    private $estinfHorasalida;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="estinf_fechallegada", type="date", nullable=true)
     */
    private $estinfFechallegada;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="estinf_horallegada", type="time", nullable=true)
     */
    private $estinfHorallegada;

    /**
     * @var string
     *
     * @ORM\Column(name="estinf_actividades", type="text", nullable=true)
     */
    private $estinfActividades;

    /**
     * @var string
     *
     * @ORM\Column(name="estinf_estado", type="string", length=1, nullable=true)
     */
    private $estinfEstado;

    /**
     * @var string
     *
     * @ORM\Column(name="estinf_rutapdf", type="text", nullable=true)
     */
    private $estinfRutapdf;

    /**
     * @var string
     *
     * @ORM\Column(name="estinf_observacion", type="text", nullable=true)
     */
    private $estinfObservacion;

    /**
     * @var \Informe
     *
     * @ORM\ManyToOne(targetEntity="Informe")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="inf_id", referencedColumnName="inf_id")
     * })
     */
    private $inf;



    /**
     * Get estinfId
     *
     * @return integer
     */
    public function getEstinfId()
    {
        return $this->estinfId;
    }

    /**
     * Set estinfFechasalida
     *
     * @param \DateTime $estinfFechasalida
     *
     * @return EstadoInforme
     */
    public function setEstinfFechasalida($estinfFechasalida)
    {
        $this->estinfFechasalida = $estinfFechasalida;

        return $this;
    }

    /**
     * Get estinfFechasalida
     *
     * @return \DateTime
     */
    public function getEstinfFechasalida()
    {
        return $this->estinfFechasalida;
    }

    /**
     * Set estinfHorasalida
     *
     * @param \DateTime $estinfHorasalida
     *
     * @return EstadoInforme
     */
    public function setEstinfHorasalida($estinfHorasalida)
    {
        $this->estinfHorasalida = $estinfHorasalida;

        return $this;
    }

    /**
     * Get estinfHorasalida
     *
     * @return \DateTime
     */
    public function getEstinfHorasalida()
    {
        return $this->estinfHorasalida;
    }

    /**
     * Set estinfFechallegada
     *
     * @param \DateTime $estinfFechallegada
     *
     * @return EstadoInforme
     */
    public function setEstinfFechallegada($estinfFechallegada)
    {
        $this->estinfFechallegada = $estinfFechallegada;

        return $this;
    }

    /**
     * Get estinfFechallegada
     *
     * @return \DateTime
     */
    public function getEstinfFechallegada()
    {
        return $this->estinfFechallegada;
    }

    /**
     * Set estinfHorallegada
     *
     * @param \DateTime $estinfHorallegada
     *
     * @return EstadoInforme
     */
    public function setEstinfHorallegada($estinfHorallegada)
    {
        $this->estinfHorallegada = $estinfHorallegada;

        return $this;
    }

    /**
     * Get estinfHorallegada
     *
     * @return \DateTime
     */
    public function getEstinfHorallegada()
    {
        return $this->estinfHorallegada;
    }

    /**
     * Set estinfActividades
     *
     * @param string $estinfActividades
     *
     * @return EstadoInforme
     */
    public function setEstinfActividades($estinfActividades)
    {
        $this->estinfActividades = $estinfActividades;

        return $this;
    }

    /**
     * Get estinfActividades
     *
     * @return string
     */
    public function getEstinfActividades()
    {
        return $this->estinfActividades;
    }

    /**
     * Set estinfEstado
     *
     * @param string $estinfEstado
     *
     * @return EstadoInforme
     */
    public function setEstinfEstado($estinfEstado)
    {
        $this->estinfEstado = $estinfEstado;

        return $this;
    }

    /**
     * Get estinfEstado
     *
     * @return string
     */
    public function getEstinfEstado()
    {
        return $this->estinfEstado;
    }

    /**
     * Set estinfRutapdf
     *
     * @param string $estinfRutapdf
     *
     * @return EstadoInforme
     */
    public function setEstinfRutapdf($estinfRutapdf)
    {
        $this->estinfRutapdf = $estinfRutapdf;

        return $this;
    }

    /**
     * Get estinfRutapdf
     *
     * @return string
     */
    public function getEstinfRutapdf()
    {
        return $this->estinfRutapdf;
    }

    /**
     * Set estinfObservacion
     *
     * @param string $estinfObservacion
     *
     * @return EstadoInforme
     */
    public function setEstinfObservacion($estinfObservacion)
    {
        $this->estinfObservacion = $estinfObservacion;

        return $this;
    }

    /**
     * Get estinfObservacion
     *
     * @return string
     */
    public function getEstinfObservacion()
    {
        return $this->estinfObservacion;
    }

    /**
     * Set inf
     *
     * @param \BackBundle\Entity\Informe $inf
     *
     * @return EstadoInforme
     */
    public function setInf(\BackBundle\Entity\Informe $inf = null)
    {
        $this->inf = $inf;

        return $this;
    }

    /**
     * Get inf
     *
     * @return \BackBundle\Entity\Informe
     */
    public function getInf()
    {
        return $this->inf;
    }
}
