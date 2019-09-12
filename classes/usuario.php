<?php

  namespace Classes\Request;

  class Usuario
  {
    private $nome;
    private $email;
    private $senha;

    function __construct(){}

    /**
     * Inserir valores aos atributos
     * @return
     */

    public function setNome($nome){
      $this->nome = $nome;
    }

    public function setEmail($email){
      $this->email = $email;
    }

    public function setSenha($senha){
      $this->senha = $senha;
    }

    /**
     * Retorno de atributos
     * @return
     */

    public function getNome(){
        return $this->nome;
    }

    public function getEmail(){
        return $this->email;
    }

    public function getSenha(){
        return $this->senha;
    }

  }
