<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Anexo
 *
 * @ORM\Table(name="anexo", uniqueConstraints={@ORM\UniqueConstraint(name="anexo_pk", columns={"solanex_id"})}, indexes={@ORM\Index(name="ane_sol_fk", columns={"estsol_id"})})
 * @ORM\Entity
 */
class Anexo
{
    /**
     * @var integer
     *
     * @ORM\Column(name="solanex_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="anexo_solanex_id_seq", allocationSize=1, initialValue=1)
     */
    private $solanexId;

    /**
     * @var string
     *
     * @ORM\Column(name="solanex_titulo", type="string", length=30, nullable=true)
     */
    private $solanexTitulo;

    /**
     * @var string
     *
     * @ORM\Column(name="solanex_descripcion", type="string", length=100, nullable=true)
     */
    private $solanexDescripcion;

    /**
     * @var string
     *
     * @ORM\Column(name="solanex_ruta", type="text", nullable=true)
     */
    private $solanexRuta;

    /**
     * @var \EstadoSolicitud
     *
     * @ORM\ManyToOne(targetEntity="EstadoSolicitud")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="estsol_id", referencedColumnName="estsol_id")
     * })
     */
    private $estsol;



    /**
     * Get solanexId
     *
     * @return integer
     */
    public function getSolanexId()
    {
        return $this->solanexId;
    }

    /**
     * Set solanexTitulo
     *
     * @param string $solanexTitulo
     *
     * @return Anexo
     */
    public function setSolanexTitulo($solanexTitulo)
    {
        $this->solanexTitulo = $solanexTitulo;

        return $this;
    }

    /**
     * Get solanexTitulo
     *
     * @return string
     */
    public function getSolanexTitulo()
    {
        return $this->solanexTitulo;
    }

    /**
     * Set solanexDescripcion
     *
     * @param string $solanexDescripcion
     *
     * @return Anexo
     */
    public function setSolanexDescripcion($solanexDescripcion)
    {
        $this->solanexDescripcion = $solanexDescripcion;

        return $this;
    }

    /**
     * Get solanexDescripcion
     *
     * @return string
     */
    public function getSolanexDescripcion()
    {
        return $this->solanexDescripcion;
    }

    /**
     * Set solanexRuta
     *
     * @param string $solanexRuta
     *
     * @return Anexo
     */
    public function setSolanexRuta($solanexRuta)
    {
        $this->solanexRuta = $solanexRuta;

        return $this;
    }

    /**
     * Get solanexRuta
     *
     * @return string
     */
    public function getSolanexRuta()
    {
        return $this->solanexRuta;
    }

    /**
     * Set estsol
     *
     * @param \BackBundle\Entity\EstadoSolicitud $estsol
     *
     * @return Anexo
     */
    public function setEstsol(\BackBundle\Entity\EstadoSolicitud $estsol = null)
    {
        $this->estsol = $estsol;

        return $this;
    }

    /**
     * Get estsol
     *
     * @return \BackBundle\Entity\EstadoSolicitud
     */
    public function getEstsol()
    {
        return $this->estsol;
    }
}
