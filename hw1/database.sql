CREATE DATABASE dati_sito
    DEFAULT CHARACTER SET = 'utf8mb4';

    
    /*crea la tabella in cui caricare i blocchio di contenuto che verranno visualizzati dalla home*/
CREATE TABLE contenuti (

id integer primary key,
testo text not null, 
immagine varchar(255) not null
);

/* drop table contenuti; */

INSERT INTO contenuti values (1, "Accedi alla nostra libreria, e scopri tutte le informazioni che ti servono su un album musicale. Potrai leggere le informazioni di base, 
            la sua disponibilità nei siti di streaming e di vendita, e aggiungerlo alla lista dei tuoi preferiti per tenere sempre traccia
            delle tue preferenze", "immagini/negozio_dischi.jpg" );

INSERT INTO contenuti values (2, "Controlla le ultime uscite e rimani sempre aggiornato sugli ultimi album usciti o appena annunciati", "immagini/nuove_uscite.jpg");

INSERT INTO contenuti values (3, "Crea liste di album in base alle tue esigenze, o modifica quelle esistenti aggiungendo le tue nuove scoperte", "immagini/vinili.jpg");

INSERT INTO contenuti values (4, "Collega il tuo account a quello di un servizio di streaming musicale, e mantieni sincronizzati i tuoi preferiti", "immagini/loghi_app.jpg");


/*select * from contenuti; */



CREATE TABLE utenti (

 nome varchar(255),
 cognome varchar(255),
 username varchar(255) primary key, 
 email varchar(255),
 password varchar(255)
);


/* drop TABLE utenti; */

/* select * from utenti; */

create table album (

id int primary key, 
cover varchar(255),
nome varchar(255),
autore varchar(255), 
data_uscita date,
num_tracce int

);

/* drop TABLE album; */

create table preferiti (

nome_utente varchar(255),
id_album int,

primary key(nome_utente, id_album),

index utente(nome_utente),
index album(id_album),

foreign key(nome_utente) references utenti(username),
foreign key(id_album) references album(id)
);


/* drop TABLE preferiti; */

