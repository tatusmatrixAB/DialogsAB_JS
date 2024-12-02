var agent = "";

if (navigator.userAgent.includes("Chrome")) {
  agent = "Chrome";
} else {
  agent = "nonChrome";
}

const query = "?agent=" + agent;
const url = location.origin + location.pathname + query;

// tā nedaram! - būs mūžīga rekursija :-)
// location = url;

navigator.getBattery().then((battery) => {
    console.log(battery.charging);
    console.log(battery.level);
})

