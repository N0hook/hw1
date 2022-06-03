//API di Spotify che fa visualizzare le classifiche aggiornate degli album 



//client id e client secret forniti dal sito:
const client_id_spotify = "123f96ba7bd24a1993af2da4199d44c3";
const client_secret_spotify = "8f91ae39665748ac9efb2006e6ea9e9c";
let token; //salva qui il token restituito da spotify


//event listener per spotify
const cerca = document.querySelector('#form_ricerca');
cerca.addEventListener('submit', cerca_classifiche);



function onTokenResponse(response){
    return response.json();
}

function onTokenJson(json){
    console.log(json);
    token = json;
}

//richiede il token a spotify
fetch("https://accounts.spotify.com/api/token",
{
    method: "post",
    body: 'grant_type=client_credentials',
    headers:
    {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(client_id_spotify + ':' + client_secret_spotify)
    }
}
).then(onTokenResponse).then(onTokenJson);


function onResult(response)
{
    return response.json();
}

//si fa restituire dall'api i dati
function onJson_risultati(json)
{
    dati_classifica.innerHTML = ''; // è vuoto all'inizio e quando si ricarica la pagina
    let max = json.albums.limit; //limit è 20 di default
    console.log(json); //controllo

    for (let i = 0; i < max; i++ )
    {
        let cover = json.albums.items[i].images[0].url;
        let nome_album = json.albums.items[i].name;
        let autore = json.albums.items[i].artists[0].name;
        let data_uscita = json.albums.items[i].release_date;
        let tracce_totali =  json.albums.items[i].total_tracks;
        let link_spotify = json.albums.items[i].external_urls.spotify;
        let posizione = i+1;       

        let descrizione = document.createElement('span');
        descrizione.textContent = "Nome dell'album, nome dell'autore, data di uscita, numero tracce: ";
        descrizione.classList.add("descrizione");

        let visualizza_album = document.createElement('div');
        visualizza_album.classList.add('visualizza_album');

        let visualizza_cover = document.createElement('img');
        visualizza_cover.src = cover;
        visualizza_cover.classList.add("cover")

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
        visualizza_link.textContent="Clicca qui per ascoltare l'album";
        visualizza_link.classList.add("link");

        let visualizza_posizione = document.createElement('span');
        visualizza_posizione.textContent = 'Posizione: ' + posizione;
        visualizza_posizione.classList.add("posizione")


        visualizza_album.appendChild(visualizza_posizione);
        visualizza_album.appendChild(visualizza_cover);
        visualizza_album.appendChild(descrizione);
        visualizza_album.appendChild(nome);
        visualizza_album.appendChild(nome_autore);
        visualizza_album.appendChild(visualizza_data);
        visualizza_album.appendChild(visualizza_tracce);
        visualizza_album.appendChild(visualizza_link);
 
        dati_classifica.appendChild(visualizza_album);
    }
    

}


// utilizza il token di accesso
function cerca_classifiche(event)
{
    event.preventDefault();

    const cerca_classifica = document.querySelector("#cerca_classifica").value;
    const text_encode = encodeURIComponent(cerca_classifica);
    
    //faccio così perché il link per ottenere i dati è diverso in base alla specifica o meno del paese per cui cerca la top uscite
    const url_paese = "https://api.spotify.com/v1/browse/new-releases?country=";
    const url_globale = "https://api.spotify.com/v1/browse/new-releases?"

  
    if(text_encode.toLowerCase() != "globale")
    {
        fetch(url_paese + text_encode, 
            {
                
                headers:
                {
                    'Authorization': 'Bearer ' + token.access_token 
                }
            }

        ).then(onResult).then(onJson_risultati);
    }
    else
    {
        fetch(url_globale,
            {
                
                headers:
                {
                    'Authorization': 'Bearer ' + token.access_token 
                }
            }

        ).then(onResult).then(onJson_risultati);

    }
}

