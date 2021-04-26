 /* Con questa funzione carico gli elementi all'interno del sito e creo gli spazi dove mettere le informazioni */ 
 
 function aggiungiElementi(json) {
   prodotto.innerHTML = ''; /*Quando la barra di ricerca è vuota, tutti i prodotti scompaiono */
   for (let i of json) {
     let elemento=document.createElement("div");
      elemento.setAttribute("class", "pr");

     let titolo=document.createElement("h1");
     let testo=document.createTextNode(i.name);
      titolo.appendChild(testo);
      elemento.appendChild(titolo);

     let fotoprodotto=document.createElement("img");
      fotoprodotto.setAttribute("class", "fotopr");
      fotoprodotto.src=i.image_link;
     let descr=document.createElement("p");
     let paragrafo=document.createTextNode('€ '+i.price);
      descr.appendChild(paragrafo);
      elemento.appendChild(fotoprodotto);
      elemento.appendChild(descr); 
      prodotto.appendChild(elemento);
    }
  }

  function search(event) {
   event.preventDefault(); 
   const content = document.querySelector('#barraricerca').value;
   /* Verifico che il testo all'interno della barra di ricerca sia stato letto, ed eseguo la fetch */
   if(content) {
 	   const text = encodeURIComponent(content);
	   console.log('Eseguo ricerca elementi riguardanti: ' + text);
     fetch ("http://makeup-api.herokuapp.com/api/v1/products.json?brand=l'oreal&product_type="+content)
        .then(onResponse)
        .then(onJson);
    }
	 else {
	   alert("Non hai inserito nessuna ricerca!");
  	}
  }


 function onResponse(response){
   return response.json();
  }

 function onJson(json) {
   aggiungiElementi(json);
  }


 // Aggiungo event listener al form per la RICERCA
 const form = document.querySelector('#search_content');
 form.addEventListener('submit', search)

 const prodotto=document.querySelector(".prodotto");