<?php

session_start();

if(isset($_SESSION["username"]))
{
    $user = $_SESSION["username"];
    $id = $_GET['id_album'];

    $connessione = mysqli_connect("localhost", "root", "", "dati_sito") or die("Error: " .mysqli_connect_error());

    $query_rimozione = "DELETE FROM preferiti WHERE nome_utente = '$user' AND id_album = '$id'";

    $rimuovi_preferito = mysqli_query($connessione, $query_rimozione);


    mysqli_free_result($rimuovi_preferito);
    mysqli_close($connessione);

}

?>