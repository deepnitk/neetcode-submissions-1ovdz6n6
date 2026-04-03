class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let ROWS = board.length;
        let COLS = board[0].length;
        let res = [];
        const backTrack = (r,c,word, i) => {
            if (i === word.length) return true;
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== word[i]) {
                return false;
            }
            const temp = board[r][c];
            board[r][c] = '*';
            const res = backTrack(r + 1, c, word, i + 1) ||
                        backTrack(r - 1, c, word, i + 1) ||
                        backTrack(r, c + 1, word, i + 1) ||
                        backTrack(r, c - 1, word, i + 1);
            board[r][c] = temp;
            return res;
        }
        for (let i = 0; i < words.length; i++) {
            let flag = false;
            for (let r = 0; r < ROWS;r++) {
                if (flag) break;
                for(let c = 0;c < COLS;c++) {
                    if(board[r][c] !== words[i][0]) continue;
                    if (backTrack(r, c, words[i], 0)) {
                        res.push(words[i]);
                        flag = true;
                        break;
                    }
                }
            }
        }
        return res;
    }
}
