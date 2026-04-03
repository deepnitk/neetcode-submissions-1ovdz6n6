class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];
        
        const dfs = (r, c) => {
            if ( r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) {
                return 0;
            }
            let area = 1;
            grid[r][c] = 0;
            for (const [dr, dc] of directions) {
                area += dfs(r + dr, c + dc);
            }
            return area;

        }
        let maxi = 0;
        for (let r = 0;r < rows; r++) {
            for (let c = 0;c < cols;c++) {
                if (grid[r][c] === 1) {
                    maxi = Math.max(maxi, dfs(r, c));
                }
            }
        }
        return maxi;
    }
}
