<?php

//Forniti da spotify

$client_id_spotify = "123f96ba7bd24a1993af2da4199d44c3";
$client_secret_spotify = "8f91ae39665748ac9efb2006e6ea9e9c";
$url_token = "https://accounts.spotify.com/api/token";

//richiesta token:

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url_token);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

//POST (per ottenere il token nella variabile)
curl_setopt($curl, CURLOPT_POST, 1);

curl_setopt($curl, CURLOPT_POSTFIELDS,"grant_type=client_credentials"); //body
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Authorization: Basic '.base64_encode($client_id_spotify.':'.$client_secret_spotify))); //header

$token=json_decode(curl_exec($curl), true);
curl_close($curl); 


//ricerca dell'album

$album = urlencode($_GET["album"]);
$url_spotify = "https://api.spotify.com/v1/search?type=album&include_external=audiooffset=0&limit=10&q=".$album; //in questo caso penso non abbia sdnspo visualizzare così tanti risultati dato che alcuni saranno singoli degli stessi album
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, $url_spotify);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

//header e token
curl_setopt($curl, CURLOPT_HTTPHEADER, array('Authorization: Bearer '.$token["access_token"])); 
$result=curl_exec($curl);
echo $result;
curl_close($curl);

?>






















