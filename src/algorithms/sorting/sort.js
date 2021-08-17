class Sort {
    async less(i, j) {
        const bars = document.getElementById("chart").children;
    
        bars[i].style.filter = "brightness(0.75)";
        bars[j].style.filter = "brightness(0.75)";
        await sleep(sleep_time);
        bars[i].style.filter = "brightness(1)";
        bars[j].style.filter = "brightness(1)";
    
        return bars[i].clientHeight < bars[j].clientHeight;
    }

    async exch(i, j) {
        const bars = document.getElementById("chart").children;
        await sleep(10);

        const temp = bars[i].style.height;
        bars[i].style.height = bars[j].style.height;
        bars[j].style.height = temp;
    }

    async sort() {
        throw new Error("Sorting algorithm not implemented!");
    }
}