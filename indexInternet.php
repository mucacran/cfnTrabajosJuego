<?php
// Include configuration file
require_once 'database-credenciales.php';

// Include User class
require_once 'user.class.php';

$authUrl = $output = '';

// If user already verified 
if(isset($_SESSION['oauth_status']) && $_SESSION['oauth_status'] == 'verified' && !empty($_SESSION['userData'])){
	// Retrieve user's profile data from session
	$userData = $_SESSION['userData'];
	
	// Prepare output to show LinkedIn profile data
	if(!empty($userData)){
		$output  = '<h2>Detalles de tu perfil en LinkedIn </h2>';
		$output .= '<div class="ac-data">';
		$output .= '<img src="'.$userData['picture'].'"/>';
        $output .= '<p><b>LinkedIn ID:</b> '.$userData['oauth_uid'].'</p>';
        $output .= '<p><b>Nombre:</b> '.$userData['first_name'].' '.$userData['last_name'].'</p>';
        $output .= '<p><b>Email:</b> '.$userData['email'].'</p>';
        $output .= '<p><b>Logeado con:</b> LinkedIn'.'</p>';
		$output .= '<p><b>Link de tu perfil:</b> <a href="'.$userData['link'].'" target="_blank">Click para visitar tu pagina de LinkedIn</a></p>';
        $output .= ''; //<p><b>Deslogeate desde</b> <a href="logout.php">LinkedIn</a></p>
		$output .= '</div>';
		$output .= '
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<h1 class="centrar">
					BIENVENIDO AL JUEGO DE VALORACIÓN EXPERIMENTAL DE PROYECTOS DE CFN. 
				</h1>
				<div class="row">
					<div class="col">
						<h2 class="centrar">
							En este aplicativo podras estimar el valor necesario para implementar un proyecto de inversión y seras puntuado de acuerdo a tu precisión con respecto a valores reales.
						</h2>
						<h3 class="centrar">
							El juego consiste en dos partes en las cuales podras ganar puntos para luego (Incentivo)
						</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<form method="POST" action="basededatos-utilidades.php">
					<div class="tituloFormulario">
						<h5 style="font-family: "AH", venir-Black"><i class="fa fa-file-text" aria-hidden="true"></i> FORMULARIO</h5>
					</div>
					<div class="preguntasForm">
						<div class="input-group margin-bottom-sm">
							<span class="input-group-addon"><i class="fa fa-user-circle fa-fw"></i></span>
							<input type="text" class="form-control form-control-lg" id="nombre" placeholder="Nombre y Apellido" name="nombreCompleto" required>
						</div>
						<div class="input-group margin-bottom-sm">
							<span class="input-group-addon"><i class="fa fa-user-o fa-fw"></i></span>
							<select class="form-control form-control-lg" id="edad" name="edad">
								<option value="" selected>Rango de edad</option>
								<option value="11 - 17">11 - 17</option>
								<option value="18 - 24">18 - 24</option>
								<option value="25 - 32">25 - 32</option>
							</select>
							<span class="input-group-addon"><i class="fa fa-sort-desc fa-fw"></i></span>
						</div>
						<div class="input-group margin-bottom-sm">
							<span class="input-group-addon"><i class="fa fa-cog fa-fw"></i></span>
							<select class="form-control form-control-lg" id="economia" name="economia">
								<option value="" selected>Sector económico</option>
								<option value="tecnologo">Tecnológo</option>
								<option value="educacion">Educación</option>
								<option value="primario">Primario</option>
								<option value="Secundario">Secundario</option>
							</select>
							<span class="input-group-addon"><i class="fa fa-sort-desc fa-fw"></i></span>
						</div>
						<div class="input-group margin-bottom-sm">
							<span class="input-group-addon"><i class="fa fa-eye fa-fw"></i></span>
							<select class="form-control form-control-lg" id="experiencia" name="experiencia">
								<option value="" selected>Años de experiencia</option>
								<option value="Un año o menos">Un año o menos</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="5">5</option>
								<option value="6 o mas">6 y mas</option>
							</select>
							<span class="input-group-addon"><i class="fa fa-sort-desc fa-fw"></i></span>
						</div>
						<div class="input-group margin-bottom-sm">
							<span class="input-group-addon"><i class="fa fa-users fa-fw"></i></span>
							<select class="form-control form-control-lg" id="trabajo" name="trabajo">
								<option value="" selected>Tipo de trabajo</option>
								<option value="Administrativo">Administrativo</option>
								<option value="tecnología">Técnologia</option>
								<option value="Otro">Otro</option>
							</select>
							<span class="input-group-addon"><i class="fa fa-sort-desc fa-fw"></i></span>
						</div>
						<div class="input-group margin-bottom-sm">
							<span class="input-group-addon"><i class="fa fa-graduation-cap fa-fw"></i></span>
							<select class="form-control form-control-lg" id="instruccion" name="instruccion">
								<option value="" selected>Nivel de instrucción</option>
								<option value="primaria">Primaria</option>
								<option value="secundaria">Secundaría</option>
								<option value="universitaria">Universitaria</option>
								<option value="otra">Otra</option>
							</select>
							<span class="input-group-addon"><i class="fa fa-sort-desc fa-fw"></i></span>
						</div>
						<div class="content-btn" > 
							<button type="submit" class="btn btn-primary btn-lg btn-block" ><i class="fa fa-gamepad" aria-hidden="true"></i> JUGAR</button>
						</div>
						
					</div>
				</form>
			</div>
		</div>
	</div>
		';
	}
}elseif((isset($_GET["oauth_init"]) && $_GET["oauth_init"] == 1) || (isset($_GET['oauth_token']) && isset($_GET['oauth_verifier'])) || (isset($_GET['code']) && isset($_GET['state']))){
	$client = new oauth_client_class;
	
	$client->client_id = LIN_CLIENT_ID;
	$client->client_secret = LIN_CLIENT_SECRET;
	$client->redirect_uri = LIN_REDIRECT_URL;
	$client->scope = LIN_SCOPE;
	$client->debug = 1;
	$client->debug_http = 1;
	$application_line = __LINE__;
	
	if(strlen($client->client_id) == 0 || strlen($client->client_secret) == 0){
		die('Please go to LinkedIn Apps page https://www.linkedin.com/secure/developer?newapp= , '.
			'create an application, and in the line '.$application_line.
			' set the client_id to Consumer key and client_secret with Consumer secret. '.
			'The Callback URL must be '.$client->redirect_uri.'. Make sure you enable the '.
			'necessary permissions to execute the API calls your application needs.');
	}
	
	// If authentication returns success
	if($success = $client->Initialize()){
		if(($success = $client->Process())){
			if(strlen($client->authorization_error)){
				$client->error = $client->authorization_error;
				$success = false;
			}elseif(strlen($client->access_token)){
				$success = $client->CallAPI(
					'https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))', 
					'GET', array(
						'format'=>'json'
					), array('FailOnAccessError'=>true), $userInfo);
				$emailRes = $client->CallAPI(
					'https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', 
					'GET', array(
						'format'=>'json'
					), array('FailOnAccessError'=>true), $userEmail);
			}
		}
		$success = $client->Finalize($success);
	}
	
	if($client->exit) exit;
	
	if(strlen($client->authorization_error)){
		$client->error = $client->authorization_error;
		$success = false;
	}
	
	if($success){
		// Initialize User class
		$user = new User();
		
		// Getting user's profile data
		$inUserData = array();
		$inUserData['oauth_uid']  = !empty($userInfo->id)?$userInfo->id:'';
		$inUserData['first_name'] = !empty($userInfo->firstName->localized->en_US)?$userInfo->firstName->localized->en_US:'';
		$inUserData['last_name']  = !empty($userInfo->lastName->localized->en_US)?$userInfo->lastName->localized->en_US:'';
		$inUserData['email']      = !empty($userEmail->elements[0]->{'handle~'}->emailAddress)?$userEmail->elements[0]->{'handle~'}->emailAddress:'';
		$inUserData['picture']    = !empty($userInfo->profilePicture->{'displayImage~'}->elements[0]->identifiers[0]->identifier)?$userInfo->profilePicture->{'displayImage~'}->elements[0]->identifiers[0]->identifier:'';
		$inUserData['link']       = 'https://www.linkedin.com/';

		// Insert or update user data to the database
		$inUserData['oauth_provider'] = 'linkedin';
		$userData = $user->checkUser($inUserData);
		
		//Storing user data into session
		$_SESSION['userData'] = $userData;
		$_SESSION['oauth_status'] = 'verified';
		
		//Redirect the user back to the same page
		header('Location: ./');
	}else{
		 $output = '<h3 style="color:red">Error al conectarse a linkedin! trate mas tarde de nuevo!</h3><p>'.HtmlSpecialChars($client->error).'</p>';
	}
}elseif(isset($_GET["oauth_problem"]) && $_GET["oauth_problem"] <> ""){
	$output = '<h3 style="color:red">'.$_GET["oauth_problem"].'</h3>';
}else{
	$authUrl = '?oauth_init=1';
	
	// Render LinkedIn login button
	$output = '
	<a href="?oauth_init=1"><img src="images/linkedin-sign-in-btn.png"></a>
	';
}
?>
<!DOCTYPE html>
<html lang="es">
<head >
	<!-- Required meta tags -->
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	
	<!-- Favicons -->
	<link rel="apple-touch-icon" href="https://www.cfn.fin.ec/wp-content/themes/cfn/img/favicon.png"/>
	<link rel="icon" href="https://www.cfn.fin.ec/wp-content/themes/cfn/img/favicon.png"/>
	<link rel="icon" href="https://www.cfn.fin.ec/wp-content/themes/cfn/img/favicon.ico"/>

	<title>CFN - Juega</title>

	<!-- normalize -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
	
	<!-- BootstrapCDN 4 -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
	
	<!-- bootstrap 4 js -->
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" ></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" ></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" ></script>

	<!-- iconos -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://fontawesome.com/v4.7.0/assets/css/site.css">

	<!-- mi estilo animacion -->
	<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>

	<!-- animación css -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">

	<!-- Mi estilos -->
	<link rel="stylesheet" href="css/fuente.css">
	<link rel="stylesheet" href="css/estilo.css">
	
	
<body>
	<div class="container">
		<div class="row">
			<img style="width: 100%;" src="https://www.cfn.fin.ec/wp-content/themes/cfn/img/nuevosTamanosDeBaners.jpg" alt="">
		</div>
	</div>
<div class="container">
    <div class="in-box">
        <!-- Display login button / profile information -->
        <?php echo $output; ?>
    </div>
</div>

</body>
</html>