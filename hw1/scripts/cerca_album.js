
//event listener
const ricerca = document.querySelector("#form_ricerca");
form_ricerca.addEventListener("submit" , cerca_album);

function onResult(response)
{
    return response.json();
}

function onJson_risultati(json)
{
    console.log(json); //prova


    dati_album.innerHTML = ''; // è vuoto all'inizio e quando si ricarica la pagina
    let max = json.albums.limit; //limit è 20 di default

    for(let i = 0; i < max; i++)
    {
        let cover = json.albums.items[i].images[0].url;
        let nome_album = json.albums.items[i].name;
        let autore = json.albums.items[i].artists[0].name;
        let data_uscita = json.albums.items[i].release_date;
        let tracce_totali =  json.albums.items[i].total_tracks;
        let link_spotify = json.albums.items[i].external_urls.spotify;
        let id_album = json.albums.items[i].id;
      
    
        let cuore_vuoto = "./cuore_vuoto.png";
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

        let visualizza_link = document.createElement('a');
        visualizza_link.href = link_spotify;
        visualizza_link.textContent="Clicca qui per ascoltare l'album";

        //serve l'identificativo dell'album per i preferiti

        let salva_id = document.createElement('p');
        salva_id.textContent = id_album;
        salva_id.classList.add("id");

        //mi piace e aggiungi in lista

        let visualizza_preferito = document.createElement('img');
        visualizza_preferito.src = cuore_vuoto;
        
        let visualizza_crea_lista = document.createElement('img');
        visualizza_crea_lista.src = crea_lista;
    
        //inserimento degli elementi
        visualizza_album.appendChild(descrizione);
        visualizza_album.appendChild(visualizza_cover);
        visualizza_album.appendChild(nome);
        visualizza_album.appendChild(nome_autore);
        visualizza_album.appendChild(visualizza_data);
        visualizza_album.appendChild(visualizza_tracce);
        visualizza_album.appendChild(visualizza_link);
        visualizza_album.appendChild(visualizza_preferito);
        visualizza_album.appendChild(visualizza_crea_lista);
        visualizza_album.appendChild(salva_id);

        dati_album.appendChild(visualizza_album);

//preferiti dell'utente:

visualizza_preferito.addEventListener("click", controllo_like);
  }
}

let check_like = false; //serve a vedere se è stato messo like o meno, inizialmente no

//aggiungere l'album alla tabella preferiti dell'utente:

        function aggiungi_preferito(preferito)
        {
          console.log("vuoto"); //controllo
        
          let album_selezionato = preferito.parentNode;
      
          let id_album = album_selezionato.querySelector("p.id");
          let cover = album_selezionato.querySelector("img.cover");
          let nome = album_selezionato.querySelector("span.nome"); 
          let autore = album_selezionato.querySelector("span.autore");
          let data = album_selezionato.querySelector("span.data");
          let tracce = album_selezionato.querySelector("span.num_tracce");

          preferito.src = "./cuore_pieno.png";


          fetch("aggiungi_album.php?id="+ id_album.textContent + '&cover=' + cover.src + '&nome=' + nome.textContent + '&autore=' + autore.textContent + '&data_uscita=' + data.textContent + '&num_tracce=' + tracce.textContent)
          .then(function () {
            fetch("aggiungi_preferito.php?id_album="+id_album.textContent)});

            check_like = true;


        }

//rimuovere l'album dalla tabella dei preferiti dell'utente

        function rimuovi_preferito(preferito)
        {
          console.log("pieno"); //controllo
        
          let album_selezionato = preferito.parentNode;
      
          let id_album = album_selezionato.querySelector("p.id");

          fetch("rimuovi_preferito.php?id_album="+id_album.textContent);

          preferito.src = "./cuore_vuoto.png";

          check_like = false;

        }

     
 


      function controllo_like(event)
      {
        const cuore = event.currentTarget;
        
        if(check_like == false)
        {
          aggiungi_preferito(cuore);
          return;
        }

        if(check_like == true)
        {
          rimuovi_preferito(cuore);
          return;
  
        }

      }
  

//album cercato dall'utente

function cerca_album(event)
{
    event.preventDefault();

    const cerca_album = document.querySelector("#nome_album").value;
    const text_encode = encodeURIComponent(cerca_album);

    fetch("cerca_album.php?album=" + text_encode).then(onResult).then(onJson_risultati);
   
}
