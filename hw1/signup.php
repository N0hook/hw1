<?php

//per prima cosa controlla di avere dei dati post, altrimenti da errore

if(!empty($_POST["nome"]) && !empty($_POST["cognome"]) && !empty($_POST["username"]) && !empty($_POST["email"]) && !empty($_POST["password"]) && !empty($_POST["conferma_password"]))
{
    //salva qui gli eventuali errori nella connessione
     $errore = array();

    $connessione = mysqli_connect("localhost", "root", "", "dati_sito") or die("Errore: " .mysqli_connect_error());

    //controlla se i dati inseriti sono corretti

    $nome = mysqli_real_escape_string($connessione, $_POST["nome"]);
    $cognome = mysqli_real_escape_string($connessione, $_POST["cognome"]);
    $username = mysqli_real_escape_string($connessione, $_POST["username"]);
    $email = mysqli_real_escape_string($connessione, $_POST["email"]);
    $password = mysqli_real_escape_string($connessione, $_POST["password"]);
    $conferma_password = mysqli_real_escape_string($connessione, $_POST["conferma_password"]);


    //controlla che l'username sia unico:
    
    $query_cerca_username = " SELECT username FROM utenti WHERE username = '".$username."' ";
    $res_username = mysqli_query($connessione, $query_cerca_username);

    if(mysqli_num_rows($res_username) > 0)
    {
        $errore[] = "Username già in uso. Selezionarne un altro";
    }

     //controlla password

    if (strlen($password) < 8)
    {
        $errore[] = "La password deve contenere almeno 8 caratteri";
    }

    if(strcmp($password, $conferma_password) != 0)
    {
       $errore[] = "La password e la password di conferma non coincidono";
    }

    if(!preg_match('/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/', $password)) 
    {
        $errore[] = "La password inserita non è valida. Inserire maiuscole, caratteri speciali e numeri";
    } 

    //controlla la mail 
 
    if (!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
       $errore[] = "L'email inserita non è valida";
    }   
    else 
    {
        $query_cerca_email = " SELECT email FROM utenti WHERE email = '".$email."' ";
        $res_email = mysqli_query($connessione, $query_cerca_email);

        
        if (mysqli_num_rows($res_email) > 0) 
        {
           $errore[] = "L'email inserita è già utilizzata";
        }
    }

   //se non ci sono errori, inserire i dati dell'utente nel database 

    if(count($errore) == 0)
    {

       $password = password_hash($password, PASSWORD_BCRYPT);

       $query_inserimento = "INSERT INTO utenti values ('".$nome."', '".$cognome."', '".$username."', '".$email."', '".$password."')"; 
       $res_inserimento = mysqli_query($connessione, $query_inserimento);

        //controlla che la connessione sia andata a buon fine e libera/chiude le connessioni inutili

        if($res_inserimento)
        {
            mysqli_free_result($res_username);
            mysqli_free_result($res_email); 
            mysqli_close($connessione);

            header("Location: ./home.php");
        }
        else
        {
            $errore[] = "Errore di connessione";
            mysqli_free_result($query_cerca_username);
            mysqli_free_result($query_email); 
            mysqli_close($connessione);

        }
   }
}
else
{
    $errore[] = "Riempi tutti i campi";
}



?>


<html>
<!-- Form per l'invio dei dati visualizzati dall'utente-->

<head>

<title> Registrati </title>

<link rel="stylesheet" href= "./stile/signup.css"/>
<script src="scripts/signup.js" defer="true"></script>


</head>

<body>


<section>

<div id = "blocco_risposte">

<h1> Registrati al nostro sito per accedere alle funzionalità complete: <br></br> </h1>

<form method = "post">  

<p><div class = "nome_utente">
Nome: <input type = "text" name = "nome"> </br>
<span class = "hidden"> Questo campo è obbligatorio </span> </div> </p>

<p><div class = "cognome_utente">
Cognome: <input type = "text" name = "cognome"> </br>
<span class = "hidden"> Questo campo è obbligatorio </span> </div></p>

<p><div class = "username_utente">
Username: <input type = "text" name = "username"> </br>
<span class = "hidden"> Questo campo è obbligatorio </span> </div></p>

<p><div class = "email_utente">
e-mail: <input type = "text" name = "email"></br>
<span class = "hidden"> Questo campo è obbligatorio </span> </div></p>

<p><div class = "password_utente">
Password: <input type = "password" name = "password"> </br>
<span class = "hidden"> Questo campo è obbligatorio </span> </div></p>

<p><div class = "conferma_password_utente">
Conferma password: <input type = "password" name = "conferma_password"> </br>
<span class = "hidden"> Questo campo è obbligatorio </span> </div></p>

<a id = "button1" href = "./home.php"> indietro </a>
<input id = "button3" type  = "submit"  value = "Registrati" >

</form>

<h1> Hai già un account? <a id = "button2" href = "./login.php"> Accedi </a> </h1>

</div>

</section>
<!--controllo degli errori in fase di registrazione e inizio sessione-->
<?php

 if(count($errore) != 0)
 {
    foreach($errore as $singolo_err )
    {
        echo "<span class = 'errore'> $singolo_err </span></br>";
    }

 }
 else
 {
    $username = $_POST["username"];
    session_start();
    $_SESSION["username"] = $username;
 }

?>


</body>

</html>