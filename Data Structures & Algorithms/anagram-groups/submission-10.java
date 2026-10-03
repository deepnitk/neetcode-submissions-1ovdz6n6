class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> hm = new HashMap<>();
        for (String s: strs) {
            char[] ch = s.toCharArray();
            Arrays.sort(ch);
            String sortedS = new String(ch);
            hm.putIfAbsent(sortedS, new ArrayList<>());
            hm.get(sortedS).add(s);
        }

        return new ArrayList<>(hm.values());
    }
}
