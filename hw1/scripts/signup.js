// i controlli per la registrazione vanno fatti anche lato client

console.log("Pagina di registrazione caricata");

//controllo del nome:

function check_nome(event)
{
  const input_utente = event.currentTarget;

  if(!input_utente.value)
  {
    span.textContent = "Questo campo è obbligatorio";
    input.classList.add('errore'); 
    span.classList.add('visualizza_span');
    span.classList.remove('hidden');
    form[0]=0;
  }
  else
  {
    input.classList.remove('errore');
    span.classList.add('hidden');
    span.classList.remove('visualizza_span');
    form[0]++;
  }

  check_form_tot();

}


//controllo del nome:

function check_cognome(event)
{
  const input_utente = event.currentTarget;

  if(!input_utente.value)
  {
    span.textContent = "Questo campo è obbligatorio";
    input.classList.add('error'); 
    span.classList.add('visualizza_span');
    span.classList.remove('hidden');
    form[0]=0;
  }
  else
  {
    input.classList.remove('error');
    span.classList.add('hidden');
    span.classList.remove('visualizza_span');
    form[0]++;
  }

  check_form_tot();

}

//controllo del cognome:

function check_cognome(event)
{
  const input_utente = event.currentTarget;

  if(!input_utente.value)
  {
    span.textContent = "Questo campo è obbligatorio";
    input.classList.add('error'); 
    span.classList.add('visualizza_span');
    span.classList.remove('hidden');
    form[1]=0;
  }
  else
  {
    input.classList.remove('error');
    span.classList.add('hidden');
    span.classList.remove('visualizza_span');
    form[1]++;
  }

  check_form_tot();

}


//controllo dell'username

function check_username(event)
{
  const input_utente = event.currentTarget;

  if(!input_utente.value)
  {
    span.textContent = "Questo campo è obbligatorio";
    input.classList.add('error'); 
    span.classList.add('visualizza_span');
    span.classList.remove('hidden');
    form[2]=0;
  }
  else
  {
    input.classList.remove('error');
    span.classList.add('hidden');
    span.classList.remove('visualizza_span');
    form[2]++;
  }

  check_form_tot();

}


//controllo della mail

function check_email(event)
{
    const email_inserita = event.currentTarget;

    p = email_inserita.parentNode.parentNode.parentNode;

    span = p.querySelector('span');
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email.value).toLowerCase())) {
        checkForm();
        span.textContent="Email non valida";
        span.classList.add('spanvisible');
        span.classList.remove('spanhidden');
        email.classList.add('error');
        form[4]=0;
    } else {
        fetch("check_email.php?email="+encodeURIComponent(String(email.value).toLowerCase())).then(FetchResponse).then(jsonCheckEmail);
    }



}

//controllo password

function check_password(event)
{

    const input_utente = event.currentTarget;

    if(!input_utente.value)
    {
      span.textContent = "Questo campo è obbligatorio";
      input.classList.add('error'); 
      span.classList.add('visualizza_span');
      span.classList.remove('hidden');
      form[5]=0;
    }
    else
    {
      input.classList.remove('error');
      span.classList.add('hidden');
      span.classList.remove('visualizza_span');
      form[5]++;
    }
  
    check_form_tot();


}


//controllo password verifica

function check_password_conf(event)
{

    const input_utente = event.currentTarget;

    if(!input_utente.value)
    {
      span.textContent = "Questo campo è obbligatorio";
      input.classList.add('error'); 
      span.classList.add('visualizza_span');
      span.classList.remove('hidden');
      form[6]=0;
    }
    else
    {
      input.classList.remove('error');
      span.classList.add('hidden');
      span.classList.remove('visualizza_span');
      form[6]++;
    }
  
    check_form_tot();


}
//array di controllo, se i valori passano a uno il form corrispondente è stato riempito 

let controllo_riempimento = ["0", "0", "0", "0", "0", "0"];


//controlla se tutti i campi sono pieni:

function check_form_tot()
{
    let form_vuoti = 0;

    for(let input_utente in form_vuoti)
    {
        if(form_vuoti[input_utente] == 0)
        {
            form_vuoti++;
        }
    }

    if(form_vuoti==0)
    {
        submit.disabled=false;
    }
    else
    {
        submit.disabled=true;
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

