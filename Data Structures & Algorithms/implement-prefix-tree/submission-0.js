class Node {
    constructor() {
        this.children = new Array(26).fill(null);
        this.endOfWord = false;
    }
}
class PrefixTree {
    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for (let c of word) {
            let i = c.charCodeAt(0) - 97;
            if (curr.children[i] === null) {
                curr.children[i] = new Node();
            }
            curr = curr.children[i];
        }
        curr.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        for (let c of word) {
            let i = c.charCodeAt(0) - 97;
            if (curr.children[i] === null) {
                return false;
            }
            curr = curr.children[i];
        }
        return curr.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(word) {
        let curr = this.root;
        for (let c of word) {
            let i = c.charCodeAt(0) - 97;
            if (curr.children[i] === null) {
                return false;
            }
            curr = curr.children[i];
        }
        return true;
    }
}
