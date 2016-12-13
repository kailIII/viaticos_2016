<?php

namespace BackBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Banco
 *
 * @ORM\Table(name="banco", uniqueConstraints={@ORM\UniqueConstraint(name="banco_pk", columns={"ban_id"})})
 * @ORM\Entity
 */
class Banco
{
    /**
     * @var integer
     *
     * @ORM\Column(name="ban_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="banco_ban_id_seq", allocationSize=1, initialValue=1)
     */
    private $banId;

    /**
     * @var string
     *
     * @ORM\Column(name="ban_nombre", type="string", length=100, nullable=true)
     */
    private $banNombre;



    /**
     * Get banId
     *
     * @return integer
     */
    public function getBanId()
    {
        return $this->banId;
    }

    /**
     * Set banNombre
     *
     * @param string $banNombre
     *
     * @return Banco
     */
    public function setBanNombre($banNombre)
    {
        $this->banNombre = $banNombre;

        return $this;
    }

    /**
     * Get banNombre
     *
     * @return string
     */
    public function getBanNombre()
    {
        return $this->banNombre;
    }
}
