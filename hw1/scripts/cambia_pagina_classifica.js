//quando l'utente clicca sul primo blocco si apre la pagina corrispondente

//const containers = document.querySelectorAll(".container");
const container_classifica = containers[1];

container_classifica.addEventListener("click", cambia_pagina);

function cambia_pagina()
{
    location.href = "./visualizza_classifica_struttura.php";
}

console.log("Pagina di visualizzazione delle classifiche caricata");