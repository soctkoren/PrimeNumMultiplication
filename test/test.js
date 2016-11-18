const assert = require('assert');
const eratosthenes = require('../build/eratosthenes.js');
const table = require('../build/table.js');
const display = require('../build/display.js');

describe('eratosthenes should return array of primes under n', function() {
  describe('#getAllPrimes(n)', function() {
    
    it('should return empty array when n is not passed', function() {
      assert.deepEqual(eratosthenes.getAllPrimes(), []);
    });

    it('should return empty array when n is less than 2', function() {
    	assert.deepEqual(eratosthenes.getAllPrimes(1), []);
    	assert.deepEqual(eratosthenes.getAllPrimes(0), []);
    	assert.deepEqual(eratosthenes.getAllPrimes(-100), []);
    })

    it('should return an array of primes up to n', function() {
    	assert.deepEqual(eratosthenes.getAllPrimes(2), [2]);
    	assert.deepEqual(eratosthenes.getAllPrimes(10), [2,3,5,7,10]);
    })

  });
});