<?php

session_start();

if(!isset($_SESSION["username"]))
{
    header ("Location: ./signup.php");
}

$user = $_SESSION["username"];
$id = $_GET['id_album'];

$connessione = mysqli_connect("localhost", "root", "", "dati_sito") or die("Error: " .mysqli_connect_error());

$query_inserimento = "INSERT INTO preferiti values ('$user', '$id')";

$nuovo_preferito = mysqli_query($connessione, $query_inserimento);
echo($nuovo_preferito);


mysqli_free_result($nuovo_preferito);
mysqli_close($connessione);




?>