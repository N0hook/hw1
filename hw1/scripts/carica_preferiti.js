//riempie dinamicamente la pagina dei preferiti dell'utente

console.log("Caricamento dei preferiti...");

fetch_carica_preferiti();

//onJson

function onJson(json)
{    
    console.log(json); //controllo

    const container_album = document.querySelector(".container_album");

    for(let i = 0; i < json.length; i++)
    {  
        let cover = json[i].cover;
        let nome_album = json[i].nome;
        let autore = json[i].autore;
        let data_uscita = json[i].data_uscita;
        let tracce_totali =  json[i].num_tracce;
        let id_album = json[i].id;
        let cuore_pieno = "./cuore_pieno.png";
        let crea_lista = "./aggiungi_in_lista.png";

        //creazione degli elementi
        let descrizione = document.createElement('div');
        descrizione.textContent = "Nome dell'album, nome dell'autore, data di uscita, numero tracce: ";

        let visualizza_album = document.createElement('div');
        visualizza_album.classList.add('visualizza_album');

        let visualizza_cover = document.createElement('img');
        visualizza_cover.src = cover;
        visualizza_cover.classList.add("cover")

        let nome = document.createElement('span');
        nome.textContent = nome_album;
        nome.classList.add("nome");

        let nome_autore = document.createElement('span');
        nome_autore.textContent = autore;
        nome_autore.classList.add("autore");

        let visualizza_data = document.createElement('span');
        visualizza_data.textContent = data_uscita;
        visualizza_data.classList.add("data");

        let visualizza_tracce = document.createElement('span');
        visualizza_tracce.textContent = tracce_totali;
        visualizza_tracce.classList.add("num_tracce");

    
        //serve l'identificativo dell'album per i preferiti

        let salva_id = document.createElement('p');
        salva_id.textContent = id_album;
        salva_id.classList.add("id");

        //mi piace e aggiungi in lista

        let visualizza_preferito = document.createElement('img');
        visualizza_preferito.src = cuore_pieno;
        
        let visualizza_crea_lista = document.createElement('img');
        visualizza_crea_lista.src = crea_lista;



         //inserimento degli elementi
         visualizza_album.appendChild(descrizione);
         visualizza_album.appendChild(visualizza_cover);
         visualizza_album.appendChild(nome);
         visualizza_album.appendChild(nome_autore);
         visualizza_album.appendChild(visualizza_data);
         visualizza_album.appendChild(visualizza_tracce);
         visualizza_album.appendChild(visualizza_preferito);
         visualizza_album.appendChild(visualizza_crea_lista);
         visualizza_album.appendChild(salva_id);
 
         container_album.appendChild(visualizza_album);

         visualizza_preferito.addEventListener("click", rimuovi_preferito);


    }

    //togliere dai preferiti:
  
    function rimuovi_preferito(event)
    {
      console.log("Elimina preferito...");

      const cuore = event.currentTarget;

      let album_selezionato = cuore.parentNode;
  
      let id_album = album_selezionato.querySelector("p.id");

      cuore.src = "./cuore_vuoto.png";

      fetch("rimuovi_preferito.php?id_album="+id_album.textContent);

      location.href = "./preferiti_struttura.php";


     

    }

}


//onResponse

function onResponse(response)
{
    return response.json();
}

//fetch alla pagina che carica i preferiti dalla tabella:

function fetch_carica_preferiti()
{
   // console.log("Entra");
    fetch("./carica_preferiti.php").then(onResponse).then(onJson);
}