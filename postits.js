/* postits.js
 *
 */

window.onload = init;

function init() {
	var button = document.getElementById("add_button");
	button.onclick = createSticky;

	// EJERCICIO A
	// cargar las notas postit de localStorage
	// cada nota se guarda como un par así: postit_X = texto_de_la_nota
	// donde X es el número de la nota
	// por cada una de ellas, llamar al método
	// addStickyToDOM(texto_de_la_nota);
	for(var i = 0; i < localStorage.length; i++){
		if(localStorage.key(i).startsWith("stik")){
			addStickyToDOM(localStorage.getItem(localStorage.key(i)));

		}
	}

	var clear = document.getElementById("clear");
	clear.onclick = clearStickyNotes;
}

function createSticky() {
	var value = document.getElementById("note_text").value;

	// EJERCICIO B
        // crear la nota con nombre postit_X, donde X es un número entero
	// (postit_1, postit_2, ...)  y guardarla en el localStorage

	addStickyToDOM(value);
	var prefijo = "stik";
	localStorage.setItem(prefijo.concat(value), value);
}


function addStickyToDOM(value) {
	var stickies = document.getElementById("stickies");
	var postit = document.createElement("li");
	var span = document.createElement("span");
	span.setAttribute("class", "postit");
	span.innerHTML = value;
	postit.appendChild(span);
	stickies.appendChild(postit);
}

function clearStickyNotes() {
	// EJERCICIO C
	// Crear un nuevo botón en la ventana de postit notes que al pulsarlo,
	// elimine las notas de pantalla y de localStorage
	// Algoritmo:
	// obtener una referencia a la capa "stickies"
	// recorrer los hijos (childNodes) de esa referencia,
	// eliminándolos uno a uno (removeChild)
	//localStorage.clear();
	for(var i = 0; i < localStorage.length; i++){
		if(localStorage.key(i).startsWith("stik")){
			localStorage.removeItem(localStorage.key(i));
		}
	}
	for(var i = 0; i < localStorage.length; i++){
		if(localStorage.key(i).startsWith("stik")){
			localStorage.removeItem(localStorage.key(i));
		}
	}

	location.reload();
}
