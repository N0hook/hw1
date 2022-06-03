<?php

session_start();

if(!isset($_SESSION["username"]))
{
    header ("Location: ./signup.php");
    exit;
}


?>


<html>

<head>

<meta charset="utf-8">

<title> I tuoi preferiti</title>

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="./stile/preferiti.css"/> 
<script src="scripts/carica_preferiti.js" defer="true"></script>



<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=BIZ+UDPMincho&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=BIZ+UDPMincho&family=Familjen+Grotesk&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">

</head>


<body>

<header>

<nav>

<div id = "logo"> <strong>Unlimited music<br/> </strong>
<em>La tua libreria musicale</em></div>

<div id = "links">

<a href = "./home.php" > Home </a>
<a href = "./liste_utente.php"> Le tue liste </a>
<a href = "./preferiti_struttura.php"> Preferiti </a>
<a> Chi siamo </a>
<?php


//se un utente loggato entra nella home, non c'è bisogno che visualizzi il tasto per accedere

  if(isset($_SESSION["username"])) 
  {
    echo "<a id = 'button' href = './logout.php'> Logout </a>";
  }
  else
  {
     echo "<a id = 'button' href = './signup.php'> Registrati o accedi </a>";
  }
 
  ?> 

</div>

<div id = "Menu"> 

<div></div>
<div></div>
<div></div>
<div></div>
</div>

</nav>


</header>

<section>

<p> Benvenuto, ecco i tuoi preferiti: </p></br>

<div class = "container_album">
         
 </div> 


</section>


<footer>

<p> Per info: </p>
<address> Tinnirello Marica 1000005808</address>

</footer>


</body>

</html>
