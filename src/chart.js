let num_of_values;
let sleep_time;

let sortAlgorithm = new QuickSort();
let shuffleAlgorithm = new KnuthShuffle();
let array = [];

function setup() {
    setupRanges();
    setupBars();
    shuffleBars();
}

function setupBars() {
    const chart = document.getElementById("chart");
    chart.innerHTML = "";
    array = [];

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

function setupRanges() {
    const speed_slider = document.getElementById("speedSlider");
    const amount_slider = document.getElementById("amountSlider");
    setSpeed(speed_slider.value);
    setAmount(amount_slider.value);

    speed_slider.oninput = function() {
        setSpeed(this.value);
    }

    amount_slider.oninput = function() {
        setAmount(this.value);
    }
}

function setSpeed(value) {
    const speed_text = document.getElementById("speed");

    switch (value) {
        case "1":
            speed_text.innerHTML = "0.25x";
            sleep_time = 100;
            break;
        case "2":
            speed_text.innerHTML = "0.5x";
            sleep_time = 50;
            break;
        case "3":
            speed_text.innerHTML = "1x";
            sleep_time = 25;
            break;
        case "4":
            speed_text.innerHTML = "2x";
            sleep_time = 10;
            break;
        case "5":
            speed_text.innerHTML = "4x";
            sleep_time = 1;
            break;
    }
}

function setAmount(value) {
    const amount_text = document.getElementById("amount");
    amount_text.innerHTML = value;

    num_of_values = parseInt(value);
    setupBars();
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