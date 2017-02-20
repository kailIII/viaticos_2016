<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Gasto
 *
 * @ORM\Table(name="gasto", uniqueConstraints={@ORM\UniqueConstraint(name="gasto_pk", columns={"gas_id"})}, indexes={@ORM\Index(name="ciu_gas_fk", columns={"ciuinf_id"}), @ORM\Index(name="estinf_gas_fk", columns={"estinf_id"})})
 * @ORM\Entity
 */
class Gasto
{
    /**
     * @var integer
     *
     * @ORM\Column(name="gas_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="gasto_gas_id_seq", allocationSize=1, initialValue=1)
     */
    private $gasId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="gas_fecha", type="date", nullable=true)
     */
    private $gasFecha;

    /**
     * @var float
     *
     * @ORM\Column(name="gas_valor", type="float", precision=10, scale=0, nullable=true)
     */
    private $gasValor;

    /**
     * @var string
     *
     * @ORM\Column(name="gas_local", type="string", length=150, nullable=true)
     */
    private $gasLocal;

    /**
     * @var string
     *
     * @ORM\Column(name="gas_tipodocumento", type="string", length=3, nullable=true)
     */
    private $gasTipodocumento;

    /**
     * @var string
     *
     * @ORM\Column(name="gas_numerodocumento", type="string", length=20, nullable=true)
     */
    private $gasNumerodocumento;

    /**
     * @var string
     *
     * @ORM\Column(name="gas_concepto", type="string", length=200, nullable=true)
     */
    private $gasConcepto;

    /**
     * @var \CiudadInforme
     *
     * @ORM\ManyToOne(targetEntity="CiudadInforme")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="ciuinf_id", referencedColumnName="ciuinf_id")
     * })
     */
    private $ciuinf;

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
     * Get gasId
     *
     * @return integer
     */
    public function getGasId()
    {
        return $this->gasId;
    }

    /**
     * Set gasFecha
     *
     * @param \DateTime $gasFecha
     *
     * @return Gasto
     */
    public function setGasFecha($gasFecha)
    {
        $this->gasFecha = $gasFecha;

        return $this;
    }

    /**
     * Get gasFecha
     *
     * @return \DateTime
     */
    public function getGasFecha()
    {
        return $this->gasFecha;
    }

    /**
     * Set gasValor
     *
     * @param float $gasValor
     *
     * @return Gasto
     */
    public function setGasValor($gasValor)
    {
        $this->gasValor = $gasValor;

        return $this;
    }

    /**
     * Get gasValor
     *
     * @return float
     */
    public function getGasValor()
    {
        return $this->gasValor;
    }

    /**
     * Set gasLocal
     *
     * @param string $gasLocal
     *
     * @return Gasto
     */
    public function setGasLocal($gasLocal)
    {
        $this->gasLocal = $gasLocal;

        return $this;
    }

    /**
     * Get gasLocal
     *
     * @return string
     */
    public function getGasLocal()
    {
        return $this->gasLocal;
    }

    /**
     * Set gasTipodocumento
     *
     * @param string $gasTipodocumento
     *
     * @return Gasto
     */
    public function setGasTipodocumento($gasTipodocumento)
    {
        $this->gasTipodocumento = $gasTipodocumento;

        return $this;
    }

    /**
     * Get gasTipodocumento
     *
     * @return string
     */
    public function getGasTipodocumento()
    {
        return $this->gasTipodocumento;
    }

    /**
     * Set gasNumerodocumento
     *
     * @param string $gasNumerodocumento
     *
     * @return Gasto
     */
    public function setGasNumerodocumento($gasNumerodocumento)
    {
        $this->gasNumerodocumento = $gasNumerodocumento;

        return $this;
    }

    /**
     * Get gasNumerodocumento
     *
     * @return string
     */
    public function getGasNumerodocumento()
    {
        return $this->gasNumerodocumento;
    }

    /**
     * Set gasConcepto
     *
     * @param string $gasConcepto
     *
     * @return Gasto
     */
    public function setGasConcepto($gasConcepto)
    {
        $this->gasConcepto = $gasConcepto;

        return $this;
    }

    /**
     * Get gasConcepto
     *
     * @return string
     */
    public function getGasConcepto()
    {
        return $this->gasConcepto;
    }

    /**
     * Set ciuinf
     *
     * @param \BackBundle\Entity\CiudadSolicitud $ciuinf
     *
     * @return Gasto
     */
    public function setCiuinf(\BackBundle\Entity\CiudadInforme $ciuinf = null)
    {
        $this->ciuinf = $ciuinf;

        return $this;
    }

    /**
     * Get ciuinf
     *
     * @return \BackBundle\Entity\CiudadInforme
     */
    public function getCiuinf()
    {
        return $this->ciuinf;
    }

    /**
     * Set estinf
     *
     * @param \BackBundle\Entity\EstadoInforme $inf
     *
     * @return Gasto
     */
    public function setEstInf(\BackBundle\Entity\IEstadonforme $estinf = null)
    {
        $this->estinf = $estinf;

        return $this;
    }

    /**
     * Get estinf
     *
     * @return \BackBundle\Entity\EstadoInforme
     */
    public function getEstInf()
    {
        return $this->estinf;
    }
}
