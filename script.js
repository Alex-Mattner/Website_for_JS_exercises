'use strict';

var elements;
var texte;
var aufgaben;
var headers;

window.onload = (evt) => {





 elements = Array.from ( document.querySelectorAll('.aufgabennr') );
  texte = Array.from ( document.querySelectorAll('.text') );
  aufgaben = Array.from ( document.querySelectorAll('.aufgaben') );
  headers = Array.from ( document.querySelectorAll('.thema h2') );

  hoehen();

  elements.forEach ( element => {
    element.addEventListener("click", (event) => schliessen(event.target) );
  });
  
  headers.forEach ( element => {
    element.addEventListener("click", event => aufgabenSchliessen(event.target) );
  });

  document.querySelector('#closeall').addEventListener('click', evt => {
    var offene = Array.from ( document.querySelectorAll('.aufgabennr') );
	
	offene.forEach ( element => {
      if (element.classList.contains('offen')) schliessen(element);
    });
	
  });

}

window.onresize = () => {
	//hoehen();
}

const sichtbar = element => {
	let kind = element.children[1];
	
	if (kind.style.display == 'block') kind.style.display = 'none';
	else kind.style.display = 'block';
 
}

const schliessen = element => {
	element.parentNode.parentNode.style.height = 'auto';
	let elementText = element.parentNode.children[1];
	if (element.classList.contains('offen')) {
		element.classList.remove('offen');
		elementText.style.height = '0px';
	} else {
		element.classList.add('offen');
		elementText.style.height = elementText.hoehe + 'px';
	}
}

const aufgabenSchliessen = element => {
	let aufgaben = element.parentNode.querySelector('.aufgaben');
	if ( aufgaben.classList.contains ( 'offen' )){
		element.classList.remove ( 'offen' );
		aufgaben.classList.remove ( 'offen' );
		aufgaben.style.height = aufgaben.offsetHeight + 'px';
		setTimeout ( () => {
			aufgaben.style.height = '0px';
		}, 20 );
	} else {
		element.classList.add ( 'offen' );
		aufgaben.classList.add ( 'offen' );
		let h = 0;
		Array.from ( aufgaben.querySelectorAll('.aufgabe') ).forEach ( element => {
			h += element.offsetHeight + 10;
		});
		aufgaben.style.height = h + 'px';
	}
}

const hoehen = () => {
	
	console.log ( 'Hoehen' );
	texte.forEach ( element => element.hoehe = element.offsetHeight );
	aufgaben.forEach ( element => element.hoehe = element.offsetHeight );
	texte.forEach ( element => element.style.height = '0px' );
	
}
