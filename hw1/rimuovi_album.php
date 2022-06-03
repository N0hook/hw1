<?php

session_start();

if(isset($_SESSION["username"]))
{
    $id = $_GET['id'];

    $connessione = mysqli_connect("localhost", "root", "", "dati_sito") or die("Error: " .mysqli_connect_error());

    $query_rimozione = "DELETE FROM album where id = '$id'";

    $rimuovi_album = mysqli_query($connessione, $query_rimozione);


    mysqli_free_result($rimuovi_album);
    mysqli_close($connessione);

}

?>