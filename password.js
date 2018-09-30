'use strict'


let clickMe = () => {
	let myInput = prompt('Bitte Passwort eingeben:\nmindestens einen Kleinbuchstaben\neinen Großbuchstaben\nund eine Zahl', 'Eingabe');
	
	const LOWER_CASE_LETTERS = /[a-z]/g;
const NUMBERS = /[0-9]/g;
const UPPER_CASE_LETTERS = /[A-Z]/g;


	if ( myInput.match(LOWER_CASE_LETTERS)){	
		if ( myInput.match(UPPER_CASE_LETTERS)){
			if ( myInput.match(NUMBERS)){
				console.log('hallo');
				alert('Passwort ist korrekt - die Lösung musst du dir vorerst selber denken');
			} else {
				alert('Zahlen fehlen');
			}
		} else {
			alert('Großbuchstaben fehlen');
		}
	} else {
		alert('Kleinbuchstaben fehlen');
	}
}

