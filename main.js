//first day coding in my hp omnibook7
// console.log("Hello, Omnibook7!");
// let a = [1,2,3,4,5];
// for(let i=0;i<5;i++){
//     console.log(a[i]);
// }
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", arr);
let sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}