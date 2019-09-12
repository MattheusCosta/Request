<?php

  namespace Classes\Request;

  class Aluno extends Usuario
  {
    private $codigoAluno;
    private $rm;
    private $rg;
    private $situacao;
    private $turma;
    private $telefone;
    private $logradouro;
    private $numero;
    private $bairro;
    private $cidade;

    public function __construct(){}

    /**
     * Inserir valores aos atributos
     * @return
     */

    public function setCodigoAluno($codigoAluno){
     $this->codigoAluno = $codigoAluno;
    }
    public function setRm($rm){
      $this->rm = $rm;
    }
    public function setRg($rg){
      $this->rg = $rg;
    }
    public function setSituacao($situacao){
      $this->$situacao = $situacao;
    }
    public function setTurma($turma){
      $this->turma = $turma;
    }
    public function setTelefone($telefone){
      $this->telefone = $telefone;
    }
    public function setLogradouro($logradouro){
      $this->logradouro = $logradouro;
    }
    public function setNumero($numero){
      $this->numero = $numero;
    }
    public function setBairro($bairro){
      $this->bairro = $bairro;
    }
    public function setCidade($cidade){
      $this->cidade = $cidade;
    }

    /**
     * Retorno de atributos
     * @return
     */

     public function getCodigoAluno($codigoAluno){
      return $this->codigoAluno;
     }
     public function getRm($rm){
       return $this->rm;
     }
     public function getRg($rg){
       return $this->rg;
     }
     public function getSituacao($situacao){
       return $this->$situacao;
     }
     public function getTurma($turma){
       return $this->turma;
     }
     public function getTelefone($telefone){
       return $this->telefone;
     }
     public function getLogradouro($logradouro){
       return $this->logradouro;
     }
     public function getNumero($numero){
       return $this->numero;
     }
     public function getBairro($bairro){
       return $this->bairro;
     }
     public function getCidade($cidade){
       return $this->cidade;
     }
  }
?>
