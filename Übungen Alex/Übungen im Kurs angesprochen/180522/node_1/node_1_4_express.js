
/* Erzeuge die Ausgabe im Browser */

const chalk = require ( 'chalk' );
const express = require ( 'express' );
const server = express();

let auto = {
	marke: 'Horch',
	modell: '10 M 20',
	kw: 25.7,
	baujahr: 1923,
	
	get alter(){
		return new Date().getFullYear() - this.baujahr;
	},
	
	get ps(){
		return Math.floor ( this.kw / .73 * 10 ) / 10;
	},
	
	set ps(wert){
		this.kw = wert * .73;
	},
	
	get bezeichnung(){
		return this.marke + ' ' + this.modell;
	}
};

server.get ( '/horch', (req, res) => {
	
	let ausgabe = '<div style="color:green">' + auto.bezeichnung + '</div>';
	ausgabe += '<div style="color:blue">' + auto.alter + '</div>';
	ausgabe += '<div style="color:magenta">' + auto.ps + '</div>';
	
	res.send ( ausgabe );
	
	console.log ( 'Horch' );
});

server.get ( '/aendern', (req, res) => {
	
	auto.ps = 100;
	
	res.send ( 'OK' );
	
	console.log ( 'geändert' );
});

server.listen(80);


console.log ( 'Server läuft' );


