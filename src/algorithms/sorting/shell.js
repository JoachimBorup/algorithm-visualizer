class ShellSort extends Sort {
    async sort() {
        let h = 1;

        while (h < num_of_values / 3) {
            h = 3 * h + 1;
        }

        while (h >= 1) {
            for (let i = h; i < num_of_values; i++) {
                for (let j = i; j >= h && await super.less(j, j - h); j -= h) {
                    await super.exch(j, j - h);
                }
            }

            h = Math.floor(h / 3);
        }
    }
}