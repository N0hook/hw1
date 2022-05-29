<html>

<head>

<meta charset="utf-8">
<title> Cerca album </title>
<script src="scripts/cerca_album.js" defer="true"></script>
<link rel="stylesheet" href="./stile/cerca_album.css"/> 

<link href="https://fonts.googleapis.com/css2?family=BIZ+UDPMincho&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=BIZ+UDPMincho&family=Familjen+Grotesk&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=BIZ+UDPMincho&family=Dancing+Script&family=Familjen+Grotesk&family=IBM+Plex+Sans+Arabic:wght@100&family=Lobster&family=Nanum+Gothic&family=Nanum+Myeongjo&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
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
<a href = "./preferiti.php"> Preferiti </a>
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

</header>

<section>

<div id = "main">

<p> Inserisci il nome dell'album che vorresti trovare. Se conosci il nome del suo autore, specificalo per velocizzare la ricerca:  </p>

<form id = "form_ricerca">
<input type = "search" placeholder = "Cerca album..." id = "nome_album">
</form>

</div>

<div id = "dati_album"> </div>


</section>

<footer>

<p> Per info: </p>
<address> Tinnirello Marica 1000005808</address>

</footer>

</body>


</html>