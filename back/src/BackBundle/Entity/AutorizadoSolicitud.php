<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * AutorizadoSolicitud
 *
 * @ORM\Table(name="autorizado_solicitud", uniqueConstraints={@ORM\UniqueConstraint(name="autorizado_solicitud_pk", columns={"solaut_id"})}, indexes={@ORM\Index(name="aut_autsol_fk", columns={"aut_id"}), @ORM\Index(name="per_autsol_fk", columns={"per_id"}), @ORM\Index(name="sol_aut_fk", columns={"estsol_id"})})
 * @ORM\Entity
 */
class AutorizadoSolicitud
{
    /**
     * @var integer
     *
     * @ORM\Column(name="solaut_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="autorizado_solicitud_solaut_id_seq", allocationSize=1, initialValue=1)
     */
    private $solautId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="solaut_fechaautorizado", type="date", nullable=true)
     */
    private $solautFechaautorizado;

    /**
     * @var string
     *
     * @ORM\Column(name="solaut_comentario", type="text", nullable=true)
     */
    private $solautComentario;

    /**
     * @var string
     *
     * @ORM\Column(name="colaut_macaddress", type="string", length=15, nullable=true)
     */
    private $colautMacaddress;

    /**
     * @var \Autorizacion
     *
     * @ORM\ManyToOne(targetEntity="Autorizacion")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="aut_id", referencedColumnName="aut_id")
     * })
     */
    private $aut;

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
     * @var \EstadoSolicitud
     *
     * @ORM\ManyToOne(targetEntity="EstadoSolicitud")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="estsol_id", referencedColumnName="estsol_id")
     * })
     */
    private $estsol;



    /**
     * Get solautId
     *
     * @return integer
     */
    public function getSolautId()
    {
        return $this->solautId;
    }

    /**
     * Set solautFechaautorizado
     *
     * @param \DateTime $solautFechaautorizado
     *
     * @return AutorizadoSolicitud
     */
    public function setSolautFechaautorizado($solautFechaautorizado)
    {
        $this->solautFechaautorizado = $solautFechaautorizado;

        return $this;
    }

    /**
     * Get solautFechaautorizado
     *
     * @return \DateTime
     */
    public function getSolautFechaautorizado()
    {
        return $this->solautFechaautorizado;
    }

    /**
     * Set solautComentario
     *
     * @param string $solautComentario
     *
     * @return AutorizadoSolicitud
     */
    public function setSolautComentario($solautComentario)
    {
        $this->solautComentario = $solautComentario;

        return $this;
    }

    /**
     * Get solautComentario
     *
     * @return string
     */
    public function getSolautComentario()
    {
        return $this->solautComentario;
    }

    /**
     * Set colautMacaddress
     *
     * @param string $colautMacaddress
     *
     * @return AutorizadoSolicitud
     */
    public function setColautMacaddress($colautMacaddress)
    {
        $this->colautMacaddress = $colautMacaddress;

        return $this;
    }

    /**
     * Get colautMacaddress
     *
     * @return string
     */
    public function getColautMacaddress()
    {
        return $this->colautMacaddress;
    }

    /**
     * Set aut
     *
     * @param \BackBundle\Entity\Autorizacion $aut
     *
     * @return AutorizadoSolicitud
     */
    public function setAut(\BackBundle\Entity\Autorizacion $aut = null)
    {
        $this->aut = $aut;

        return $this;
    }

    /**
     * Get aut
     *
     * @return \BackBundle\Entity\Autorizacion
     */
    public function getAut()
    {
        return $this->aut;
    }

    /**
     * Set per
     *
     * @param \BackBundle\Entity\Persona $per
     *
     * @return AutorizadoSolicitud
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

    /**
     * Set estsol
     *
     * @param \BackBundle\Entity\EstadoSolicitud $estsol
     *
     * @return AutorizadoSolicitud
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
