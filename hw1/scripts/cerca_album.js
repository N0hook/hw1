
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
        
        let visualizza_album = document.createElement('div');
        visualizza_album.classList.add('visualizza_album');

        let visualizza_cover = document.createElement('img');
        visualizza_cover.src = cover;

        let nome = document.createElement('span');
        nome.textContent = nome_album;

        let nome_autore = document.createElement('span');
        nome_autore.textContent = autore;

        let visualizza_data = document.createElement('span');
        visualizza_data.textContent = data_uscita;

        let visualizza_tracce = document.createElement('span');
        visualizza_tracce.textContent = tracce_totali;

        let visualizza_link = document.createElement('a');
        visualizza_link.href = link_spotify;
        visualizza_link.textContent="clicca qui";

        //mi piace e aggiungi in lista

        let visualizza_preferito = document.createElement('img');
        visualizza_preferito.src = cuore_vuoto;
        
        let visualizza_crea_lista = document.createElement('img');
        visualizza_crea_lista.src = crea_lista;
    
        //inserimento degli elementi
        visualizza_album.appendChild(visualizza_cover);
        visualizza_album.appendChild(nome);
        visualizza_album.appendChild(nome_autore);
        visualizza_album.appendChild(visualizza_data);
        visualizza_album.appendChild(visualizza_tracce);
        visualizza_album.appendChild(visualizza_link);
        visualizza_album.appendChild(visualizza_preferito);
        visualizza_album.appendChild(visualizza_crea_lista);

        dati_album.appendChild(visualizza_album);


//includere un album tra i preferiti dell'utente

        function aggiungi_preferito()
        {
           



        }

        //event_listener per il click del mi piace 

        visualizza_preferito.addEventListener("click", aggiungi_preferito);

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




