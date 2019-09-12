<?php

    require_once "vendor/autoload.php";

    if(Classes\Request\Usuario::logado() == false){
        header('Location:view/aluno/pageLogin.html');
    }else{
        header('Location:view/aluno/pageHome.html');
    }
