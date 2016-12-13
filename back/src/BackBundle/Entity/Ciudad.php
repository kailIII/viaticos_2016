<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Ciudad
 *
 * @ORM\Table(name="ciudad", uniqueConstraints={@ORM\UniqueConstraint(name="ciudad_pk", columns={"ciu_id"})}, indexes={@ORM\Index(name="pro_ciu_fk", columns={"prov_id"})})
 * @ORM\Entity
 */
class Ciudad
{
    /**
     * @var integer
     *
     * @ORM\Column(name="ciu_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="ciudad_ciu_id_seq", allocationSize=1, initialValue=1)
     */
    private $ciuId;

    /**
     * @var string
     *
     * @ORM\Column(name="ciu_nombre", type="string", length=50, nullable=true)
     */
    private $ciuNombre;

    /**
     * @var string
     *
     * @ORM\Column(name="ciu_canton", type="string", length=50, nullable=true)
     */
    private $ciuCanton;

    /**
     * @var \Provincia
     *
     * @ORM\ManyToOne(targetEntity="Provincia")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="prov_id", referencedColumnName="prov_id")
     * })
     */
    private $prov;



    /**
     * Get ciuId
     *
     * @return integer
     */
    public function getCiuId()
    {
        return $this->ciuId;
    }

    /**
     * Set ciuNombre
     *
     * @param string $ciuNombre
     *
     * @return Ciudad
     */
    public function setCiuNombre($ciuNombre)
    {
        $this->ciuNombre = $ciuNombre;

        return $this;
    }

    /**
     * Get ciuNombre
     *
     * @return string
     */
    public function getCiuNombre()
    {
        return $this->ciuNombre;
    }

    /**
     * Set ciuCanton
     *
     * @param string $ciuCanton
     *
     * @return Ciudad
     */
    public function setCiuCanton($ciuCanton)
    {
        $this->ciuCanton = $ciuCanton;

        return $this;
    }

    /**
     * Get ciuCanton
     *
     * @return string
     */
    public function getCiuCanton()
    {
        return $this->ciuCanton;
    }

    /**
     * Set prov
     *
     * @param \BackBundle\Entity\Provincia $prov
     *
     * @return Ciudad
     */
    public function setProv(\BackBundle\Entity\Provincia $prov = null)
    {
        $this->prov = $prov;

        return $this;
    }

    /**
     * Get prov
     *
     * @return \BackBundle\Entity\Provincia
     */
    public function getProv()
    {
        return $this->prov;
    }
}
