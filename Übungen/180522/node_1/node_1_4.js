
/* Erzeuge die Ausgabe im Browser */

const chalk = require ( 'chalk' );
const http = require ( 'http' );

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
	
	get bezeichnung(){
		return this.marke + ' ' + this.modell;
	}
};

http.createServer ( (req, res) => {
	res.writeHead ( 200, {'Content-Type': 'text/html'});
	res.write ( '<div style="color:green">' + auto.bezeichnung + '</div>' );
	res.write ( '<div style="color:blue">' + auto.alter + '</div>' );
	res.write ( '<div style="color:magenta">' + auto.ps + '</div>' );
	res.end();
	
	console.log ( 'Alter: ' + chalk.red(auto.alter) );
	console.log ( 'Leistung in PS: ' + chalk.cyan ( auto.ps ) );
	console.log ( 'Bezeichnung: ' + chalk.green ( auto.bezeichnung ) );

}).listen(80);

console.log ( 'Server läuft' );


