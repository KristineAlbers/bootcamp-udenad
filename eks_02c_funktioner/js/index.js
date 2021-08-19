// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	// function navn(parameter) {
	function hils(navn) {
		//return 'Hej med dig, ' + navn;
		return `Hej med dig, ${navn}!`;
	}

	// Kalder:
	// navn('argument'):
	var hilsenFraOle = hils('Ole');
	console.log(hilsenFraOle);


}); // Afslutter: DOMContentLoaded