const function1 = (num1, num2, num3) => {
    // do something
}

// when we don't know how many paraveters will we receive
// ...nums bundles all pars in the single array of arguments
const double = (...nums) => {
    console.log(nums);
    return nums.map(num => num*2);
}

const result = double(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);