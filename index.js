// a function to check for a perfect square

function isPerfectSquare(x){
    let s = parseInt(Math.sqrt(x));

    return (s*s ==x)
}


// function to check if a number is fibonacci
// prints to the console true when the number is fibonacci and false when its not

function isFibonacci(n) {

    return isPerfectSquare(5*n*n+4) || isPerfectSquare(5 * n* n -4)
}
console.log(isFibonacci(1))
