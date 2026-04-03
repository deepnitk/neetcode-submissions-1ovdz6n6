class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let rows = heights.length;
        let cols = heights[0].length;
        let pac = Array.from({length: rows}, () => Array(cols).fill(false));
        let atl = Array.from({length: rows}, () => Array(cols).fill(false));

        const dfs = (r, c, ocean) => {
            ocean[r][c] = true;
            let directions = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1],
            ];
            for (let [dr, dc] of directions) {
                let nr = r + dr;
                let nc = c + dc;
                if (
                    nr >= 0 &&
                    nr < rows &&
                    nc >= 0 &&
                    nc < cols &&
                    !ocean[nr][nc] &&
                    heights[nr][nc] >= heights[r][c]
                ) {
                    dfs(nr, nc, ocean)
                }
            }
        }
        for (let c = 0;c < cols;c++) {
            dfs(0, c, pac);
            dfs(rows - 1, c, atl);
        }
        for (let r = 0; r < rows;r++) {
            dfs(r, 0, pac);
            dfs(r, cols - 1, atl);
        }
        let res = [];
        for (let r = 0;r < rows;r++) {
            for (let c = 0;c < cols;c++) {
                if (pac[r][c] && atl[r][c]) {
                    res.push([r, c]);
                }
            }
        }
        return res;
     }
}
