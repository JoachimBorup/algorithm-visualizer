class Sort {
    async less(i, j) {
        markBars(i, j, 0.75);
        await sleep(sleep_time);
        unmarkBars(i, j, 1);
        
        return getHeight(i) < getHeight(j);
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