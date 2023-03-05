//Write a javascript program  where uses a function fact(n) that a takes an integer n and returns the factorial of n. Required to use recursion.

//Example:

//n = 7
//7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040


function factorial(num) {
    if (num < 0) 
        return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}
function resultado() {
    const numberToFactor = parseInt(document.querySelector('#val').value);
    const result = factorial(numberToFactor);
    document.querySelector('#result').innerHTML = result;
}