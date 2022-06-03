
//response

function onResponseContenuti(response)
{
    return  response.json();
}

//utilizza i dati della tabella contenuti per riempire i campi HTML
function onJsonContenuti(json)
{

 // const container = document.querySelectorAll(".container");
  const descrizione = document.querySelectorAll("p");
 // const link = document.querySelectorAll("a");
  const foto = document.querySelectorAll("img");

  for(let i = 0; i < json.length; i++)
  {
    let testo = json[i].testo;
    //let bottone = json[i].bottone;
    let immagine = json[i].immagine;
   
    descrizione[i].textContent = testo;
   // link[i].textContent = bottone;
    foto[i].src = immagine;
    
    //container[i].appendChild(descrizione[i], foto[i]);

  }
}


//fetch per caricare i blocchi nella home 

function fetch_contenuti_home()
{
  console.log("Carica blocchi");
  fetch("carica_home.php").then(onResponseContenuti).then(onJsonContenuti);
}

fetch_contenuti_home();


