class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];
        let islands = 0;
        const dfs = (r, c) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === '0') {
                return;
            }
            for (const [dr, dc] of directions) {
                    grid[r][c] = '0';
                    dfs(r + dr, c + dc);
            }
        }
        for (let r = 0;r < rows;r++) {
            for (let c = 0;c < cols;c++) {
                if (grid[r][c] === '1') {
                    dfs(r, c);
                    islands++;
                }
            }
        }
        return islands;
    }
}
