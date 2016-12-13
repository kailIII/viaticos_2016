<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Provincia
 *
 * @ORM\Table(name="provincia", uniqueConstraints={@ORM\UniqueConstraint(name="provincia_pk", columns={"prov_id"})})
 * @ORM\Entity
 */
class Provincia
{
    /**
     * @var integer
     *
     * @ORM\Column(name="prov_id", type="smallint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="provincia_prov_id_seq", allocationSize=1, initialValue=1)
     */
    private $provId;

    /**
     * @var string
     *
     * @ORM\Column(name="prov_nombre", type="string", length=100, nullable=true)
     */
    private $provNombre;

    /**
     * @var string
     *
     * @ORM\Column(name="prov_region", type="string", length=10, nullable=true)
     */
    private $provRegion;



    /**
     * Get provId
     *
     * @return integer
     */
    public function getProvId()
    {
        return $this->provId;
    }

    /**
     * Set provNombre
     *
     * @param string $provNombre
     *
     * @return Provincia
     */
    public function setProvNombre($provNombre)
    {
        $this->provNombre = $provNombre;

        return $this;
    }

    /**
     * Get provNombre
     *
     * @return string
     */
    public function getProvNombre()
    {
        return $this->provNombre;
    }

    /**
     * Set provRegion
     *
     * @param string $provRegion
     *
     * @return Provincia
     */
    public function setProvRegion($provRegion)
    {
        $this->provRegion = $provRegion;

        return $this;
    }

    /**
     * Get provRegion
     *
     * @return string
     */
    public function getProvRegion()
    {
        return $this->provRegion;
    }
}
