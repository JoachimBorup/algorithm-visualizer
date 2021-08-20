const num_of_values = 50;
const sleep_time = 20;

let sortAlgorithm = new BubbleSort();
let shuffleAlgorithm = new KnuthShuffle();
let array = [];

function setupBars() {
    const chart = document.getElementById("chart");
    chart.innerHTML = "";

    const height = chart.clientHeight / num_of_values;
    const width = chart.clientWidth / num_of_values;
    
    for (let i = 0; i < num_of_values; i++) {
        const bar = createBar((i + 1) * height, width);
        chart.appendChild(bar);
        array[i] = i + 1;
    }
}

function shuffleBars() {
    shuffleAlgorithm.shuffle();
}

function sortBars() {
    sortAlgorithm.sort();
}

function createBar(height, width) {
    const bar = document.createElement("div");
    bar.className = "bar";
    
    bar.style.height = `${height}px`;
    bar.style.width = `${width}px`;

    return bar;
}

function setActive(id) {
    const topnav = document.getElementById("topnav").children;
    
    for (let i = 0; i < topnav.length; i++) {
        topnav[i].className = "";
    }

    const sort = document.getElementById(id);
    sort.className = "active";
}

function markBars(i, j) {
    markBar(i);
    markBar(j);
}

function markBar(i) {
    setBrightness(i, 0.75);
}

function unmarkBars(i, j) {
    unmarkBar(i);
    unmarkBar(j);
}

function unmarkBar(i) {
    setBrightness(i, 1);
}

function setBrightness(i, brightness) {
    const bars = document.getElementById("chart").children;
    bars[i].style.filter = `brightness(${brightness})`;
}

function getHeight(i) {
    return array[i];
}

function setHeight(i, height) {
    const chart = document.getElementById("chart");
    const heightMultiplier = chart.clientHeight / num_of_values;

    chart.children[i].style.height = `${height * heightMultiplier}px`;
    array[i] = height;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setBubble() {
   sortAlgorithm = new BubbleSort();
   setActive("bubble");
}

function setInsertion() {
    sortAlgorithm = new InsertionSort();
    setActive("insertion");
}

function setMerge() {
    sortAlgorithm = new MergeSort();
    setActive("merge");
}

function setQuick() {
    sortAlgorithm = new QuickSort();
    setActive("quick");
}

function setSelection() {
    sortAlgorithm = new SelectionSort();
    setActive("selection");
}

function setShell() {
    sortAlgorithm = new ShellSort();
    setActive("shell");
}