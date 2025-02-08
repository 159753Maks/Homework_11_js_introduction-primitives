function sumDigits(num) {
    const numStr = Math.abs(Math.floor(num)).toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]);
        if (!isNaN(digit)) {
            sum += digit;
        }
    }
    return sum;
    //TODO
    //returns sum of the digits in the given number
    //examples: sumDigits(123) => 6
    // sumDigits("123") => 6
    // sumDigits("a123") => NaN
    // sumDigits("123a") => NaN
    // sumDigits(-123) => 6
    //sumDigit (123.3333) => 6
}


function displayAnanas() {
    const result = 'ana' + 'na' + 's';
    console.log(result);

    //TODO
    //display out word "ananas" using only letters 'a' and 's'
}

alert(sumDigits(123));
alert(sumDigits("123"));
alert(sumDigits("a123"));
alert(sumDigits("123a"));
alert(sumDigits(-123));
alert(sumDigits(123.3333));

displayAnanas();
