// In this simple assignment you are given a number
// and have to make it negative. But maybe the
// the number is already negative?

// Example:

// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12

// The number can be negative already,
// in witch case no change occurred.
// 0 is not checked for any specific sign.


function makeNegative(num) {
    
    // enter the number here
    var num = 15;

    // code goes gere
    if (num === 0) {
        return 0
    } else if (num < 0) {
        return num
    } else {
        return (num * -1)
    }
}

console.log(makeNegative());