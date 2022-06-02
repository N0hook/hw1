<?php 

//Salva il contenuto dei blocchi in modo da farli usare alla fetch

$json = array();

$connessione = mysqli_connect("localhost", "root", "", "dati_sito") or die("Error: " .mysqli_connect_error());
$query_contenuti = "SELECT * from contenuti";
$res = mysqli_query($connessione, $query_contenuti) or die ("Error: " .mysqli_connect_error());

while($row = mysqli_fetch_assoc($res))
{
   array_push($json, $row);
}

mysqli_free_result($res);
mysqli_close($connessione); 
echo json_encode($json);


?>