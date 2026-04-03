class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let m = board.length;
        let n = board[0].length;
        for (let r = 0; r < m; r++) {
            const hs = new Set();
            for (let c = 0; c < n;c++) {
                if (board[r][c] !== '.') {
                    if (hs.has(board[r][c])) return false;
                    hs.add(board[r][c]);
                }
            }
        }

        for (let c = 0; c < n; c++) {
            const hs = new Set();
            for (let r = 0; r < m;r++) {
                if (board[r][c] !== '.') {
                    if (hs.has(board[r][c])) return false;
                    hs.add(board[r][c]);
                }
            }
        }

        for (let boxRow = 0; boxRow < 3; boxRow++) {
            for (let boxCol = 0; boxCol < 3; boxCol++) {
                const hs = new Set();
                
                for (let r = boxRow * 3; r < boxRow * 3 + 3; r++) {
                    for (let c = boxCol * 3; c < boxCol * 3 + 3; c++) {
                        if (board[r][c] !== '.') {
                            if (hs.has(board[r][c])) {
                                return false;
                            }
                            hs.add(board[r][c]);
                        }
                    }
                }
            }
        }
        return true;
    }
}
