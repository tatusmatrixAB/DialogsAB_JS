// https://www.javascripttutorial.net/javascript-bom/javascript-window/

var counter = 1;
var showCounter = () => console.log({ counter });

console.log(counter);
console.log(window.counter);

showCounter();
window.showCounter();

const inner_width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
console.log(
  window.innerWidth,
  document.documentElement.clientWidth,
  document.body.clientWidth
);
console.log("Pārlūka loga iekšējās daļas platums - " + inner_width);

const inner_height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
console.log(
  window.innerHeight,
  document.documentElement.clientHeight,
  document.body.clientHeight
);
console.log("Pārlūka loga iekšējās daļas augstums - " + inner_height);

const outer_width = window.outerWidth;
console.log("Pārlūka loga ārejās daļas platums - " + outer_width);

const outer_height = window.outerHeight;
console.log("Pārlūka loga ārējās daļas augstums - " + outer_height);

//let url = 'http://127.0.0.1:5500/Class_07/';
//let jsWindow = window.open(url,'Class_07');
//pārlūka "fokusa" pārslēgšana uz tikko atvērto tabu/logu
//window.focus();

// drošības pēc lokālu failu aplūkošana ir bloķēta
//let url = 'file:///C:/Users/Tatjana/Downloads/DialogsAB/DialogsAB_JS_V/DialogsAB_JS/Class_10/index.html';
//let jsWindow = window.open(url,'local');


/*
let jsWindow = window.open(
  //"https://rtu.lv",
  "http://127.0.0.1:5500/Class_08/index.html",
  //"RTU",
  "Class07",
  "height=600,width=800"
);

setTimeout(() => {
  jsWindow.resizeTo(600, 300);
}, 3000);

setTimeout(() => {
    jsWindow.moveBy(20,-50);
}, 4000);

setTimeout(() => {
    jsWindow.close();
}, 10000);
*/

// https://www.javascripttutorial.net/javascript-bom/javascript-alert/
//alert("Cienījamais lietotāj, tulīt mēs tevi infoemēsim par ...");

// https://www.javascripttutorial.net/javascript-bom/javascript-confirm/
//let result = window.confirm("Jā vai nē?");
//let message = result ? "Jūs nospiedāt OK pogu" : 'Jūs nospiedāt Cancel pogu';
//alert(message);

// https://www.javascripttutorial.net/javascript-bom/javascript-prompt/
let lang = prompt('What is your favorite programming language?');

let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` :
    `It's ${lang}`;

alert(feedback);


