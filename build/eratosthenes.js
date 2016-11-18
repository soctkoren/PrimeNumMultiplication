// Eratosthenes algorithm for finding all primes. 
// Time complexity is O(n * log(log(n))).
var eratosthenes = function(n) {

    let arr = [];
    let upperLimit = Math.sqrt(n);
    let output = [];
    let maxInputValue = 100000000;
    // Handle n that is too large and bad inputs
    if (typeof n === Number || n > maxInputValue) {
        throw "Bad input"
    }

    // Initially mark all nums from 0 to n as prime 
    for (let i = 0; i <= n; i++) {
        arr.push(true);
    }

    // Remove multiples of prime starting from 2
    for (let i = 2; i <= upperLimit; i++) {
        if (arr[i]) {
            // Only run if current i square is less than n
            for (let j = i * i; j < n; j += i) {
                arr[j] = false;
            }
        }
    }

    // Push remaining items in array to output
    for (let i = 2; i <= n; i++) {
        if(arr[i]) {
            output.push(i);
        }
    }
    return output;
};

module.exports = {
    getAllPrimes: eratosthenes
} 

