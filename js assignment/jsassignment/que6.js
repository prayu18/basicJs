// 6. Take a 3 digit number and print the reverse of that number.
//     Ex - 235 = 532
function reverse(num) {
    dig1 = num % 10;  
    dig2 = Math.floor((num / 10) % 10);  
    dig3 = Math.floor(num / 100);  

    reversed = dig1 * 100 + dig2 * 10 + dig3;  
    console.log(reversed);
}

reverse(235);