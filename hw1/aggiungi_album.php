<?php

session_start();

if(!isset($_SESSION["username"]))
{
    header ("Location: ./signup.php");
}


$id = $_GET['id'];
$cover = $_GET['cover'];
$nome = $_GET['nome'];
$autore = $_GET['autore'];
$data_uscita = $_GET['data_uscita'];
$num_tracce = $_GET['num_tracce'];


$connessione = mysqli_connect("localhost", "root", "", "dati_sito") or die("Error: " .mysqli_connect_error());

$query_inserimento = "INSERT INTO album values ('$id', '$cover', '$nome', '$autore', '$data_uscita', '$num_tracce')";

$nuovo_album = mysqli_query($connessione, $query_inserimento);

mysqli_free_result($nuovo_album);
mysqli_close($connessione);



?>