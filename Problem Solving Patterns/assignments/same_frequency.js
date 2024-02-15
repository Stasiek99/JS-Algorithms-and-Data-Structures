function sameFrequency(num1, num2) {
    num1 = num1.toString().split("");
    num2 = num2.toString().split("");
    if (num1.length !== num2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of num1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of num2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if (!key in frequencyCounter1) {
            return false;
        }
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true;

}