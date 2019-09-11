<?php

  require_once("clases/usuario.php");

  class Funcionario extends Usuario
  {
    private $codigoFuncionario;
    private $nivelAcesso;

    function __construct(){}

    /**
     * Inserir valores aos atributos
     * @return
     */

    public function setCodigoFuncionario($codigoFuncionario){
      $this->codigoFuncionario = $codigoFuncionario;
    }
    public function setNivelAcesso($nivelAcesso){
      $this->nivelAcesso = $nivelAcesso;
    }

    /**
     * Retorno de atributos
     * @return
     */

     public function getCodigoFuncionario($codigoFuncionario){
      return $this->codigoFuncionario;
     }
     public function getNivelAcesso($nivelAcesso){
       return $this->nivelAcesso;
     }

  }

?>
