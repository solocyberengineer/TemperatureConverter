// F = (9/5 * C) + 32
// C = (F - 32)/(9/5)

function celciusToFahrenheit(degrees){
    return (9/5) * degrees + 32
}
function fahrenheitToCelcius(degrees){
    return (degrees - 32) / (9/5)
}

let title = document.getElementById('title');

let celcius = document.querySelector('[data-submit="celcius"]');
let fahrenheit = document.querySelector('[data-submit="fahrenheit"]');
let convert = document.querySelector('[data-submit="convert"]');

convert.setAttribute('conversion', 'fahrenheit')

celcius.onclick = function(){
    title.textContent = 'Farenheit To Celcius'
    convert.setAttribute('conversion', 'celcius')
}
fahrenheit.onclick = function(){
    title.textContent = 'Celcius To Fahrenheit'
    convert.setAttribute('conversion', 'fahrenheit')
}
convert.onclick = function(){
    let degrees = document.querySelector('[data="output"]');
    let input = document.querySelector('[type="number"]');

    if( convert.getAttribute('conversion') == 'fahrenheit' ){
        degrees.textContent = celciusToFahrenheit( parseInt(input.value) );
    }
    if( convert.getAttribute('conversion') == 'celcius' ){
        degrees.textContent = fahrenheitToCelcius( parseInt(input.value) );
    }
}