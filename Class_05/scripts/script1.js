const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("array_initial").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi`;

// cars[10] = "Renault"; - tā nedarām!
var N = cars.push("VW");
document.getElementById("array_push").innerHTML = `${cars} masīva izmērs - ${N} elementi`;

// delete nedarām
//delete cars[0];
//document.getElementById("array_delete").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi`;

var car_last = cars.pop();
document.getElementById("array_pop").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi (izdzēstais elements - ${car_last})`;

var car_first = cars.shift();
document.getElementById("array_shift").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi (izdzēstais elements - ${car_first})`;


