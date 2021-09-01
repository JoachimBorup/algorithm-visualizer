class MergeSort extends Sort {
    async sort() {
        this.aux = [];
        await this.sortHalves(0, num_of_values - 1);
    }

    async sortHalves(lo, hi) {
        if (hi <= lo) {
            return;
        }
    
        const mid = Math.floor(lo + (hi - lo) / 2);
        await this.sortHalves(lo, mid);
        await this.sortHalves(mid + 1, hi);
        await this.merge(lo, mid, hi);
    }

    async merge(lo, mid, hi) {
        let i = lo;
        let j = mid + 1;

        for (let k = lo; k <= hi; k++) {
            markBar(k);

            this.aux[k] = getHeight(k);
            
            await sleep(sleep_time);
            unmarkBar(k);
        }

        for (let k = lo; k <= hi; k++) {
            markBar(k);

            if (i > mid) {
                setHeight(k, this.aux[j++]);
            } else if (j > hi) {
                setHeight(k, this.aux[i++]);
            } else if (this.aux[i] > this.aux[j]) {
                setHeight(k, this.aux[j++]);
            } else {
                setHeight(k, this.aux[i++]);
            }

            await sleep(sleep_time);
            unmarkBar(k);
        }
    }
}