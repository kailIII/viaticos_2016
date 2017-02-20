<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * AnexoInforme
 *
 * @ORM\Table(name="anexo_informe", uniqueConstraints={@ORM\UniqueConstraint(name="anexo_informe_pk", columns={"infanex_id"})}, indexes={@ORM\Index(name="inf_aneinf_fk", columns={"estinf_id"})})
 * @ORM\Entity
 */
class AnexoInforme
{
    /**
     * @var integer
     *
     * @ORM\Column(name="infanex_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="anexo_informe_infanex_id_seq", allocationSize=1, initialValue=1)
     */
    private $infanexId;

    /**
     * @var string
     *
     * @ORM\Column(name="infanex_titulo", type="string", length=30, nullable=true)
     */
    private $infanexTitulo;

    /**
     * @var string
     *
     * @ORM\Column(name="infanex_descripcion", type="string", length=100, nullable=true)
     */
    private $infanexDescripcion;

    /**
     * @var string
     *
     * @ORM\Column(name="infanex_ruta", type="text", nullable=true)
     */
    private $infanexRuta;

    /**
     * @var \EstadoInforme
     *
     * @ORM\ManyToOne(targetEntity="EstadoInforme")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="estinf_id", referencedColumnName="estinf_id")
     * })
     */
    private $estinf;



    /**
     * Get infanexId
     *
     * @return integer
     */
    public function getInfanexId()
    {
        return $this->infanexId;
    }

    /**
     * Set infanexTitulo
     *
     * @param string $infanexTitulo
     *
     * @return AnexoInforme
     */
    public function setInfanexTitulo($infanexTitulo)
    {
        $this->infanexTitulo = $infanexTitulo;

        return $this;
    }

    /**
     * Get infanexTitulo
     *
     * @return string
     */
    public function getInfanexTitulo()
    {
        return $this->infanexTitulo;
    }

    /**
     * Set infanexDescripcion
     *
     * @param string $infanexDescripcion
     *
     * @return AnexoInforme
     */
    public function setInfanexDescripcion($infanexDescripcion)
    {
        $this->infanexDescripcion = $infanexDescripcion;

        return $this;
    }

    /**
     * Get infanexDescripcion
     *
     * @return string
     */
    public function getInfanexDescripcion()
    {
        return $this->infanexDescripcion;
    }

    /**
     * Set infanexRuta
     *
     * @param string $infanexRuta
     *
     * @return AnexoInforme
     */
    public function setInfanexRuta($infanexRuta)
    {
        $this->infanexRuta = $infanexRuta;

        return $this;
    }

    /**
     * Get infanexRuta
     *
     * @return string
     */
    public function getInfanexRuta()
    {
        return $this->infanexRuta;
    }

    /**
     * Set estinf
     *
     * @param \BackBundle\Entity\EstadoInforme $estinf
     *
     * @return AnexoInforme
     */
    public function setEstInf(\BackBundle\Entity\EstadoInforme $estinf = null)
    {
        $this->estinf = $estinf;

        return $this;
    }

    /**
     * Get estinf
     *
     * @return \BackBundle\Entity\EstadoInforme
     */
    public function getEstInf()
    {
        return $this->estinf;
    }
}
