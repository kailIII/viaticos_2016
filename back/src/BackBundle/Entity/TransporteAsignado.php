<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TransporteAsignado
 *
 * @ORM\Table(name="transporte_asignado", uniqueConstraints={@ORM\UniqueConstraint(name="transporte_asignado_pk", columns={"traasi_id"})}, indexes={@ORM\Index(name="sol_traasi_fk", columns={"estsol_id"}), @ORM\Index(name="tsolext_traasi_fk", columns={"trasol_id2"}), @ORM\Index(name="vps_traasi_fk", columns={"vps_id"}), @ORM\Index(name="tiptra_traasi_fk", columns={"tiptra_id"})})
 * @ORM\Entity
 */
class TransporteAsignado
{
    /**
     * @var integer
     *
     * @ORM\Column(name="traasi_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="transporte_asignado_traasi_id_seq", allocationSize=1, initialValue=1)
     */
    private $traasiId;

    /**
     * @var string
     *
     * @ORM\Column(name="traasi_rutainicio", type="string", length=30, nullable=true)
     */
    private $traasiRutainicio;

    /**
     * @var string
     *
     * @ORM\Column(name="traasi_rutafin", type="string", length=30, nullable=true)
     */
    private $traasiRutafin;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="traasi_fechasalida", type="date", nullable=true)
     */
    private $traasiFechasalida;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="traasi_horasalida", type="time", nullable=true)
     */
    private $traasiHorasalida;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="traasi_fechallegada", type="date", nullable=true)
     */
    private $traasiFechallegada;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="traasi_horallegada", type="time", nullable=true)
     */
    private $traasiHorallegada;

    /**
     * @var string
     *
     * @ORM\Column(name="traasi_ticketelectronico", type="string", length=50, nullable=true)
     */
    private $traasiTicketelectronico;

    /**
     * @var string
     *
     * @ORM\Column(name="traasi_estado", type="string", length=1, nullable=true)
     */
    private $traasiEstado;

    /**
     * @var string
     *
     * @ORM\Column(name="traasi_observacion", type="text", nullable=true)
     */
    private $traasiObservacion;

    /**
     * @var \EstadoSolicitud
     *
     * @ORM\ManyToOne(targetEntity="EstadoSolicitud")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="estsol_id", referencedColumnName="estsol_id")
     * })
     */
    private $estsol;

    /**
     * @var \TipoTransporte
     *
     * @ORM\ManyToOne(targetEntity="TipoTransporte")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="tiptra_id", referencedColumnName="tiptra_id")
     * })
     */
    private $tiptra;

    /**
     * @var \TransporteSolicitadoextra
     *
     * @ORM\ManyToOne(targetEntity="TransporteSolicitadoextra")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="trasol_id2", referencedColumnName="trasol_id2")
     * })
     */
    private $trasol2;

    /**
     * @var \VehiculoPersonaComision
     *
     * @ORM\ManyToOne(targetEntity="VehiculoPersonaComision")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="vps_id", referencedColumnName="vps_id")
     * })
     */
    private $vps;



    /**
     * Get traasiId
     *
     * @return integer
     */
    public function getTraasiId()
    {
        return $this->traasiId;
    }

    /**
     * Set traasiRutainicio
     *
     * @param string $traasiRutainicio
     *
     * @return TransporteAsignado
     */
    public function setTraasiRutainicio($traasiRutainicio)
    {
        $this->traasiRutainicio = $traasiRutainicio;

        return $this;
    }

    /**
     * Get traasiRutainicio
     *
     * @return string
     */
    public function getTraasiRutainicio()
    {
        return $this->traasiRutainicio;
    }

    /**
     * Set traasiRutafin
     *
     * @param string $traasiRutafin
     *
     * @return TransporteAsignado
     */
    public function setTraasiRutafin($traasiRutafin)
    {
        $this->traasiRutafin = $traasiRutafin;

        return $this;
    }

    /**
     * Get traasiRutafin
     *
     * @return string
     */
    public function getTraasiRutafin()
    {
        return $this->traasiRutafin;
    }

    /**
     * Set traasiFechasalida
     *
     * @param \DateTime $traasiFechasalida
     *
     * @return TransporteAsignado
     */
    public function setTraasiFechasalida($traasiFechasalida)
    {
        $this->traasiFechasalida = $traasiFechasalida;

        return $this;
    }

    /**
     * Get traasiFechasalida
     *
     * @return \DateTime
     */
    public function getTraasiFechasalida()
    {
        return $this->traasiFechasalida;
    }

    /**
     * Set traasiHorasalida
     *
     * @param \DateTime $traasiHorasalida
     *
     * @return TransporteAsignado
     */
    public function setTraasiHorasalida($traasiHorasalida)
    {
        $this->traasiHorasalida = $traasiHorasalida;

        return $this;
    }

    /**
     * Get traasiHorasalida
     *
     * @return \DateTime
     */
    public function getTraasiHorasalida()
    {
        return $this->traasiHorasalida;
    }

    /**
     * Set traasiFechallegada
     *
     * @param \DateTime $traasiFechallegada
     *
     * @return TransporteAsignado
     */
    public function setTraasiFechallegada($traasiFechallegada)
    {
        $this->traasiFechallegada = $traasiFechallegada;

        return $this;
    }

    /**
     * Get traasiFechallegada
     *
     * @return \DateTime
     */
    public function getTraasiFechallegada()
    {
        return $this->traasiFechallegada;
    }

    /**
     * Set traasiHorallegada
     *
     * @param \DateTime $traasiHorallegada
     *
     * @return TransporteAsignado
     */
    public function setTraasiHorallegada($traasiHorallegada)
    {
        $this->traasiHorallegada = $traasiHorallegada;

        return $this;
    }

    /**
     * Get traasiHorallegada
     *
     * @return \DateTime
     */
    public function getTraasiHorallegada()
    {
        return $this->traasiHorallegada;
    }

    /**
     * Set traasiTicketelectronico
     *
     * @param string $traasiTicketelectronico
     *
     * @return TransporteAsignado
     */
    public function setTraasiTicketelectronico($traasiTicketelectronico)
    {
        $this->traasiTicketelectronico = $traasiTicketelectronico;

        return $this;
    }

    /**
     * Get traasiTicketelectronico
     *
     * @return string
     */
    public function getTraasiTicketelectronico()
    {
        return $this->traasiTicketelectronico;
    }

    /**
     * Set traasiEstado
     *
     * @param string $traasiEstado
     *
     * @return TransporteAsignado
     */
    public function setTraasiEstado($traasiEstado)
    {
        $this->traasiEstado = $traasiEstado;

        return $this;
    }

    /**
     * Get traasiEstado
     *
     * @return string
     */
    public function getTraasiEstado()
    {
        return $this->traasiEstado;
    }

    /**
     * Set traasiObservacion
     *
     * @param string $traasiObservacion
     *
     * @return TransporteAsignado
     */
    public function setTraasiObservacion($traasiObservacion)
    {
        $this->traasiObservacion = $traasiObservacion;

        return $this;
    }

    /**
     * Get traasiObservacion
     *
     * @return string
     */
    public function getTraasiObservacion()
    {
        return $this->traasiObservacion;
    }

    /**
     * Set estsol
     *
     * @param \BackBundle\Entity\EstadoSolicitud $estsol
     *
     * @return TransporteAsignado
     */
    public function setEstsol(\BackBundle\Entity\EstadoSolicitud $estsol = null)
    {
        $this->estsol = $estsol;

        return $this;
    }

    /**
     * Get estsol
     *
     * @return \BackBundle\Entity\EstadoSolicitud
     */
    public function getEstsol()
    {
        return $this->estsol;
    }

    /**
     * Set tiptra
     *
     * @param \BackBundle\Entity\TipoTransporte $tiptra
     *
     * @return TransporteAsignado
     */
    public function setTiptra(\BackBundle\Entity\TipoTransporte $tiptra = null)
    {
        $this->tiptra = $tiptra;

        return $this;
    }

    /**
     * Get tiptra
     *
     * @return \BackBundle\Entity\TipoTransporte
     */
    public function getTiptra()
    {
        return $this->tiptra;
    }

    /**
     * Set trasol2
     *
     * @param \BackBundle\Entity\TransporteSolicitadoextra $trasol2
     *
     * @return TransporteAsignado
     */
    public function setTrasol2(\BackBundle\Entity\TransporteSolicitadoextra $trasol2 = null)
    {
        $this->trasol2 = $trasol2;

        return $this;
    }

    /**
     * Get trasol2
     *
     * @return \BackBundle\Entity\TransporteSolicitadoextra
     */
    public function getTrasol2()
    {
        return $this->trasol2;
    }

    /**
     * Set vps
     *
     * @param \BackBundle\Entity\VehiculoPersonaComision $vps
     *
     * @return TransporteAsignado
     */
    public function setVps(\BackBundle\Entity\VehiculoPersonaComision $vps = null)
    {
        $this->vps = $vps;

        return $this;
    }

    /**
     * Get vps
     *
     * @return \BackBundle\Entity\VehiculoPersonaComision
     */
    public function getVps()
    {
        return $this->vps;
    }
}
