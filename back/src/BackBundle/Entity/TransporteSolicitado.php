<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TransporteSolicitado
 *
 * @ORM\Table(name="transporte_solicitado", uniqueConstraints={@ORM\UniqueConstraint(name="transporte_solicitado_pk", columns={"trasol_id"})}, indexes={@ORM\Index(name="tiptra_trasol_fk", columns={"tiptra_id"}), @ORM\Index(name="tra_sol_fk", columns={"estsol_id"})})
 * @ORM\Entity
 */
class TransporteSolicitado
{
    /**
     * @var integer
     *
     * @ORM\Column(name="trasol_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="transporte_solicitado_trasol_id_seq", allocationSize=1, initialValue=1)
     */
    private $trasolId;

    /**
     * @var string
     *
     * @ORM\Column(name="trasol_rutainicio", type="string", length=30, nullable=true)
     */
    private $trasolRutainicio;

    /**
     * @var string
     *
     * @ORM\Column(name="trasol_rutafin", type="string", length=30, nullable=true)
     */
    private $trasolRutafin;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="trasol_fechasalida", type="date", nullable=true)
     */
    private $trasolFechasalida;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="trasol_horasalida", type="time", nullable=true)
     */
    private $trasolHorasalida;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="trasol_fechallegada", type="date", nullable=true)
     */
    private $trasolFechallegada;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="trasol_horallegada", type="time", nullable=true)
     */
    private $trasolHorallegada;

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
     * @var \EstadoSolicitud
     *
     * @ORM\ManyToOne(targetEntity="EstadoSolicitud")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="estsol_id", referencedColumnName="estsol_id")
     * })
     */
    private $estsol;



    /**
     * Get trasolId
     *
     * @return integer
     */
    public function getTrasolId()
    {
        return $this->trasolId;
    }

    /**
     * Set trasolRutainicio
     *
     * @param string $trasolRutainicio
     *
     * @return TransporteSolicitado
     */
    public function setTrasolRutainicio($trasolRutainicio)
    {
        $this->trasolRutainicio = $trasolRutainicio;

        return $this;
    }

    /**
     * Get trasolRutainicio
     *
     * @return string
     */
    public function getTrasolRutainicio()
    {
        return $this->trasolRutainicio;
    }

    /**
     * Set trasolRutafin
     *
     * @param string $trasolRutafin
     *
     * @return TransporteSolicitado
     */
    public function setTrasolRutafin($trasolRutafin)
    {
        $this->trasolRutafin = $trasolRutafin;

        return $this;
    }

    /**
     * Get trasolRutafin
     *
     * @return string
     */
    public function getTrasolRutafin()
    {
        return $this->trasolRutafin;
    }

    /**
     * Set trasolFechasalida
     *
     * @param \DateTime $trasolFechasalida
     *
     * @return TransporteSolicitado
     */
    public function setTrasolFechasalida($trasolFechasalida)
    {
        $this->trasolFechasalida = $trasolFechasalida;

        return $this;
    }

    /**
     * Get trasolFechasalida
     *
     * @return \DateTime
     */
    public function getTrasolFechasalida()
    {
        return $this->trasolFechasalida;
    }

    /**
     * Set trasolHorasalida
     *
     * @param \DateTime $trasolHorasalida
     *
     * @return TransporteSolicitado
     */
    public function setTrasolHorasalida($trasolHorasalida)
    {
        $this->trasolHorasalida = $trasolHorasalida;

        return $this;
    }

    /**
     * Get trasolHorasalida
     *
     * @return \DateTime
     */
    public function getTrasolHorasalida()
    {
        return $this->trasolHorasalida;
    }

    /**
     * Set trasolFechallegada
     *
     * @param \DateTime $trasolFechallegada
     *
     * @return TransporteSolicitado
     */
    public function setTrasolFechallegada($trasolFechallegada)
    {
        $this->trasolFechallegada = $trasolFechallegada;

        return $this;
    }

    /**
     * Get trasolFechallegada
     *
     * @return \DateTime
     */
    public function getTrasolFechallegada()
    {
        return $this->trasolFechallegada;
    }

    /**
     * Set trasolHorallegada
     *
     * @param \DateTime $trasolHorallegada
     *
     * @return TransporteSolicitado
     */
    public function setTrasolHorallegada($trasolHorallegada)
    {
        $this->trasolHorallegada = $trasolHorallegada;

        return $this;
    }

    /**
     * Get trasolHorallegada
     *
     * @return \DateTime
     */
    public function getTrasolHorallegada()
    {
        return $this->trasolHorallegada;
    }

    /**
     * Set tiptra
     *
     * @param \BackBundle\Entity\TipoTransporte $tiptra
     *
     * @return TransporteSolicitado
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
     * Set estsol
     *
     * @param \BackBundle\Entity\EstadoSolicitud $estsol
     *
     * @return TransporteSolicitado
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
}
