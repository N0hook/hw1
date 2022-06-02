

<html>


<head>

<meta charset="utf-8">

<title> Unlimited Music </title>

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="./stile/home.css"/> 
<script src='scripts/home.js' defer></script>
<script src="scripts/cambia_pagina_cerca.js" defer="true"></script>
<script src="scripts/cambia_pagina_classifica.js" defer="true"></script>



<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=BIZ+UDPMincho&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=BIZ+UDPMincho&family=Familjen+Grotesk&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=BIZ+UDPMincho&family=Dancing+Script&family=Familjen+Grotesk&family=IBM+Plex+Sans+Arabic:wght@100&family=Lobster&family=Nanum+Gothic&family=Nanum+Myeongjo&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=BIZ+UDPMincho&family=Dancing+Script&family=Familjen+Grotesk&family=IBM+Plex+Sans+Arabic:wght@100&family=Kalam:wght@300&family=Lobster&family=Nanum+Gothic&family=Nanum+Myeongjo&family=Russo+One&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=BIZ+UDPMincho&family=Dancing+Script&family=Familjen+Grotesk&family=IBM+Plex+Sans+Arabic:wght@100&family=Kalam:wght@300&family=Lobster&family=Nanum+Gothic&family=Nanum+Myeongjo&family=Russo+One&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=BIZ+UDPMincho&family=Dancing+Script&family=Familjen+Grotesk&family=IBM+Plex+Sans+Arabic:wght@100&family=Kalam:wght@300&family=Lobster&family=Nanum+Gothic&family=Nanum+Myeongjo&family=Neuton:wght@200&family=Russo+One&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=BIZ+UDPMincho&family=Dancing+Script&family=Familjen+Grotesk&family=IBM+Plex+Sans+Arabic:wght@100&family=Kalam:wght@300&family=Lobster&family=Mukta:wght@200&family=Nanum+Gothic&family=Nanum+Myeongjo&family=Neuton:wght@200&family=Russo+One&display=swap" rel="stylesheet">

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

session_start();

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

<div id = "overlay"></div>

</header>

<section>

<div id = "main">

<h4> Benvenuto su Unlimited Music, il portale dedicato alla musica <br/> in cui è possibile accedere a tutte le informazioni sui tuoi dischi preferiti </h4><br/>

</div>

<div class = "container">

<img />

<p></p> 

</div>

<div class = "container">

<p></p>

<img/>

</div>

<div class = "container">

<img />

<p></p>
</div>


<div class = "container">

<p> </p> 

<img />

</div>


</section>


<footer>

<p> Per info: </p>
<address> Tinnirello Marica 1000005808</address>

</footer>


</body>

</html>
