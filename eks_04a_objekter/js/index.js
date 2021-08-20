// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {



	//metode nr.1:
  // Array:
  //let names = ['Anders', 'Fedtmule', 'Mickey'];
  //let ulElement = document.querySelector('#liste');
  
  //Loop:
  //names.forEach((navn) => {
  //  ulElement.innerHTML += `<li> ${navn} </li>`;
  //});
  
  
  //Metode nr. 2:
  // Array:
  let names = ['Anders', 'Fedtmule', 'Mickey'];
  let names2 = ['Andersine', 'Rasmine', 'Minnie'];
  
  function myFunction(array) {
  //Loop:
  array.forEach((array) => {
	let ulElement = document.createElement('li');
	document.querySelector('#liste').appendChild(ulElement);
	ulElement.textContent = array;
	//ulElement.style.listStyle = 'none';
});
};  

myFunction(names);
myFunction(names2);
  
  
  
  
  
  
  //document.getElementById('liste').innerHTML = myFunction;
  
  
  }); // Afslutter: DOMContentLoaded