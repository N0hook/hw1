<?php

//per prima cosa controlla di avere dei dati post, altrimenti da errore

if(!empty($_POST["username"]) && !empty($_POST["password"])) 
{
 
    $connessione = mysqli_connect("localhost", "root", "", "dati_sito") or die("Errore: " .mysqli_connect_error());

    $username = mysqli_real_escape_string($connessione, $_POST["username"]);
    $password = mysqli_real_escape_string($connessione, $_POST["password"]);

    //devo controllare che l'username esista e la password sia giusta

    $query_cerca_username = "SELECT username, password FROM utenti WHERE username = '$username'";
    $res_username = mysqli_query($connessione, $query_cerca_username);


    if(mysqli_num_rows($res_username) > 0)
    {
    
        //ha trovato l'utente, serve capire se la password inserita è corretta 

        $utente_loggato = mysqli_fetch_assoc($res_username);

        if(password_verify($_POST['password'], $utente_loggato['password']))
        {
          //i dati coincidono, quindi si può stabilire la connessione

          session_start();
          
          $_SESSION["username"] = $username;

          mysqli_free_result($res_username);
          mysqli_close($connessione);

          header("Location: ./home.php");
          exit;

        }
        else
        {
            $errore = "La password inserita non è valida, riprovare\n";
           
        }
    }
    else
    {
        $errore = "Il nome utente inserito non è esistente, riprovare\n";
        
    }


    mysqli_free_result($res_username);



}














?>


<html>

<form method = "post">

<span> Inserisci i tuoi dati: <br></br> </span>

<!-- se ha ricaricato e c'è un errore lo stampo -->
<?php               
                            
    if (isset($errore)) 
    {
        echo "<span class='error'> $errore </span>";
    }                            
                           
                
?>

<p>

username: <input type = "text" name = "username"> <br></br>
password:  <input type = "password" name = "password"><br></br>

<a href = "./home.php"> indietro </a>
<input type= "submit"  value = "Accedi" >
</p>





</html>