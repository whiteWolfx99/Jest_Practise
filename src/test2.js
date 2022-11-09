function reverseString(string) {
    let reverse = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    const reverse2 = string.split('').reverse().join('');
    if (reverse == reverse2) {
        return reverse;
    } else {
        throw new Error('The string is not a Reversed!');
    }
}

module.exports = reverseString;