/**
 *
Let A[0...n - 1] be an array of n distinct positive integers. If i < j and A[i] > A[j] then the pair (i, j) is called an inversion of A. Given n and an array A your task is to find the number of inversions of A.

Input
The first line contains t, the number of testcases followed by a blank space. Each of the t tests start with a number n (n <= 200000). Then n + 1 lines follow. In the ith line a number A[i - 1] is given (A[i - 1] <= 10^7). The (n + 1)th line is a blank space.

Output
For every test output one line giving the number of inversions of A.
 */

 public class inversionCount {
    public static int count = 0;
    public static int[] merge(int[] left, int[] right){
        
        int i = 0, j = 0, k = 0;
        int m = left.length;
        int n = right.length;
        int[] result = new int[m + n];

        while (i < m && j < n) { // this loop ends when either i == m or j == n
            if (left[i] <= right[j]) {
                result[k] = left[i];
                k++;
                i++;
            } else {
                result[k] = right[j];
                count+=m-i;
                k++;
                j++;
            }
        }

        // if i == m, left is exhausted
        // we have elements left in right, lets fill that directly
        while (j < n) {
            result[k] = right[j];
            k++;
            j++;
        }

        // if j == n, right is exhausted
        // we have elements left in left, lets fill that directly
        while (i < m) {
            result[k] = left[i];
            k++;
            i++;
        }
        System.out.println("Result of mergesort");
        for(int l =0;l<result.length;l++){
            System.out.println(result[l]);
        }
        System.out.println("*****");
      return result;
    }

    public static int[] mergeSortHelper(int[] arr, int start, int end){
        if(start==end){
            int[] result = new int[1];
            result[0]= arr[start];
            // System.out.println(result[0]);
            return result;
        }
        int mid = (start+end)/2;
        int[] left=mergeSortHelper(arr, start, mid);//it will eventually sort the left array
        int[] right= mergeSortHelper(arr, mid+1, end);
       
        return merge(left, right);
    }

    public static int[] mergeSort(int[] array){
        return mergeSortHelper(array, 0,array.length-1);
        
       
    }
    public static void main(String[] args) {
        int[] arr= {5,4,3,2,1,0,-1};
        arr= mergeSort(arr);
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
        System.out.println("Number of inversions: " + count);
    }
 }