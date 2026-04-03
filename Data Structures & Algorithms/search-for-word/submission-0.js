class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const n = board.length;
        const m = board[0].length;
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m;j++) {
                if (dfs(i, j, 0)) return true;
            }
        }
        return false;

        function dfs(i, j, k) {
            if (k === word.length) return true;
            
            if (i < 0 || j < 0 || i >= n || j >= m || board[i][j] !== word[k]) {
                return false;
            }
            
            const temp = board[i][j];
            board[i][j] = '#';

            const found = 
                dfs (i + 1, j, k + 1) ||
                dfs (i - 1, j, k + 1) ||
                dfs (i, j + 1, k + 1) ||
                dfs (i, j - 1, k + 1);
            
            board[i][j] = temp;
            return found;

        }
    }
    
}
