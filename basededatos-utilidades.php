<?php
require_once('database-credenciales.php');
//$result = '';
//variables
    $nombre1 =	isset($_POST["nombreCompleto"]) ? $_POST["nombreCompleto"] : '';
    $edad2=	isset($_POST["edad"]) ? $_POST["edad"] : '';
    $economia3 =	isset($_POST["economia"]) ? $_POST["economia"] : '';
    $experiencia =	isset($_POST["experiencia"]) ? $_POST["experiencia"] : '';
    $trabajo=	isset($_POST["trabajo"]) ? $_POST["trabajo"] : '';
    $instruxion=	isset($_POST["instruccion"]) ? $_POST["instruccion"] : '';
    $linkedingRegistro =	isset($_POST["linkedinRegistro"]) ? $_POST["linkedinRegistro"] : '';
    $emailformulario =	isset($_POST["emailFormulario"]) ? $_POST["emailFormulario"] : '';
    
 
$conectarse = new mysqli(BD_HOST,BD_USER,DB_PASSWORD,BD_DATABASE);

if($conectarse->connect_error)
{
    echo 'Ocurrio un error en la coneccion con la base de datos';
    exit;
}

$baseDeDatos="INSERT INTO cfn_formulariosinlinkedin(id,nombrecompleto,rangodeedad,sectoreconomico,tiempoexperiencia,tipodetrabajo,niveldeinstruccion,direccionlinkedin,email) VALUES(NULL,'$nombre1','$edad2','$economia3','$experiencia','$trabajo','$instruxion','$linkedingRegistro','$emailformulario')";

$resultado = $conectarse->query($baseDeDatos);

if (!$resultado) {
    echo "No se envio su mensaje";
}
else
{
    header("Location: globo.html");
}
