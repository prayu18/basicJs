// 4. Implement a program that checks whether a given character is a vowel or consonant.
function checkVowelOrConsonent(char){
    chr=char.toLowerCase();
    if (chr==='a'||chr==='e'||chr==='i'||chr==='o'||chr==='u'){
          console.log("vowel")
    }
    else {
        console.log('consonent')
    }
}
checkVowelOrConsonent('b')