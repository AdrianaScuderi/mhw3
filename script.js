function aggiungiElementi() {
    for (let i of contenuti) {
        let elemento=document.createElement("div");
        elemento.setAttribute("class", "tr");

        let preferiti=document.createElement("a");
        preferiti.setAttribute("class", "prefe");

        let immPref=document.createElement("img");
        immPref.setAttribute("class", "cuore")
        immPref.src="img/star.png";

        let titolo=document.createElement("h1");
        let testo=document.createTextNode(i.titolo);
        titolo.appendChild(testo);
        preferiti.appendChild(titolo);
        preferiti.appendChild(immPref);

        let fototratt=document.createElement("img");
        fototratt.setAttribute("class", "fototrattamento");
        fototratt.src=i.immagine;

        let descr=document.createElement("p");
        descr.style.display= "none";
        let paragrafo=document.createTextNode(i.descrizione);
        descr.appendChild(paragrafo);

        let button=document.createElement("a");
        let span=document.createElement("span");
        let textspan=document.createTextNode("Mostra di più");
        span.appendChild(textspan);
        button.appendChild(span);

        elemento.appendChild(preferiti);
        elemento.appendChild(fototratt);
        elemento.appendChild(descr); 
        elemento.appendChild(button);
        trattamento.appendChild(elemento);  
        
        button.addEventListener("click", mostrad);
        preferiti.addEventListener("click", aggiungiPrefe);
    }
}

function cerca(Event){
    let filtro=Event.currentTarget.value.toUpperCase();
    let trat=trattamento.querySelectorAll(".tr");
    for (let c of trat){
        let titolo=c.querySelector("h1").textContent.toUpperCase(); 
        if (titolo.indexOf(filtro)>-1) {
            c.style.display="";
        } else c.style.display="none";
    }
}

function mostrad(Event) {
    let des=Event.currentTarget.parentNode.querySelector("p");
    let span2=Event.currentTarget.parentNode.querySelector("span");
    
    if (des.style.display === "none") {
        des.style.display="";
        span2.textContent="Mostra di meno";
    } else {
        des.style.display="none";
        span2.textContent="Mostra di più";
    }

}

function aggiungiPrefe(Event) {
    prefer.classList.remove("favorite");
    let t2=Event.currentTarget.parentNode.querySelector(".prefe h1").textContent;
    let ip2=Event.currentTarget.parentNode.querySelector(".fototrattamento").src;
    console.log(ip2);

    let boxprefe=document.createElement("div");
    boxprefe.setAttribute("class", "trattamentoprefe");

    let preferiti2=document.createElement("a");
    preferiti2.setAttribute("class", "prefe2");
    preferiti2.addEventListener("click", togliPreferiti);

    let immPref2=document.createElement("img");
    immPref2.src="img/prestar.png";
    let titolo2=document.createElement("h1");
    let testo2=document.createTextNode(t2);
    let fototratt2=document.createElement("img");
    fototratt2.src=ip2;

    titolo2.appendChild(testo2);
    preferiti2.appendChild(titolo2);
    preferiti2.appendChild(immPref2);
    boxprefe.appendChild(preferiti2);
    boxprefe.appendChild(fototratt2);
    prefer.appendChild(boxprefe);

    Event.currentTarget.removeEventListener("click", aggiungiPrefe);
}
 
 function togliPreferiti(Event){
    let trattam=document.querySelector(".trattamento");
    let click=Event.currentTarget.querySelector("h1").textContent;
    prefer.removeChild(Event.currentTarget.parentNode);
    let pref=prefer.querySelectorAll(".trattamentoprefe");
    let ListaContenuti=trattam.querySelectorAll(".tr");
    if (pref.length==0) {
        prefer.classList.add("hidden");
    }
    for (let d of ListaContenuti) {
        let z=d.querySelector("h1").textContent;
        console.log(z);
        console.log(click);
        if (z ===  click) {
            
            d.querySelector("a").addEventListener("click", aggiungiPrefe);
        }
    }

} 

const ricerca=document.querySelector(".search-txt");
ricerca.addEventListener("keyup", cerca);

const trattamento=document.querySelector(".trattamento");

const prefer=document.querySelector(".favorite");

aggiungiElementi();