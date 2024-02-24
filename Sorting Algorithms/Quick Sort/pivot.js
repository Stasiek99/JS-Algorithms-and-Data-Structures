function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    const pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

// ES6

// function pivot(arr, start = 0, end = arr.length - 1) {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };
//
//     let pivot = arr[start];
//     let swapIndex = start;
//
//     for (let i = start + 1; i <= end; i++) {
//         if (pivot > arr[i]) {
//             swapIndex++;
//             swap(arr, swapIndex, i);
//         }
//     }
//     swap(arr, start, swapIndex);
//     return swapIndex;
// }