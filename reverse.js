const str=prompt("Enter a String:")
const wordsArr = str.split(' ');
for(let i = 0; i < wordsArr.length; i++){
    let word = wordsArr[i];
    let tempWord = "";
    for(let j = word.length - 1; j >= 0; j--){
        tempWord = tempWord + word[j];
    }
    wordsArr[i] = tempWord;
}
const reversedStr = wordsArr.join(' ');
console.log(reversedStr);