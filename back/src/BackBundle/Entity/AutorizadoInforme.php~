<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * AutorizadoInforme
 *
 * @ORM\Table(name="autorizado_informe", uniqueConstraints={@ORM\UniqueConstraint(name="autorizado_informe_pk", columns={"infaut_id"})}, indexes={@ORM\Index(name="aut_autinf_fk", columns={"aut_id"}), @ORM\Index(name="inf_aut_fk", columns={"estinf_id"})})
 * @ORM\Entity
 */
class AutorizadoInforme
{
    /**
     * @var integer
     *
     * @ORM\Column(name="infaut_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="autorizado_informe_infaut_id_seq", allocationSize=1, initialValue=1)
     */
    private $infautId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="infaut_fechaautorizado", type="date", nullable=true)
     */
    private $infautFechaautorizado;

    /**
     * @var string
     *
     * @ORM\Column(name="infaut_comentario", type="text", nullable=true)
     */
    private $infautComentario;

    /**
     * @var string
     *
     * @ORM\Column(name="infaut_macaddress", type="string", length=15, nullable=true)
     */
    private $infautMacaddress;

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
     * @var \EstadoInforme
     *
     * @ORM\ManyToOne(targetEntity="EstadoInforme")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="estinf_id", referencedColumnName="estinf_id")
     * })
     */
    private $estinf;



    /**
     * Get infautId
     *
     * @return integer
     */
    public function getInfautId()
    {
        return $this->infautId;
    }

    /**
     * Set infautFechaautorizado
     *
     * @param \DateTime $infautFechaautorizado
     *
     * @return AutorizadoInforme
     */
    public function setInfautFechaautorizado($infautFechaautorizado)
    {
        $this->infautFechaautorizado = $infautFechaautorizado;

        return $this;
    }

    /**
     * Get infautFechaautorizado
     *
     * @return \DateTime
     */
    public function getInfautFechaautorizado()
    {
        return $this->infautFechaautorizado;
    }

    /**
     * Set infautComentario
     *
     * @param string $infautComentario
     *
     * @return AutorizadoInforme
     */
    public function setInfautComentario($infautComentario)
    {
        $this->infautComentario = $infautComentario;

        return $this;
    }

    /**
     * Get infautComentario
     *
     * @return string
     */
    public function getInfautComentario()
    {
        return $this->infautComentario;
    }

    /**
     * Set infautMacaddress
     *
     * @param string $infautMacaddress
     *
     * @return AutorizadoInforme
     */
    public function setInfautMacaddress($infautMacaddress)
    {
        $this->infautMacaddress = $infautMacaddress;

        return $this;
    }

    /**
     * Get infautMacaddress
     *
     * @return string
     */
    public function getInfautMacaddress()
    {
        return $this->infautMacaddress;
    }

    /**
     * Set aut
     *
     * @param \BackBundle\Entity\Autorizacion $aut
     *
     * @return AutorizadoInforme
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
     * Set estinf
     *
     * @param \BackBundle\Entity\EstadoInforme $estinf
     *
     * @return AutorizadoInforme
     */
    public function setEstinf(\BackBundle\Entity\EstadoInforme $estinf = null)
    {
        $this->estinf = $estinf;

        return $this;
    }

    /**
     * Get estinf
     *
     * @return \BackBundle\Entity\EstadoInforme
     */
    public function getEstinf()
    {
        return $this->estinf;
    }
}
