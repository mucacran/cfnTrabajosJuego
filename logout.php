<?php
// Start session
if(!session_id()){
    session_start();
}

// Unset token and user data from session
unset($_SESSION['oauth_status']);
unset($_SESSION['userData']);

// Destroy entire session
session_destroy();

// Redirect to homepage
header("Location:index.php");
exit;
?>