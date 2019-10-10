<?php
define('BD_HOST','localhost'); //servidor
define('BD_DATABASE','juegoglobo'); //nombre de la base de datos
define('BD_USER','root'); // nombre de usuario
define('DB_PASSWORD',''); // contraseña de usuario
define('DB_USER_TBL','users'); // nombre de la tabla

// LinkedIn API configuration
define('LIN_CLIENT_ID', '789gfadtc72adb');
define('LIN_CLIENT_SECRET', 'KMprU4fYUwkisB39');
define('LIN_REDIRECT_URL', 'http://192.168.64.2/clientes/cfn/juegodeglobos/MauricioyJennifer/cfnTrabajosJuego/');
define('LIN_SCOPE', 'r_liteprofile r_emailaddress'); //API permissions

  // Iniciar sesión 
  if (! session_id ()) { 
    session_start (); 
    } 
  
    // Incluye la biblioteca del cliente oauth 
    require_once 'linkedin-oauth-client-php/http.php' ; 
    require_once 'linkedin-oauth-client-php/oauth_client.php' ; 