class Solution {
    public int lengthOfLongestSubstring(String s) {
        int l = 0;
        int maxi = 0;
        int r = 0;
        Set<Character> hs = new HashSet<>();
       while( r < s.length()) {
            while (hs.contains(s.charAt(r))) {
                hs.remove(s.charAt(l));
                l++;
            }
            hs.add(s.charAt(r));
            maxi = Math.max(maxi, r - l + 1);
            r++;
        }
        return maxi;
    }
}
