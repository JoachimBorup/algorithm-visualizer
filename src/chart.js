const num_of_values = 50;
const sleep_time = 20;

let algorithm = new BubbleSort();

function shuffleBars() {
    const chart = document.getElementById("chart");
    chart.innerHTML = "";

    const height = chart.clientHeight / num_of_values;
    const width = chart.clientWidth / num_of_values;
    const arr = createArr(num_of_values);
    
    for (let i = 0; i < num_of_values; i++) {
        const bar = createBar((num_of_values - arr[i]) * height, width);
        chart.appendChild(bar);
    }
}

function sortBars() {
    algorithm.sort();
}

function createBar(height, width) {
    const bar = document.createElement("div");
    bar.className = "bar";
    
    bar.style.height = `${height}px`;
    bar.style.width = `${width}px`;

    return bar;
}

function createArr(length) {
    const arr = [];

    for (let i = 0; i < length; i++) {
        arr.push(i);
    }

    shuffle(arr);

    return arr;
}

// https://stackoverflow.com/a/2450976/15207402
function shuffle(arr) {
    let currentIndex = arr.length;
    let randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        const temp = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temp;
    }
  
    return arr;
}

function setActive(id) {
    const topnav = document.getElementById("topnav").children;
    
    for (let i = 0; i < topnav.length; i++) {
        topnav[i].className = "";
    }

    const sort = document.getElementById(id);
    sort.className = "active";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setBubble() {
   algorithm = new BubbleSort();
   setActive("bubble");
}