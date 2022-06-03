// i controlli per la registrazione vanno fatti anche lato client

console.log("Pagina di registrazione caricata");

//controllo del nome:

function check_nome(event)
{
  const input_utente = event.currentTarget;
  const p = input.parentNode.parentNode;
  span = p.querySelector('span');

  if(!input_utente.value)
  {
    span.textContent = "Questo campo è obbligatorio";
    input.classList.add('errore'); 
    span.classList.add('visualizza_span');
    span.classList.remove('hidden');
    controllo_riempimento[0] = 0;
  }
  else
  {
    input.classList.remove('errore');
    span.classList.add('hidden');
    span.classList.remove('visualizza_span');
    controllo_riempimento[0]++;
  }

  check_form_tot();

}


//controllo del nome:

function check_cognome(event)
{
  const input_utente = event.currentTarget;
  const p = input.parentNode.parentNode;
  span = p.querySelector('span');


  if(!input_utente.value)
  {
    span.textContent = "Questo campo è obbligatorio";
    input.classList.add('error'); 
    span.classList.add('visualizza_span');
    span.classList.remove('hidden');
    controllo_riempimento[1] = 0;
  }
  else
  {
    input.classList.remove('error');
    span.classList.add('hidden');
    span.classList.remove('visualizza_span');
    controllo_riempimento[1]++;
  }

  check_form_tot();

}



//controllo dell'username

function check_username(event)
{
  const input_utente = event.currentTarget;
  const p = input.parentNode.parentNode;
  span = p.querySelector('span');


  if(!input_utente.value)
  {
    span.textContent = "Questo campo è obbligatorio";
    input.classList.add('error'); 
    span.classList.add('visualizza_span');
    span.classList.remove('hidden');
    controllo_riempimento[2]=0;
  }
  else
  {
    input.classList.remove('error');
    span.classList.add('hidden');
    span.classList.remove('visualizza_span');
    controllo_riempimento[2]++;
  }

  check_form_tot();

}


//controllo della mail

function check_email(event)
{
  const input_utente = event.currentTarget;
  const p = input.parentNode.parentNode;
  span = p.querySelector('span');


    if(!input_utente.value)
    {
      span.textContent = "Questo campo è obbligatorio";
      input.classList.add('error'); 
      span.classList.add('visualizza_span');
      span.classList.remove('hidden');
      controllo_riempimento[3] = 0;
    }
    else
    {
      input.classList.remove('error');
      span.classList.add('hidden');
      span.classList.remove('visualizza_span');
      controllo_riempimento[3]++;
    }
  
    check_form_tot();
    


}

//controllo password

function check_password(event)
{

    const input_utente = event.currentTarget;
    const p = input.parentNode.parentNode;
    span = p.querySelector('span');


    if(!input_utente.value)
    {
      span.textContent = "Questo campo è obbligatorio";
      input.classList.add('error'); 
      span.classList.add('visualizza_span');
      span.classList.remove('hidden');
      controllo_riempimento[4] = 0;
    }
    else
    {
      input.classList.remove('error');
      span.classList.add('hidden');
      span.classList.remove('visualizza_span');
      controllo_riempimento[4]++;
    }
  
    check_form_tot();

}


//controllo password verifica

function check_password_conf(event)
{

    const input_utente = event.currentTarget;
    const p = input.parentNode.parentNode;
    span = p.querySelector('span');


    if(!input_utente.value)
    {
      span.textContent = "Questo campo è obbligatorio";
      input.classList.add('error'); 
      span.classList.add('visualizza_span');
      span.classList.remove('hidden');
      controllo_riempimento[5]=0;
    }
    else
    {
      input.classList.remove('error');
      span.classList.add('hidden');
      span.classList.remove('visualizza_span');
      controllo_riempimento[5]++;
    }
  
    check_form_tot();


}
//array di controllo, se i valori passano a uno il form corrispondente è stato riempito 

let controllo_riempimento = ["0", "0", "0", "0", "0", "0"];


//controlla se tutti i campi sono pieni:

function check_form_tot()
{
    let form_vuoti = 0;

    for(let input_utente in controllo_riempimento)
    {
        if(controllo_riempimento[input_utente] == 0)
        {
            form_vuoti++;
        }
    }

    if(form_vuoti==0)
    {
        submit.disabled = false;
    }
    else
    {
        submit.disabled = true;
    }

}



//attiva gli event listener per i form:

document.querySelector('.nome_utente input').addEventListener('blur', check_nome);
document.querySelector('.cognome_utente input').addEventListener('blur', check_cognome);
document.querySelector('.username_utente input').addEventListener('blur',check_username);
document.querySelector('.email_utente input').addEventListener('blur',check_email);
document.querySelector('.password_utente').addEventListener('blur',check_password);
document.querySelector('.conferma_password_utente input').addEventListener('blur',check_password_conf);


//fino a quando non si riempiono tutti i campi non si può continuare

const submit = document.querySelector('.submit');
submit.disabled = true;

