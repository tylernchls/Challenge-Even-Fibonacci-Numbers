
/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {

  var sum = 0;
  var fibNum = [1,2];

  for (var i = 1; i < maxFibValue; i++) {
      var nextFib = fibNum[i] + fibNum[i - 1];
      if (nextFib <= maxFibValue) {
        fibNum.push(nextFib);
    }
    if (fibNum[i] % 2 === 0) {
      sum += fibNum[i];
    }

}
return sum;
}

console.log(_sumFibs(13));

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};