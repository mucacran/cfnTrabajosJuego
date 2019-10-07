<?php
/*
 * User Class
 * Esta clase se utiliza para operaciones relacionadas con la base de datos (conectar, insertar y actualizar) 
 * @author    CodexWorld.com
 * @url        http://www.codexworld.com
 * @license    http://www.codexworld.com/license
 */
class User {
    private $dbHost     = BD_HOST;     //nombre del servidor
    private $dbUsername = BD_USER;     // nombre de usuario
    private $dbPassword = DB_PASSWORD; // contraseña del usuario
    private $dbName     = BD_DATABASE; // nombre de la base de datos
    private $userTbl    = DB_USER_TBL; //
    
    function __construct(){
        if(!isset($this->db)){
            // Connect to the database
            $conn = new mysqli($this->dbHost, $this->dbUsername, $this->dbPassword, $this->dbName);
            if($conn->connect_error){
                die("Fallo conectarse a la base de datos: " . $conn->connect_error);
            }else{
                $this->db = $conn;
            }
        }
    }
    
    function checkUser($userData = array()){
        if(!empty($userData)){
            // Compruebe si los datos del usuario ya existen en la base de datos
            $prevQuery = "SELECT * FROM ".$this->userTbl." WHERE oauth_provider = '".$userData['oauth_provider']."' AND oauth_uid = '".$userData['oauth_uid']."'";
            $prevResult = $this->db->query($prevQuery);
            if($prevResult->num_rows > 0){
                // Actualizar datos de usuario si ya existe
                $query = "UPDATE ".$this->userTbl." SET first_name = '".$userData['first_name']."', last_name = '".$userData['last_name']."', email = '".$userData['email']."', locale = '".$userData['locale']."', picture = '".$userData['picture']."', link = '".$userData['link']."', modified = NOW() WHERE oauth_provider = '".$userData['oauth_provider']."' AND oauth_uid = '".$userData['oauth_uid']."'";
                $update = $this->db->query($query);
            }else{
                // Insertar datos de usuario
                $query = "INSERT INTO ".$this->userTbl." SET oauth_provider = '".$userData['oauth_provider']."', oauth_uid = '".$userData['oauth_uid']."', first_name = '".$userData['first_name']."', last_name = '".$userData['last_name']."', email = '".$userData['email']."', locale = '".$userData['locale']."', picture = '".$userData['picture']."', link = '".$userData['link']."', created = NOW(), modified = NOW()";
                $insert = $this->db->query($query);
            }
            
            // Obtener datos de usuario de la base de datos
            $result = $this->db->query($prevQuery);
            $userData = $result->fetch_assoc();
        }
        
        // Devolver datos de usuario
        return $userData;
    }
}