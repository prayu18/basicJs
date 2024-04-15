// 8. Create a program that determines if a given string is a palindrome.
function palindrome(str){
    reverse=str.split('').reverse().join('');
    if (str===reverse){
        console.log("palindrome")
    }
    else {
        console.log('not palindrome')
    }
}
palindrome('madam')