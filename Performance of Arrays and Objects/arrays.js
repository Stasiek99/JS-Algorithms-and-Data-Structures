let names = ["Michael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];

// When to use arrays:
// when youd need order
// When you need faster access / insertion and removal (sort of...)

// Insertion - It depends... | Removal - It depends... | Searching - O(n) | Access - O(1)

// Insertion (at the beginning - O(n)) (at the end - O(1)) | Removal (at the beginning - O(n)) (at the end - O(1))
// .push()/.pop() faster than .shift()/.unshift()