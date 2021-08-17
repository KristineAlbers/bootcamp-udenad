
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

    let textCount = document.querySelector('#text-count');
    let number = 5;
    updateNumber();
    
    //Funktion plusknap
    var btn = document.getElementById('btn-count-increase');
    btn.addEventListener('click', () => {
        if(number < 10){
        number++;
        updateNumber();
}});

    //Funktion minusknap
    var btnM = document.getElementById('btn-count-decrease');
    btnM.addEventListener('click', () => {
        if(number > 0){
        number--;
        updateNumber();
}});

    //function der kan erstatte linjerne med: textCount.textContent = number;
    function updateNumber(){
        textCount.textContent = number;
    }


}); // Afslutter: DOMContentLoaded