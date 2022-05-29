<?php

start_session();

if(!isset($_SESSION['username']))
{

    header("Location: ./login.php");
    exit;

}



?>