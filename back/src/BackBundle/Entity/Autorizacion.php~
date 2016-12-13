<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Autorizacion
 *
 * @ORM\Table(name="autorizacion", uniqueConstraints={@ORM\UniqueConstraint(name="autorizacion_pk", columns={"aut_id"})}, indexes={@ORM\Index(name="per_aut_fk", columns={"per_id"})})
 * @ORM\Entity
 */
class Autorizacion
{
    /**
     * @var integer
     *
     * @ORM\Column(name="aut_id", type="smallint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="autorizacion_aut_id_seq", allocationSize=1, initialValue=1)
     */
    private $autId;

    /**
     * @var string
     *
     * @ORM\Column(name="aut_clave", type="string", length=20, nullable=true)
     */
    private $autClave;

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
     * Get autId
     *
     * @return integer
     */
    public function getAutId()
    {
        return $this->autId;
    }

    /**
     * Set autClave
     *
     * @param string $autClave
     *
     * @return Autorizacion
     */
    public function setAutClave($autClave)
    {
        $this->autClave = $autClave;

        return $this;
    }

    /**
     * Get autClave
     *
     * @return string
     */
    public function getAutClave()
    {
        return $this->autClave;
    }

    /**
     * Set per
     *
     * @param \BackBundle\Entity\Persona $per
     *
     * @return Autorizacion
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
}
