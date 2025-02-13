// Declare of array in JS

// let arrayname = []
let arr = [];

// Initialize array
let arr2 = [1, 2, 3, 4, 5]; //Integer
let arr3 = ["a", "b", "c", "d", "e"]; //String
let arr4 = [1, "a", 2, "b", 3, "c", 4, "d", 5, "e"]; //Mixed

// Access array using index [print first element of arr2]
console.log("%cAccess array using index", "color: blue; font-weight: bold;");
console.log(arr2[0]); //array index starts from 0

// Access array using array traversal
console.log("%cAccess array using array traversal", "color: blue; font-weight: bold;");
for (let i of arr2) {
    console.log(i);
}

console.log("%cInsert element in array", "color: blue; font-weight: bold;");
// insert element in array
arr2.push(21);
console.log(arr2);

console.log("%cDelete element in array", "color: blue; font-weight: bold;");
// delete element in array
arr2.pop();
console.log(arr2);

console.log("%cFind element in array", "color: blue; font-weight: bold;");
// find element in array
console.log('The index of element 2 in arr3 is ' + arr3.indexOf("a"));