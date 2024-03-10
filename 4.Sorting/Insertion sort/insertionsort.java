public class insertionsort {
    public static void insertionSort(int[] arr){
        /**
         * Space: O(1)
         * Time: O(n^2)
         */
        for(int i=1;i<arr.length;i++){
            int elemet=arr[i];
            int j;
            for(j=i-1;j>=0;j--){
                if(arr[j]>elemet){
                    arr[j+1]=arr[j];
                }else{
                    //arr[j]<=elem we break
                    break;
                }
            }
            arr[j+1]=elemet;
        }
    }
    public static void main(String[] args) {
        int[] arr ={5,4,3,2,1};
        insertionSort(arr);
        for(int i:arr){
            System.out.println(i);
        }
    }
}
