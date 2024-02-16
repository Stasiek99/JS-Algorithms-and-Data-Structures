// My answer
function averagePair(arr, float) {
    if (arr.length < 2) {
        return false;
    }
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let average = (arr[left] + arr[right]) / 2;
        if (average === float) {
            return true;
        } else if (average < float) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}