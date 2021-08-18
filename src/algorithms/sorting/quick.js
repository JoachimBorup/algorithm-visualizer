class QuickSort extends Sort {
    async sort() {
        await this.sortHalves(0, num_of_values - 1);
    }

    async sortHalves(lo, hi) {
        if (hi <= lo) {
            return;
        }
    
        let j = await this.partition(lo, hi);
        await this.sortHalves(lo, j - 1);
        await this.sortHalves(j + 1, hi);
    }

    async partition(lo, hi) {
        let i = lo;
        let j = hi + 1;
    
        while (true) {
            while (await super.less(++i, lo)) {
                if (i == hi) {
                    break;
                }
            }
    
            while (await super.less(lo, --j)) {
                if (j == lo) {
                    break;
                }
            }
    
            if (i >= j) {
                break;
            }
    
            await super.exch(i, j);
        }
    
        await super.exch(lo, j);
        return j;
    }
}