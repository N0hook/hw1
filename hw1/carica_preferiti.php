<?php

//se c'è un utente loggato, carica i suoi preferiti che trova nella tabella

session_start();

if(!isset($_SESSION["username"]))
{
    header ("Location: ./signup.php");
    exit;
}

    $connessione = mysqli_connect("localhost", "root", "", "dati_sito") or die("Error: " .mysqli_connect_error());

    $user = $_SESSION['username'];

    $query_preferiti = "SELECT album.id, album.cover, album.nome, album.autore, album.data_uscita, album.num_tracce from album join preferiti on album.id = preferiti.id_album where preferiti.nome_utente = '$user'";

    $res_preferiti = mysqli_query($connessione, $query_preferiti);

    $json = array();

//scorre i risultati 

    while($num_row = mysqli_fetch_assoc($res_preferiti))
    {
     array_push($json, $num_row);
    }

     mysqli_free_result($res_preferiti); 
     mysqli_close($connessione);
     echo json_encode($json);



?>