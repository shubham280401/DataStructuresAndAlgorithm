import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            int compliment = target - nums[i];
            if (map.containsKey(compliment)) {
                return new int[]{i, map.get(compliment)};
            }
            map.put(nums[i], i);
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        // Example usage or testing can be done here
        // For instance:
        int[] nums = {2, 7, 11, 15};
        int target = 9;

        Solution solution = new Solution();
        int[] result = solution.twoSum(nums, target);

        // Print the result or perform further actions
        System.out.println("Indices: " + result[0] + ", " + result[1]);
    }
}




/**
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        for(int i=0;i<=n-2;i++){
            for(int j =i+1;j<n;j++){
                if(nums[i]+nums[j]==target){
                    return new int[]{i,j};
                }
            }
        }
        return new int[]{};
    }
} */