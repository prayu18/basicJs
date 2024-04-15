// 7. Implement a function that calculates the grade of a student based on their score.
function grade(score){
    if (score>90){
        console.log('A grade')
    }
    else if (score>80){
        console.log('B grade')
    }
    else if (score>70){
        console.log('C grade')
    }
    else if (score>60){
        console.log('D grade')
    }
    else {
        console.log('E grade')
    }
}
grade(70)