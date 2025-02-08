function sumDigits(num) {
    const numStr = Math.abs(Math.floor(num)).toString();
    if (isNaN(num)) {
        return NaN;
    }
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]);
        if (!isNaN(digit)) {
            sum += digit;
        }
    }
    console.log(sum);
    return sum;

}


/*function displayAnanas() {
    const result = 'ana' + 'na' + 's';
    console.log(result);

    //TODO
    //display out word "ananas" using only letters 'a' and 's'
}*/

sumDigits(123);
sumDigits("123");
sumDigits("a123");
sumDigits("123a");
sumDigits(-123);
sumDigits(123.3333);

//displayAnanas();
