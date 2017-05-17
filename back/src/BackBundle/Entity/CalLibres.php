<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Cargo
 *
 * @ORM\Entity
 */
class CalLibres
{
    /**
     * @var integer
     *
     * @ORM\Column(name="lib_id", type="smallint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="callib_carlib_id_seq", allocationSize=1, initialValue=1)
     */
    private $libId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="lib_fecha", type="date", nullable=true)
     */
    private $libFecha;

    /**
     * @var integer
     *
     * @ORM\Column(name="lib_anio", type="smallint", nullable=true)
     */
    private $libAnio;

    /**
     * @var integer
     *
     * @ORM\Column(name="lib_mes", type="smallint", nullable=true)
     */
    private $libMes;

    /**
     * Get libId
     *
     * @return integer
     */
    public function getLibId()
    {
        return $this->libId;
    }

    /**
     * Set libFecha
     *
     * @param string $libFecha
     *
     * @return CalLibres
     */
    public function setLibFecha($libFecha)
    {
        $this->libFecha = $libFecha;

        return $this;
    }

    /**
     * Get libFecha
     *
     * @return string
     */
    public function getLibFecha()
    {
        return $this->libFecha;
    }

    /**
     * Set libAnio
     *
     * @param integer $libAnio
     *
     * @return CalLibres
     */
    public function setLibAnio($libAnio)
    {
        $this->libAnio = $libAnio;

        return $this;
    }

    /**
     * Get libAnio
     *
     * @return integer
     */
    public function getLibAnio()
    {
        return $this->libAnio;
    }

    /**
     * Set libMes
     *
     * @param integer $libMes
     *
     * @return CalLibres
     */
    public function setLibMes($libMes)
    {
        $this->libMes = $libMes;

        return $this;
    }

    /**
     * Get libMes
     *
     * @return integer
     */
    public function getLibMes()
    {
        return $this->libMes;
    } 
}