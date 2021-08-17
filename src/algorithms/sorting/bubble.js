class BubbleSort extends Sort {
    async sort() {
        for (let i = 1; i < num_of_values; i++) {
            for (let j = 0; j < num_of_values - i; j++) {
                if (!await super.less(j, j + 1)) {
                    await super.exch(j, j + 1);
                }
            }
        }
    }
}