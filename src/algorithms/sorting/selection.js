class SelectionSort extends Sort {
    async sort() {
        for (let i = 0; i < num_of_values; i++) {
            let min = i;

            for (let j = i + 1; j < num_of_values; j++) {
                if (await super.less(j, min)) {
                    min = j;
                }
            }

            await super.exch(i, min);
        }
    }
}