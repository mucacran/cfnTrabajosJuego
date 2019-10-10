
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Lista de Contactos de Loinde S.A.</title>
	<!-- bootratap -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>
	<section>
		<div class="container">
			<h1>Lista de Contactos de Loinde S.A.</h1>
		</div>
	</section>
	<section class="container">
		<div class="row">
			<h3 class="title">Agregar nuevos contactos</h3>
		</div>
		<div class="row">
			<form class="form-inline" action="agregandoContactos.php" method="post">
				<div class="form-group">
					<label for="exampleInputName2">Nombre</label>
					<input type="text" class="form-control" id="exampleInputName2" placeholder="Sergio Bravo" name="name">
				</div>
				<div class="form-group">
				    <label for="exampleInputEmail2">Email</label>
				    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="Anonimo@example.com" name="email">
				</div>
				<div class="form-group">
				    <label for="exampleInputEmail2">Teléfono</label>
				    <input type="number" class="form-control" id="exampleInputEmail2" placeholder="0917045555" name="phone">
				</div>
				<div class="form-group">
				    <label for="exampleInputEmail2">Mensaje</label>
				    <input type="text" class="form-control" id="exampleInputEmail2" placeholder="escriba su mensaje" name="message">
				</div>
				<button type="submit" class="btn btn-default">Agregar</button>
			</form>
		</div>
	</section>

<p></p>
	<section>
		<div class="container">
			<h2 class="page-header">Contactos</h2>
	<?php
$servername = "mysql.hostinger.com.ar";
$username = "u504062512_loind";
$password = "importacioneser2017";
$dbname = "u504062512_loind";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT nombre1, correo1, telefono1, mensaje1 FROM DartosDeEmail";
$result = $conn->query($sql);
$i=0;
if ($result->num_rows > 0) {
    // output data of each row
    echo "<div>
			<table class='table table-striped' >
				<tr style='background:#cccccc'>
					<td>
						Id
					</td>
					<td>
						Nombre
					</td>
					<td>
						Coreo
					</td>
					<td>
						Telefono
					</td>
					<td>
						Mensaje
					</td>
					<td>
						Elimina
					</td>
				</tr>";
    while($row = $result->fetch_assoc()) {
	echo "
			<tr>
				<td>" . ++$i . "</td>
				<td>																																																																																																																																																																																						
					". $row["nombre1"]. "
				</td>
				<td>
					". $row["correo1"]."
				</td>
				<td>
					". $row["telefono1"]."
				</td>
				<td>
					". $row["mensaje1"]."
				</td>
				<td><button>eliminar</button></td>
			</tr>
		";
    }
    echo "</table></div>";
} else {
    echo "0 results";
}

/*$borrar = "DELETE FROM DartosDeEmail WHERE nombre1 =  ";
if (mysqli_query($conn, $borrar)) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . mysqli_error($conn);
}
*/

// $conn->close();
?>
		</div>
	</section>
</body>
</html>


