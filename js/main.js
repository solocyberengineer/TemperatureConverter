// F = (9/5 * C) + 32
// C = (F - 32)/(9/5)

function celciusToFahrenheit(degrees){
    return (9/5) * degrees + 32
}
function fahrenheitToCelcius(degrees){
    return (degrees - 32) / (9/5)
}

let title = document.getElementById('title');

// let celcius = document.querySelector('[data-submit="celcius"]');
// let fahrenheit = document.querySelector('[data-submit="fahrenheit"]');
let convert = document.querySelector('[data-submit="convert"]');
let selector = document.querySelector('select');

convert.onclick = function(){
    let degrees = document.querySelector('[data="output"]');
    let input = document.querySelector('[type="number"]');

    if( selector.value == 'fahrenheit' ){
        degrees.textContent = celciusToFahrenheit( parseInt(input.value) ) + ' ℉' ;
    }
    if( selector.value == 'celcius' ){
        degrees.textContent = fahrenheitToCelcius( parseInt(input.value) ) + ' ℃';
    }
}