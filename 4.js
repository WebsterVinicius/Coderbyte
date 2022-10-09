// You were camping with yout friend far away
// far away from home, but when it's time to
// go back, you realize that your fuel is
// running out and the nearest pump is 50 miles
// away! You know that on average, your car runs
// on about 25 per gallon. There are 2 gallons left.
// Considering these factors, write a function that
// tells you if it is possible to get to the pump or not.
// Function should return true (1 if its possible or
// false (0 if its no possible.
// The input values are always positive.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {

    
    // values goes here
    var distanceToPump = 50;
    var mpg = 25;
    var fuelLeft = 0;
    var gallons = 2;
    
    // code goes here
    if ((mpg * gallons) + fuelLeft >= distanceToPump) {
        return true;
    } else {
        return false;
    }

}

console.log(zeroFuel());
