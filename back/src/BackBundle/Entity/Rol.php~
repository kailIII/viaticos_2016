<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Rol
 *
 * @ORM\Table(name="rol", uniqueConstraints={@ORM\UniqueConstraint(name="rol_pk", columns={"rol_id"})})
 * @ORM\Entity
 */
class Rol
{
    /**
     * @var integer
     *
     * @ORM\Column(name="rol_id", type="smallint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="rol_rol_id_seq", allocationSize=1, initialValue=1)
     */
    private $rolId;

    /**
     * @var string
     *
     * @ORM\Column(name="rol_nombre", type="string", length=30, nullable=true)
     */
    private $rolNombre;

    /**
     * @var string
     *
     * @ORM\Column(name="rol_estado", type="string", length=1, nullable=true)
     */
    private $rolEstado;



    /**
     * Get rolId
     *
     * @return integer
     */
    public function getRolId()
    {
        return $this->rolId;
    }

    /**
     * Set rolNombre
     *
     * @param string $rolNombre
     *
     * @return Rol
     */
    public function setRolNombre($rolNombre)
    {
        $this->rolNombre = $rolNombre;

        return $this;
    }

    /**
     * Get rolNombre
     *
     * @return string
     */
    public function getRolNombre()
    {
        return $this->rolNombre;
    }

    /**
     * Set rolEstado
     *
     * @param string $rolEstado
     *
     * @return Rol
     */
    public function setRolEstado($rolEstado)
    {
        $this->rolEstado = $rolEstado;

        return $this;
    }

    /**
     * Get rolEstado
     *
     * @return string
     */
    public function getRolEstado()
    {
        return $this->rolEstado;
    }
}
