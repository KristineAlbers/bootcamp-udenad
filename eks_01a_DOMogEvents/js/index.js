
// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

    
    let minValue = 0;
    let number = 5;
    let maxValue = 10;
    let plusBotton = document.querySelector('#btn-count-increase');
    let minusBotton = document.querySelector('#btn-count-decrease');
    let textCountElement = document.querySelector('#text-count');
 
    function updateNumber() {
        textCountElement.textContent = number;
    }
    updateNumber();

    function checkMinMaxValue(direction) {
        if (direction === 'inc') {
            if (number < maxValue) {
                number++;
                updateNumber();
            }
        }
        else if (direction === 'dec') {
            if (number > minValue) {
                number--;
                updateNumber();
            }
        }
    }
    
    plusBotton.addEventListener('click', () => checkMinMaxValue('inc'));
    minusBotton.addEventListener('click', () => checkMinMaxValue('dec'));


}); // Afslutter: DOMContentLoaded