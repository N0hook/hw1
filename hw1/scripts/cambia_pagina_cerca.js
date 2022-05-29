//quando l'utente clicca sul primo blocco si apre la pagina corrispondente

const containers = document.querySelectorAll(".container");
const container_album = containers[0];

function cambia_pagina()
{
    location.href = "./cerca_album_struttura.php";
}

container_album.addEventListener("click", cambia_pagina);


console.log("Pagina di ricerca dell'album caricata");