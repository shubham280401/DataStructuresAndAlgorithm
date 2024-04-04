public class merge2sortedarrays {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        // actual length of nums1 is m+n, which we will use to store the final result

        int i = 0, j = 0, k = 0;

        int[] result = new int[m + n];

        while (i < m && j < n) { // this loop ends when either i == m or j == n
            if (nums1[i] <= nums2[j]) {
                result[k] = nums1[i];
                k++;
                i++;
            } else {
                result[k] = nums2[j];
                k++;
                j++;
            }
        }

        // if i == m, nums1 is exhausted
        // we have elements left in nums2, lets fill that directly
        while (j < n) {
            result[k] = nums2[j];
            k++;
            j++;
        }

        // if j == n, nums2 is exhausted
        // we have elements left in nums1, lets fill that directly
        while (i < m) {
            result[k] = nums1[i];
            k++;
            i++;
        }

        k = 0;
        while (k < m + n) {
            nums1[k] = result[k];
            k++;
        }
    }

    public static void main(String[] args) {
        // Example usage of the merge method
        merge2sortedarrays merger = new merge2sortedarrays();

        // Example input arrays
        int[] nums1 = {1, 3, 5, 0, 0, 0}; // Assuming nums1 has enough space to hold the merged result
        int m = 3; // Number of elements in nums1
        int[] nums2 = {2, 4, 6}; // Second sorted array
        int n = 3; // Number of elements in nums2

        // Merge nums2 into nums1
        merger.merge(nums1, m, nums2, n);

        // Print the merged array
        for (int num : nums1) {
            System.out.print(num + " ");
        }
    }
}
