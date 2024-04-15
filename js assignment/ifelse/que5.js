// 5. Create a function that takes three numbers as input and returns the largest among them.
function largest(num1,num2,num3){
    if (num1>num2) {
        if (num1>num3){
            console.log(num1)
        }
        else {
            console.log(num3)
        }
    }
    else {
        console.log(num2)
    }
    
}
largest(7,5,2)