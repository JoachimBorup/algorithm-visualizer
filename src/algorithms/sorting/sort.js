class Sort {
    async less(i, j) {
        setBrightness(i, j, 0.75);
        await sleep(sleep_time);
        setBrightness(i, j, 1);
        
        return array[i] < array[j];
    }

    async exch(i, j) {
        await sleep(sleep_time);
        
        const temp = getHeight(i);
        setHeight(i, getHeight(j));
        setHeight(j, temp);
    }

    async sort() {
        throw new Error("Sorting algorithm not implemented!");
    }
}