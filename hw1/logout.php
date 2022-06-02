<?php 

//la sessione dell'utente viene eliminata

session_start();
session_destroy();
header("Location: ./home.php");
exit;


?>