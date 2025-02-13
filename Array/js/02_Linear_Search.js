let arr = [21, 42, 20, 66, 60, 27] // Declare array

let target = 50; // change target here
console.log("change the target in 02_Linear_Search.js file");
// function for linear search of an element in array
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            console.log("%cThe Target Element is " + target, "color: blue; font-weight: bold;");
            console.log("%cElement found at index " + i, "color: green; font-weight: bold;");
            return i;
        }
    }
    console.log("%cThe Target Element is " + target + " not found in the array Please change the target in ", "color: red; font-weight: bold;");
    return -1;
};

// call function
linearSearch(arr, target);

















// DON'T CHANGE ANYTHING BELOW THIS LINE
if (linearSearch(arr, target) == -1) {
    document.getElementById('target')
        .innerHTML = 'The Target Element is ' + `<span style="color: red; font-weight: bold;">${target}</span>` + '<span> not found in the array Please change the target in <span class="console-text">`02_Linear_Search.js`</span></span><br/> The array elements are : '
        + arr;

}
else {
    document.getElementById('target')
    document.getElementById('target').innerHTML = 'The Target Element is ' + `<span style="color: lightgreen; font-weight: bold;">${target}</span>` +
        '<span> found in the array at index ' + linearSearch(arr, target) + '</span> <br/> The array elements are : ' + arr;
}
// DON'T CHANGE ANYTHING ABOVE THIS LINE