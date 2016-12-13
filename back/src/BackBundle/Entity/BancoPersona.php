<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * BancoPersona
 *
 * @ORM\Table(name="banco_persona", uniqueConstraints={@ORM\UniqueConstraint(name="banco_persona_pk", columns={"banper_id"})}, indexes={@ORM\Index(name="banper_per_fk", columns={"per_id"}), @ORM\Index(name="ban_banper_fk", columns={"ban_id"})})
 * @ORM\Entity
 */
class BancoPersona
{
    /**
     * @var integer
     *
     * @ORM\Column(name="banper_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="banco_persona_banper_id_seq", allocationSize=1, initialValue=1)
     */
    private $banperId;

    /**
     * @var string
     *
     * @ORM\Column(name="banper_tipocuenta", type="string", length=1, nullable=true)
     */
    private $banperTipocuenta;

    /**
     * @var string
     *
     * @ORM\Column(name="banper_numerocuenta", type="string", length=30, nullable=true)
     */
    private $banperNumerocuenta;

    /**
     * @var string
     *
     * @ORM\Column(name="banper_estado", type="string", length=1, nullable=true)
     */
    private $banperEstado;

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
     * @var \Banco
     *
     * @ORM\ManyToOne(targetEntity="Banco")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="ban_id", referencedColumnName="ban_id")
     * })
     */
    private $ban;



    /**
     * Get banperId
     *
     * @return integer
     */
    public function getBanperId()
    {
        return $this->banperId;
    }

    /**
     * Set banperTipocuenta
     *
     * @param string $banperTipocuenta
     *
     * @return BancoPersona
     */
    public function setBanperTipocuenta($banperTipocuenta)
    {
        $this->banperTipocuenta = $banperTipocuenta;

        return $this;
    }

    /**
     * Get banperTipocuenta
     *
     * @return string
     */
    public function getBanperTipocuenta()
    {
        return $this->banperTipocuenta;
    }

    /**
     * Set banperNumerocuenta
     *
     * @param string $banperNumerocuenta
     *
     * @return BancoPersona
     */
    public function setBanperNumerocuenta($banperNumerocuenta)
    {
        $this->banperNumerocuenta = $banperNumerocuenta;

        return $this;
    }

    /**
     * Get banperNumerocuenta
     *
     * @return string
     */
    public function getBanperNumerocuenta()
    {
        return $this->banperNumerocuenta;
    }

    /**
     * Set banperEstado
     *
     * @param string $banperEstado
     *
     * @return BancoPersona
     */
    public function setBanperEstado($banperEstado)
    {
        $this->banperEstado = $banperEstado;

        return $this;
    }

    /**
     * Get banperEstado
     *
     * @return string
     */
    public function getBanperEstado()
    {
        return $this->banperEstado;
    }

    /**
     * Set per
     *
     * @param \BackBundle\Entity\Persona $per
     *
     * @return BancoPersona
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
     * Set ban
     *
     * @param \BackBundle\Entity\Banco $ban
     *
     * @return BancoPersona
     */
    public function setBan(\BackBundle\Entity\Banco $ban = null)
    {
        $this->ban = $ban;

        return $this;
    }

    /**
     * Get ban
     *
     * @return \BackBundle\Entity\Banco
     */
    public function getBan()
    {
        return $this->ban;
    }
}
