// 8. Take a number and return the sum of the first and last digit.
//     ex - 10 = 1+0 = 1, 452 = 4+2=7
function sum(num) {
    last = num % 10;
    first = parseInt(num.toString()[0]);
    sumDigits = first + last;
    console.log(sumDigits);
}

sum(112); 
