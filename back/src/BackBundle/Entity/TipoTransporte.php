<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * TipoTransporte
 *
 * @ORM\Table(name="tipo_transporte", uniqueConstraints={@ORM\UniqueConstraint(name="tipo_transporte_pk", columns={"tiptra_id"})})
 * @ORM\Entity
 */
class TipoTransporte
{
    /**
     * @var integer
     *
     * @ORM\Column(name="tiptra_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="tipo_transporte_tiptra_id_seq", allocationSize=1, initialValue=1)
     */
    private $tiptraId;

    /**
     * @var string
     *
     * @ORM\Column(name="tiptra_nombre", type="string", length=40, nullable=true)
     */
    private $tiptraNombre;

    /**
     * @var string
     *
     * @ORM\Column(name="tiptra_tipo", type="string", length=15, nullable=true)
     */
    private $tiptraTipo;

    /**
     * @var string
     *
     * @ORM\Column(name="tiptra_sigla", type="string", length=4, nullable=true)
     */
    private $tiptraSigla;

    /**
     * @var string
     *
     * @ORM\Column(name="tiptra_estado", type="string", length=1, nullable=true)
     */
    private $tiptraEstado;



    /**
     * Get tiptraId
     *
     * @return integer
     */
    public function getTiptraId()
    {
        return $this->tiptraId;
    }

    /**
     * Set tiptraNombre
     *
     * @param string $tiptraNombre
     *
     * @return TipoTransporte
     */
    public function setTiptraNombre($tiptraNombre)
    {
        $this->tiptraNombre = $tiptraNombre;

        return $this;
    }

    /**
     * Get tiptraNombre
     *
     * @return string
     */
    public function getTiptraNombre()
    {
        return $this->tiptraNombre;
    }

    /**
     * Set tiptraTipo
     *
     * @param string $tiptraTipo
     *
     * @return TipoTransporte
     */
    public function setTiptraTipo($tiptraTipo)
    {
        $this->tiptraTipo = $tiptraTipo;

        return $this;
    }

    /**
     * Get tiptraTipo
     *
     * @return string
     */
    public function getTiptraTipo()
    {
        return $this->tiptraTipo;
    }

    /**
     * Set tiptraSigla
     *
     * @param string $tiptraSigla
     *
     * @return TipoTransporte
     */
    public function setTiptraSigla($tiptraSigla)
    {
        $this->tiptraSigla = $tiptraSigla;

        return $this;
    }

    /**
     * Get tiptraSigla
     *
     * @return string
     */
    public function getTiptraSigla()
    {
        return $this->tiptraSigla;
    }

    /**
     * Set tiptraEstado
     *
     * @param string $tiptraEstado
     *
     * @return TipoTransporte
     */

    public function setTiptraEstado($tiptraEstado)
    {
        $this->tiptraEstado = $tiptraEstado;

        return $this;
    }

    /**
     * Get tiptraEstado
     *
     * @return string
     */
    public function getTiptraEstado()
    {
        return $this->tiptraEstado;
    }
}
