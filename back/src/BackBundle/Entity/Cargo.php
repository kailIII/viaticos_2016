<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Cargo
 *
 * @ORM\Table(name="cargo", uniqueConstraints={@ORM\UniqueConstraint(name="cargo_pk", columns={"car_id"})}, indexes={@ORM\Index(name="dep_car_fk", columns={"dep_id"})})
 * @ORM\Entity
 */
class Cargo
{
    /**
     * @var integer
     *
     * @ORM\Column(name="car_id", type="smallint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="cargo_car_id_seq", allocationSize=1, initialValue=1)
     */
    private $carId;

    /**
     * @var string
     *
     * @ORM\Column(name="car_nombre", type="string", length=100, nullable=true)
     */
    private $carNombre;

    /**
     * @var integer
     *
     * @ORM\Column(name="car_categorizacion", type="smallint", nullable=true)
     */
    private $carCategorizacion;

    /**
     * @var integer
     *
     * @ORM\Column(name="car_jefe", type="smallint", nullable=true)
     */
    private $carJefe;

    /**
     * @var \Departamento
     *
     * @ORM\ManyToOne(targetEntity="Departamento")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="dep_id", referencedColumnName="dep_id")
     * })
     */
    private $dep;

    /**
     * @var \Rol
     *
     * @ORM\ManyToOne(targetEntity="Rol")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="rol_id", referencedColumnName="rol_id")
     * })
     */
    private $rol;


    /**
     * Get carId
     *
     * @return integer
     */
    public function getCarId()
    {
        return $this->carId;
    }

    /**
     * Set carNombre
     *
     * @param string $carNombre
     *
     * @return Cargo
     */
    public function setCarNombre($carNombre)
    {
        $this->carNombre = $carNombre;

        return $this;
    }

    /**
     * Get carNombre
     *
     * @return string
     */
    public function getCarNombre()
    {
        return $this->carNombre;
    }

    /**
     * Set carCategorizacion
     *
     * @param integer $carCategorizacion
     *
     * @return Cargo
     */
    public function setCarCategorizacion($carCategorizacion)
    {
        $this->carCategorizacion = $carCategorizacion;

        return $this;
    }

    /**
     * Get carCategorizacion
     *
     * @return integer
     */
    public function getCarCategorizacion()
    {
        return $this->carCategorizacion;
    }

    /**
     * Set carJefe
     *
     * @param integer $carJefe
     *
     * @return Cargo
     */
    public function setCarJefe($carJefe)
    {
        $this->carJefe = $carJefe;

        return $this;
    }

    /**
     * Get carJefe
     *
     * @return integer
     */
    public function getCarJefe()
    {
        return $this->carJefe;
    }

    /**
     * Set dep
     *
     * @param \BackBundle\Entity\Departamento $dep
     *
     * @return Cargo
     */
    public function setDep(\BackBundle\Entity\Departamento $dep = null)
    {
        $this->dep = $dep;

        return $this;
    }

    /**
     * Get dep
     *
     * @return \BackBundle\Entity\Departamento
     */
    public function getDep()
    {
        return $this->dep;
    }

    /**
     * Set rol
     *
     * @param \BackBundle\Entity\Departamento $rol
     *
     * @return Cargo
     */
    public function setRol(\BackBundle\Entity\Rol $rol = null)
    {
        $this->rol = $rol;

        return $this;
    }

    /**
     * Get rol
     *
     * @return \BackBundle\Entity\Rol
     */
    public function getRol()
    {
        return $this->rol;
    }
}
