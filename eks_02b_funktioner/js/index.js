// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	// function navn(parameter) {
	function hils(navn) {
		console.log(`Hej med dig ${navn}`);
		console.log(`Hej med dig
		
	${navn}`);
	}

	// Kalder:
	// navn('argument'):
	hils('Kristine ');
	hils('Maggi ');
	hils('Joey ');


	/*
	// function navn(parameter) {
		function hils(navn, efternavn) {
			console.log('Hej med dig, ' + navn + efternavn);
		};
		// Kalder:
		// navn('argument'):
		hils('Kristine ', 'Albers');
	*/	
	

}); // Afslutter: DOMContentLoaded