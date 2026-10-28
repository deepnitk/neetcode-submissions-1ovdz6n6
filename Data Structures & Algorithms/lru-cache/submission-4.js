class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.hm = new Map();
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.hm.has(key)) {
            return -1;
        }

        const value = this.hm.get(key);
        this.hm.delete(key);
        this.hm.set(key, value);
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.hm.has(key)) {
            this.hm.delete(key);
        } else if (this.hm.size >= this.capacity) {
            const firstKey = this.hm.keys().next().value;
            this.hm.delete(firstKey);
        }
        this.hm.set(key, value);
    }
}
