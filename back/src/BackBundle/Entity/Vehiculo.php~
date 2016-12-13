<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Vehiculo
 *
 * @ORM\Table(name="vehiculo", uniqueConstraints={@ORM\UniqueConstraint(name="vehiculo_pk", columns={"veh_id"})})
 * @ORM\Entity
 */
class Vehiculo
{
    /**
     * @var integer
     *
     * @ORM\Column(name="veh_id", type="smallint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="vehiculo_veh_id_seq", allocationSize=1, initialValue=1)
     */
    private $vehId;

    /**
     * @var string
     *
     * @ORM\Column(name="veh_modelo", type="string", length=30, nullable=true)
     */
    private $vehModelo;

    /**
     * @var string
     *
     * @ORM\Column(name="veh_marca", type="string", length=30, nullable=true)
     */
    private $vehMarca;

    /**
     * @var string
     *
     * @ORM\Column(name="veh_placa", type="string", length=11, nullable=true)
     */
    private $vehPlaca;

    /**
     * @var string
     *
     * @ORM\Column(name="veh_estado", type="string", length=1, nullable=true)
     */
    private $vehEstado;



    /**
     * Get vehId
     *
     * @return integer
     */
    public function getVehId()
    {
        return $this->vehId;
    }

    /**
     * Set vehModelo
     *
     * @param string $vehModelo
     *
     * @return Vehiculo
     */
    public function setVehModelo($vehModelo)
    {
        $this->vehModelo = $vehModelo;

        return $this;
    }

    /**
     * Get vehModelo
     *
     * @return string
     */
    public function getVehModelo()
    {
        return $this->vehModelo;
    }

    /**
     * Set vehMarca
     *
     * @param string $vehMarca
     *
     * @return Vehiculo
     */
    public function setVehMarca($vehMarca)
    {
        $this->vehMarca = $vehMarca;

        return $this;
    }

    /**
     * Get vehMarca
     *
     * @return string
     */
    public function getVehMarca()
    {
        return $this->vehMarca;
    }

    /**
     * Set vehPlaca
     *
     * @param string $vehPlaca
     *
     * @return Vehiculo
     */
    public function setVehPlaca($vehPlaca)
    {
        $this->vehPlaca = $vehPlaca;

        return $this;
    }

    /**
     * Get vehPlaca
     *
     * @return string
     */
    public function getVehPlaca()
    {
        return $this->vehPlaca;
    }

    /**
     * Set vehEstado
     *
     * @param string $vehEstado
     *
     * @return Vehiculo
     */
    public function setVehEstado($vehEstado)
    {
        $this->vehEstado = $vehEstado;

        return $this;
    }

    /**
     * Get vehEstado
     *
     * @return string
     */
    public function getVehEstado()
    {
        return $this->vehEstado;
    }
}
