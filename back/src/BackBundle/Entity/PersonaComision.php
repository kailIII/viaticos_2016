<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * PersonaComision
 *
 * @ORM\Table(name="persona_comision", uniqueConstraints={@ORM\UniqueConstraint(name="persona_comision_pk", columns={"percom_id"})}, indexes={@ORM\Index(name="com_percom_fk", columns={"com_id"}), @ORM\Index(name="sol_percom_fk", columns={"sol_id"}), @ORM\Index(name="per_percom_fk", columns={"per_id"})})
 * @ORM\Entity
 */
class PersonaComision
{
    /**
     * @var integer
     *
     * @ORM\Column(name="percom_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="persona_comision_percom_id_seq", allocationSize=1, initialValue=1)
     */
    private $percomId;

    /**
     * @var \Comision
     *
     * @ORM\ManyToOne(targetEntity="Comision")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="com_id", referencedColumnName="com_id")
     * })
     */
    private $com;

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
     * @var \Solicitud
     *
     * @ORM\ManyToOne(targetEntity="Solicitud")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="sol_id", referencedColumnName="sol_id")
     * })
     */
    private $sol;



    /**
     * Get percomId
     *
     * @return integer
     */
    public function getPercomId()
    {
        return $this->percomId;
    }

    /**
     * Set com
     *
     * @param \BackBundle\Entity\Comision $com
     *
     * @return PersonaComision
     */
    public function setCom(\BackBundle\Entity\Comision $com = null)
    {
        $this->com = $com;

        return $this;
    }

    /**
     * Get com
     *
     * @return \BackBundle\Entity\Comision
     */
    public function getCom()
    {
        return $this->com;
    }

    /**
     * Set per
     *
     * @param \BackBundle\Entity\Persona $per
     *
     * @return PersonaComision
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
     * Set sol
     *
     * @param \BackBundle\Entity\Solicitud $sol
     *
     * @return PersonaComision
     */
    public function setSol(\BackBundle\Entity\Solicitud $sol = null)
    {
        $this->sol = $sol;

        return $this;
    }

    /**
     * Get sol
     *
     * @return \BackBundle\Entity\Solicitud
     */
    public function getSol()
    {
        return $this->sol;
    }
}
