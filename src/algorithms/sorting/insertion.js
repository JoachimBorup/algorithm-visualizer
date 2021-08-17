class InsertionSort extends Sort {
    async sort() {
        for (let i = 1; i < num_of_values; i++) {
            for (let j = i; j > 0 && await super.less(j, j - 1); j--) {
                await super.exch(j, j - 1);
            }
        }
    }
}