<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Persona
 *
 * @ORM\Table(name="persona", uniqueConstraints={@ORM\UniqueConstraint(name="persona_pk", columns={"per_id"})})
 * @ORM\Entity
 */
class Persona
{
    /**
     * @var integer
     *
     * @ORM\Column(name="per_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="persona_per_id_seq", allocationSize=1, initialValue=1)
     */
    private $perId;

    /**
     * @var string
     *
     * @ORM\Column(name="per_nombre", type="string", length=50, nullable=true)
     */
    private $perNombre;

    /**
     * @var string
     *
     * @ORM\Column(name="per_apellido", type="string", length=50, nullable=true)
     */
    private $perApellido;

    /**
     * @var string
     *
     * @ORM\Column(name="per_identificacion", type="string", length=13, nullable=true)
     */
    private $perIdentificacion;

    /**
     * @var string
     *
     * @ORM\Column(name="per_estado", type="string", length=1, nullable=true)
     */
    private $perEstado;

    /**
     * @var string
     *
     * @ORM\Column(name="per_correoelectronico", type="string", length=70, nullable=true)
     */
    private $perCorreoelectronico;

    /**
     * @var string
     *
     * @ORM\Column(name="per_iniciales", type="string", length=4, nullable=true)
     */
    private $perIniciales;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="per_creado", type="date", nullable=true)
     */
    private $perCreado;

    /**
     * @var string
     *
     * @ORM\Column(name="per_nombrecompleto", type="string", length=101, nullable=true)
     */
    private $perNombrecompleto;

    /**
     * Get perId
     *
     * @return integer
     */
    public function getPerId()
    {
        return $this->perId;
    }

    /**
     * Set perNombre
     *
     * @param string $perNombre
     *
     * @return Persona
     */
    public function setPerNombre($perNombre)
    {
        $this->perNombre = $perNombre;

        return $this;
    }

    /**
     * Get perNombre
     *
     * @return string
     */
    public function getPerNombre()
    {
        return $this->perNombre;
    }

    /**
     * Set perApellido
     *
     * @param string $perApellido
     *
     * @return Persona
     */
    public function setPerApellido($perApellido)
    {
        $this->perApellido = $perApellido;

        return $this;
    }

    /**
     * Get perApellido
     *
     * @return string
     */
    public function getPerApellido()
    {
        return $this->perApellido;
    }

    /**
     * Set perIdentificacion
     *
     * @param string $perIdentificacion
     *
     * @return Persona
     */
    public function setPerIdentificacion($perIdentificacion)
    {
        $this->perIdentificacion = $perIdentificacion;

        return $this;
    }

    /**
     * Get perIdentificacion
     *
     * @return string
     */
    public function getPerIdentificacion()
    {
        return $this->perIdentificacion;
    }

    /**
     * Set perEstado
     *
     * @param string $perEstado
     *
     * @return Persona
     */
    public function setPerEstado($perEstado)
    {
        $this->perEstado = $perEstado;

        return $this;
    }

    /**
     * Get perEstado
     *
     * @return string
     */
    public function getPerEstado()
    {
        return $this->perEstado;
    }

    /**
     * Set perCorreoelectronico
     *
     * @param string $perCorreoelectronico
     *
     * @return Persona
     */
    public function setPerCorreoelectronico($perCorreoelectronico)
    {
        $this->perCorreoelectronico = $perCorreoelectronico;

        return $this;
    }

    /**
     * Get perCorreoelectronico
     *
     * @return string
     */
    public function getPerCorreoelectronico()
    {
        return $this->perCorreoelectronico;
    }

    /**
     * Set perIniciales
     *
     * @param string $perIniciales
     *
     * @return Persona
     */
    public function setPerIniciales($perIniciales)
    {
        $this->perIniciales = $perIniciales;

        return $this;
    }

    /**
     * Get perIniciales
     *
     * @return string
     */
    public function getPerIniciales()
    {
        return $this->perIniciales;
    }

    /**
     * Set perCreado
     *
     * @param \DateTime $perCreado
     *
     * @return Persona
     */
    public function setPerCreado($perCreado)
    {
        $this->perCreado = $perCreado;

        return $this;
    }

    /**
     * Get perCreado
     *
     * @return \DateTime
     */
    public function getPerCreado()
    {
        return $this->perCreado;
    }

    /**
     * Set perNombrecompleto
     *
     * @param string $perNombrecompleto
     *
     * @return Persona
     */
    public function setPerNombrecompleto($perNombrecompleto)
    {
        $this->perNombrecompleto = $perNombrecompleto;

        return $this;
    }

    /**
     * Get perNombrecompleto
     *
     * @return string
     */
    public function getPerNombrecompleto()
    {
        return $this->perNombrecompleto;
    }
}
