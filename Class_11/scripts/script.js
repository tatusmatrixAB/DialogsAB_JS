// https://www.javascripttutorial.net/javascript-bom/javascript-window/

var counter = 1;
var showCounter = () => console.log({ counter });

console.log(counter);
console.log(window.counter);

showCounter();
window.showCounter();

const inner_width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
console.log(window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth);
console.log("Pārlūka loga iekšējās daļas platums - "+inner_width);

const inner_height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;    
console.log(window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight);
console.log("Pārlūka loga iekšējās daļas augstums - "+inner_height);

const outer_width = window.outerWidth;
console.log("Pārlūka loga ārejās daļas platums - "+outer_width);

const outer_height = window.outerHeight;
console.log("Pārlūka loga ārējās daļas augstums - "+outer_height);

let url = 'http://127.0.0.1:5500/Class_07/';
let jsWindow = window.open(url,'Class_07');
