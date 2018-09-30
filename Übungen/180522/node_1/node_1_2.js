
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

console.log ( auto.alter );
console.log ( auto.ps );
console.log ( auto.bezeichnung );

