class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> hs = new HashSet<>();
        for (int num: nums) {
            hs.add(num);
        }
        int maxi = 0;
        for(int num: hs) {
            if (!hs.contains(num - 1)) {
                int len = 1;
                while (hs.contains(num + len)) {
                    len++;
                }
                maxi = Math.max(maxi, len);
            }
        }
        return maxi;
    }
}
