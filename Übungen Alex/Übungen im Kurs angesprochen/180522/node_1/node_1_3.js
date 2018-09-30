
const chalk = require ( 'chalk' );

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

console.log ( 'Alter: ' + chalk.red(auto.alter) );
console.log ( 'Leistung in PS: ' + chalk.cyan ( auto.ps ) );
console.log ( 'Bezeichnung: ' + chalk.green ( auto.bezeichnung ) );

