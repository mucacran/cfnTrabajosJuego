<?php

define('BD_HOST','localhost'); //servidor
define('BD_DATABASE','juegoglobo'); //nombre de la base de datos
define('BD_USER','root'); // nombre de usuario
define('DB_PASSWORD',''); // contraseña de usuario
define('DB_USER_TBL','cfn_formulariofuncionario'); // nombre de la tabla

//variables
    $nombre1 =      isset($_POST["nombreCompleto"]) ? $_POST["nombreCompleto"] : '';
    $edad2=	        isset($_POST["edad"])           ? $_POST["edad"] : '';
    $experiencia =	isset($_POST["experiencia"])    ? $_POST["experiencia"] : '';
    $trabajo =	    isset($_POST["trabajo"])        ? $_POST["trabajo"] : '';
    $instruxion=	isset($_POST["instruccion"])    ? $_POST["instruccion"] : '';    
 
$conectarse = new mysqli(BD_HOST,BD_USER,DB_PASSWORD,BD_DATABASE);

if($conectarse->connect_error)
{
    echo 'Ocurrio un error en la coneccion con la base de datos';
    exit;
}

$baseDeDatos="INSERT INTO cfn_formulariofuncionario(id,nombrecompleto,rangodeedad,tiempoexperiencia,tipodetrabajo,niveldeinstruccion) VALUES(NULL,'$nombre1','$edad2','$experiencia','$trabajo','$instruxion')";

$resultado = $conectarse->query($baseDeDatos);

if (!$resultado) {
    echo "No se envio los datos del formulario";
}
else
{
    header("Location: globo.html");
}