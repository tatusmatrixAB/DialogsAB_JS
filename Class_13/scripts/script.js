// https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbytagname/
// https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/

let btn = document.getElementById('btnCount');

// var headings;

btn.addEventListener('click', () => {
    let headings = document.getElementsByTagName('h2');
    alert(`The number of H2 tags (counted by getElementsByTagName): ${headings.length}`);
});

/*
btn.addEventListener('dblclick', () => {
    let headings = document.querySelectorAll('h2');
    alert(`The number of H2 tags (counted by querySelectorAll): ${headings.length}`);
});
*/

// -----------------------------------------------------------------------------------------
// https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbyclassname/
// https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/

let menu = document.getElementById('menu');
// let items = menu.getElementsByClassName('case1');
 let items = menu.querySelectorAll('.case1');
console.log(items);

let data = [].map.call(items, (item) => item.textContent);
console.log(data);