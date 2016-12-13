<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Departamento
 *
 * @ORM\Table(name="departamento", uniqueConstraints={@ORM\UniqueConstraint(name="departamento_pk", columns={"dep_id"})}, indexes={@ORM\Index(name="ins_dep_fk", columns={"ins_id"})})
 * @ORM\Entity
 */
class Departamento
{
    /**
     * @var integer
     *
     * @ORM\Column(name="dep_id", type="smallint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="departamento_dep_id_seq", allocationSize=1, initialValue=1)
     */
    private $depId;

    /**
     * @var string
     *
     * @ORM\Column(name="dep_nombre", type="string", length=200, nullable=true)
     */
    private $depNombre;

    /**
     * @var string
     *
     * @ORM\Column(name="dep_siglas", type="string", length=8, nullable=true)
     */
    private $depSiglas;

    /**
     * @var integer
     *
     * @ORM\Column(name="dep_padre", type="smallint", nullable=true)
     */
    private $depPadre;

    /**
     * @var string
     *
     * @ORM\Column(name="dep_estado", type="string", length=1, nullable=true)
     */
    private $depEstado;

    /**
     * @var \Institucion
     *
     * @ORM\ManyToOne(targetEntity="Institucion")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="ins_id", referencedColumnName="ins_id")
     * })
     */
    private $ins;



    /**
     * Get depId
     *
     * @return integer
     */
    public function getDepId()
    {
        return $this->depId;
    }

    /**
     * Set depNombre
     *
     * @param string $depNombre
     *
     * @return Departamento
     */
    public function setDepNombre($depNombre)
    {
        $this->depNombre = $depNombre;

        return $this;
    }

    /**
     * Get depNombre
     *
     * @return string
     */
    public function getDepNombre()
    {
        return $this->depNombre;
    }

    /**
     * Set depSiglas
     *
     * @param string $depSiglas
     *
     * @return Departamento
     */
    public function setDepSiglas($depSiglas)
    {
        $this->depSiglas = $depSiglas;

        return $this;
    }

    /**
     * Get depSiglas
     *
     * @return string
     */
    public function getDepSiglas()
    {
        return $this->depSiglas;
    }

    /**
     * Set depPadre
     *
     * @param integer $depPadre
     *
     * @return Departamento
     */
    public function setDepPadre($depPadre)
    {
        $this->depPadre = $depPadre;

        return $this;
    }

    /**
     * Get depPadre
     *
     * @return integer
     */
    public function getDepPadre()
    {
        return $this->depPadre;
    }

    /**
     * Set depEstado
     *
     * @param string $depEstado
     *
     * @return Departamento
     */
    public function setDepEstado($depEstado)
    {
        $this->depEstado = $depEstado;

        return $this;
    }

    /**
     * Get depEstado
     *
     * @return string
     */
    public function getDepEstado()
    {
        return $this->depEstado;
    }

    /**
     * Set ins
     *
     * @param \BackBundle\Entity\Institucion $ins
     *
     * @return Departamento
     */
    public function setIns(\BackBundle\Entity\Institucion $ins = null)
    {
        $this->ins = $ins;

        return $this;
    }

    /**
     * Get ins
     *
     * @return \BackBundle\Entity\Institucion
     */
    public function getIns()
    {
        return $this->ins;
    }
}
