// import java.util.*;

public class selectionsort {
    public static void selectionSort(int[] arr) {
        for(int i=0;i<arr.length-1;i++){
            int min_idx=findMinElement(arr, i);
            if(min_idx!=i){
                int temp=arr[i];
                arr[i]=arr[min_idx];
                arr[min_idx]=temp;
            }
        }
    }


    public static int findMinElement(int[] arr,int i){
        int min_el_idx=i;
        for(int j =i+1;j<arr.length;j++){
            if(arr[j]<arr[min_el_idx]){
                min_el_idx=j;
            }
        }
        return min_el_idx;
    }

    public static void main(String[] args) {
        int[] arr={5,4,3,2,1};
        selectionSort(arr);
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
    }
    
}