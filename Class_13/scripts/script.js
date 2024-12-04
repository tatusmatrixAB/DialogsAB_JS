// https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbytagname/
// https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/

let btn = document.getElementById('btnCount');

/*
btn.addEventListener('click', () => {
    let headings = document.getElementsByTagName('h2');
    alert(`The number of H2 tags: ${headings.length}`);
});
*/
btn.addEventListener('click', () => {
    let headings = document.querySelectorAll('h2');
    alert(`The number of H2 tags: ${headings.length}`);
});

