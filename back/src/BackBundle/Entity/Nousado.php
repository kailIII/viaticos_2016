<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Nousado
 *
 * @ORM\Table(name="nousado", uniqueConstraints={@ORM\UniqueConstraint(name="nousado_pk", columns={"nousa_id"})}, indexes={@ORM\Index(name="trainf_nousa_fk", columns={"trainf_id"})})
 * @ORM\Entity
 */
class Nousado
{
    /**
     * @var integer
     *
     * @ORM\Column(name="nousa_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="nousado_nousa_id_seq", allocationSize=1, initialValue=1)
     */
    private $nousaId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="nousa_fechajustificativo", type="date", nullable=true)
     */
    private $nousaFechajustificativo;

    /**
     * @var string
     *
     * @ORM\Column(name="nousa_justificativo", type="text", nullable=true)
     */
    private $nousaJustificativo;

    /**
     * @var \TransporteInforme
     *
     * @ORM\ManyToOne(targetEntity="TransporteInforme")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="trainf_id", referencedColumnName="trainf_id")
     * })
     */
    private $trainf;



    /**
     * Get nousaId
     *
     * @return integer
     */
    public function getNousaId()
    {
        return $this->nousaId;
    }

    /**
     * Set nousaFechajustificativo
     *
     * @param \DateTime $nousaFechajustificativo
     *
     * @return Nousado
     */
    public function setNousaFechajustificativo($nousaFechajustificativo)
    {
        $this->nousaFechajustificativo = $nousaFechajustificativo;

        return $this;
    }

    /**
     * Get nousaFechajustificativo
     *
     * @return \DateTime
     */
    public function getNousaFechajustificativo()
    {
        return $this->nousaFechajustificativo;
    }

    /**
     * Set nousaJustificativo
     *
     * @param string $nousaJustificativo
     *
     * @return Nousado
     */
    public function setNousaJustificativo($nousaJustificativo)
    {
        $this->nousaJustificativo = $nousaJustificativo;

        return $this;
    }

    /**
     * Get nousaJustificativo
     *
     * @return string
     */
    public function getNousaJustificativo()
    {
        return $this->nousaJustificativo;
    }

    /**
     * Set trainf
     *
     * @param \BackBundle\Entity\TransporteInforme $trainf
     *
     * @return Nousado
     */
    public function setTrainf(\BackBundle\Entity\TransporteInforme $trainf = null)
    {
        $this->trainf = $trainf;

        return $this;
    }

    /**
     * Get trainf
     *
     * @return \BackBundle\Entity\TransporteInforme
     */
    public function getTrainf()
    {
        return $this->trainf;
    }
}
