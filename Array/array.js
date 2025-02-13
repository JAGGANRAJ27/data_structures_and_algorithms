// Declare of array in JS

// let arrayname = []
let arr = [];

// Initialize array
let arr2 = [1, 2, 3, 4, 5]; //Integer
let arr3 = ["a", "b", "c", "d", "e"]; //String
let arr4 = [1, "a", 2, "b", 3, "c", 4, "d", 5, "e"]; //Mixed

// Access array using index [print first element of arr2]
console.log(arr2[0]); //array index starts from 0

// Access array using array traversal
for (let i of arr2) {
    console.log(i);
}

// insert element in array
arr2.push(21);
console.log(arr2);

// delete element in array
arr2.pop();
console.log(arr2);

// find element in array
console.log(arr2.indexOf(3));