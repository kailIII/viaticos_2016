<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * CargoPersona
 *
 * @ORM\Table(name="cargo_persona", uniqueConstraints={@ORM\UniqueConstraint(name="cargo_persona_pk", columns={"carper_id"})}, indexes={@ORM\Index(name="per_carper_fk", columns={"per_id"}), @ORM\Index(name="carper_car_fk", columns={"car_id"})})
 * @ORM\Entity
 */
class CargoPersona
{
    /**
     * @var integer
     *
     * @ORM\Column(name="carper_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="cargo_persona_carper_id_seq", allocationSize=1, initialValue=1)
     */
    private $carperId;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="carper_desde", type="date", nullable=true)
     */
    private $carperDesde;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="carper_hasta", type="date", nullable=true)
     */
    private $carperHasta;

    /**
     * @var string
     *
     * @ORM\Column(name="carper_tipo", type="string", length=1, nullable=true)
     */
    private $carperTipo;

    /**
     * @var string
     *
     * @ORM\Column(name="carper_estado", type="string", length=1, nullable=true)
     */
    private $carperEstado;

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
     * @var \Cargo
     *
     * @ORM\ManyToOne(targetEntity="Cargo")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="car_id", referencedColumnName="car_id")
     * })
     */
    private $car;



    /**
     * Get carperId
     *
     * @return integer
     */
    public function getCarperId()
    {
        return $this->carperId;
    }

    /**
     * Set carperDesde
     *
     * @param \DateTime $carperDesde
     *
     * @return CargoPersona
     */
    public function setCarperDesde($carperDesde)
    {
        $this->carperDesde = $carperDesde;

        return $this;
    }

    /**
     * Get carperDesde
     *
     * @return \DateTime
     */
    public function getCarperDesde()
    {
        return $this->carperDesde;
    }

    /**
     * Set carperHasta
     *
     * @param \DateTime $carperHasta
     *
     * @return CargoPersona
     */
    public function setCarperHasta($carperHasta)
    {
        $this->carperHasta = $carperHasta;

        return $this;
    }

    /**
     * Get carperHasta
     *
     * @return \DateTime
     */
    public function getCarperHasta()
    {
        return $this->carperHasta;
    }

    /**
     * Set carperTipo
     *
     * @param string $carperTipo
     *
     * @return CargoPersona
     */
    public function setCarperTipo($carperTipo)
    {
        $this->carperTipo = $carperTipo;

        return $this;
    }

    /**
     * Get carperTipo
     *
     * @return string
     */
    public function getCarperTipo()
    {
        return $this->carperTipo;
    }

    /**
     * Set carperEstado
     *
     * @param string $carperEstado
     *
     * @return CargoPersona
     */
    public function setCarperEstado($carperEstado)
    {
        $this->carperEstado = $carperEstado;

        return $this;
    }

    /**
     * Get carperEstado
     *
     * @return string
     */
    public function getCarperEstado()
    {
        return $this->carperEstado;
    }

    /**
     * Set car
     *
     * @param \BackBundle\Entity\Cargo $car
     *
     * @return CargoPersona
     */
    public function setCar(\BackBundle\Entity\Cargo $car = null)
    {
        $this->car = $car;

        return $this;
    }

    /**
     * Get car
     *
     * @return \BackBundle\Entity\Cargo
     */
    public function getCar()
    {
        return $this->car;
    }

    /**
     * Set per
     *
     * @param \BackBundle\Entity\Persona $per
     *
     * @return CargoPersona
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
