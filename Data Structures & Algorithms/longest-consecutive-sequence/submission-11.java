class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> numSet = new HashSet<>();
        for (int num: nums) {
            numSet.add(num);
        }
        int maxi = 0;
        for(int num: numSet) {
            if (!numSet.contains(num - 1)){
                int len = 1;
                while(numSet.contains(num + len)){
                    len++;
                }
                maxi = Math.max(maxi, len);
            }
        }
        return maxi;
    }
}
