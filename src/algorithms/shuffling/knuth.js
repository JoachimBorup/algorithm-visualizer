class KnuthShuffle {
    async shuffle() {
        for (let i = 0; i < num_of_values; i++) {
            const r = Math.floor(Math.random() * (i + 1));
            await sortAlgorithm.exch(r, i);
        }
    }
}