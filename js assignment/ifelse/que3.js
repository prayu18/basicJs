// 3. Write a function that determines if a given year is a leap year.
function leapYear(num){
    if (num%4==0 && num%100!=0 || num%400==0){
        console.log("leap year")
    }
    else {
        console.log("not leap year")
    }
}
leapYear(2024)