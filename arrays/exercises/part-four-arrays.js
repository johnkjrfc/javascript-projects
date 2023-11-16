let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

let holdCabinet3 =  holdCabinet1.concat(holdCabinet2);
console.log(holdCabinet1 + "\n" + holdCabinet3); //did not alter original arrays

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
let sliced = holdCabinet3.slice(3,6)
console.log(`\n\nHere's the slice you asked for \n${sliced} \nand the original array \n${holdCabinet1}`)


//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?


