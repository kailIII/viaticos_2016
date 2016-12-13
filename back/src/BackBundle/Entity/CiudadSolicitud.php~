<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CiudadSolicitud
 *
 * @ORM\Table(name="ciudad_solicitud", uniqueConstraints={@ORM\UniqueConstraint(name="ciudad_solicitud_pk", columns={"ciusol_id"})}, indexes={@ORM\Index(name="ciu_ciusol_fk", columns={"ciu_id"}), @ORM\Index(name="ciu_sol_fk", columns={"estsol_id"})})
 * @ORM\Entity
 */
class CiudadSolicitud
{
    /**
     * @var integer
     *
     * @ORM\Column(name="ciusol_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="ciudad_solicitud_ciusol_id_seq", allocationSize=1, initialValue=1)
     */
    private $ciusolId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ciusol_fechadesde", type="date", nullable=true)
     */
    private $ciusolFechadesde;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ciusol_horadesde", type="time", nullable=true)
     */
    private $ciusolHoradesde;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ciusol_fechahasta", type="date", nullable=true)
     */
    private $ciusolFechahasta;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="ciusol_horahasta", type="time", nullable=true)
     */
    private $ciusolHorahasta;

    /**
     * @var \Ciudad
     *
     * @ORM\ManyToOne(targetEntity="Ciudad")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="ciu_id", referencedColumnName="ciu_id")
     * })
     */
    private $ciu;

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
     * Get ciusolId
     *
     * @return integer
     */
    public function getCiusolId()
    {
        return $this->ciusolId;
    }

    /**
     * Set ciusolFechadesde
     *
     * @param \DateTime $ciusolFechadesde
     *
     * @return CiudadSolicitud
     */
    public function setCiusolFechadesde($ciusolFechadesde)
    {
        $this->ciusolFechadesde = $ciusolFechadesde;

        return $this;
    }

    /**
     * Get ciusolFechadesde
     *
     * @return \DateTime
     */
    public function getCiusolFechadesde()
    {
        return $this->ciusolFechadesde;
    }

    /**
     * Set ciusolHoradesde
     *
     * @param \DateTime $ciusolHoradesde
     *
     * @return CiudadSolicitud
     */
    public function setCiusolHoradesde($ciusolHoradesde)
    {
        $this->ciusolHoradesde = $ciusolHoradesde;

        return $this;
    }

    /**
     * Get ciusolHoradesde
     *
     * @return \DateTime
     */
    public function getCiusolHoradesde()
    {
        return $this->ciusolHoradesde;
    }

    /**
     * Set ciusolFechahasta
     *
     * @param \DateTime $ciusolFechahasta
     *
     * @return CiudadSolicitud
     */
    public function setCiusolFechahasta($ciusolFechahasta)
    {
        $this->ciusolFechahasta = $ciusolFechahasta;

        return $this;
    }

    /**
     * Get ciusolFechahasta
     *
     * @return \DateTime
     */
    public function getCiusolFechahasta()
    {
        return $this->ciusolFechahasta;
    }

    /**
     * Set ciusolHorahasta
     *
     * @param \DateTime $ciusolHorahasta
     *
     * @return CiudadSolicitud
     */
    public function setCiusolHorahasta($ciusolHorahasta)
    {
        $this->ciusolHorahasta = $ciusolHorahasta;

        return $this;
    }

    /**
     * Get ciusolHorahasta
     *
     * @return \DateTime
     */
    public function getCiusolHorahasta()
    {
        return $this->ciusolHorahasta;
    }

    /**
     * Set ciu
     *
     * @param \BackBundle\Entity\Ciudad $ciu
     *
     * @return CiudadSolicitud
     */
    public function setCiu(\BackBundle\Entity\Ciudad $ciu = null)
    {
        $this->ciu = $ciu;

        return $this;
    }

    /**
     * Get ciu
     *
     * @return \BackBundle\Entity\Ciudad
     */
    public function getCiu()
    {
        return $this->ciu;
    }

    /**
     * Set estsol
     *
     * @param \BackBundle\Entity\EstadoSolicitud $estsol
     *
     * @return CiudadSolicitud
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
