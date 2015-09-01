/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
function numberToString(n) {

  var stringNum = n.toString();
  console.log(stringNum);
  return stringNum;
}
numberToString(10);

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
function increase(n) {
  var num = n+=1;
  return num;
}
increase(7);
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function decrease(n) {
  var num = n-=1;
  return num;
}
decrease(7);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add(x, y) {
  return (x + y);
}
add(9, 3);
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subtract(x, y) {
  return (x - y);
}
subtract(9, 3);
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

function multiply(x, y){
  return (x * y);
}
multiply(9, 3);
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divide(x, y){
  return (x / y);
}
divide(3, -12);
/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function square(x) {
  return (x * x);
}
square(12);
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function calculate(operation, x, y) {
  if (operation == "add"){
    var addNew = x + y;



    console.log(x + " + " + y + " = " + addNew);
    return add(x, y);
  }
  else if (operation == "subtract"){
    var subNew = x - y;
    console.log(x + " - " + y + " = " + subNew);
    return subtract(x, y);

  }
  else if (operation == "multiply"){
    var multNew = x * y;
    console.log(x + " * " + y + " = " + multNew);
    return multiply(x, y);
  }
  else {
    var divNew = x / y;
    console.log(x + " / " + y + " = " + divNew);
    return divide (x, y);
  }

  }
calculate(add, 4, 7);





/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan (x, y) {
  if (x > y){
    return true;
  }
  else {
    return false;
  }
}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function isLessThan (x, y){
  if (x < y){
    return true;

  }
  else {
    return false;
  }
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual(x, y){
  if (x === y) {
    return true;
  }
  else {
    return false;
  }
}
/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum (x, y){
  if (x < y){
    return x;
  } else if (y < x){
    return y;
  } else {
    return -1;
  }
}
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum (x, y) {
  if (x > y) {
    return x;
  }
  else if (y > x){
    return y;
  }
  else {
    return -1;
  }
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function isEven(n){
  if (n%2 === 0){
    return true;
  }
  else {
    return false;
  }
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function isOdd(n){
  if (n%2 !== 0){
    return true;
  }
  else {
    return false;
  }
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade(score, total) {
  var per = score / total;
  if (per >= 0.90){
    return "A";
  }
  else if (per >=0.80){
    return "B";
  }
  else if (per >=0.70){
    return "C";
  }
  else if (per >=0.60){
    return "D";
  }
  else {
    return "F";
  }


}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
function incrementReviews(restaurant){
  if (restaurant.reviews > 0){
    restaurant.reviews += 1;
  }
  else {
    restaurant.reviews = 1;
  }
  return restaurant;
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
function combine(word1, word2){

  var newStr = word1 + " " + word2;
  return newStr;


}


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */
function createCircle(radius){
  var circle = {};
  circle.circumference = (2*Math.PI*radius);
  circle.area = (Math.PI*(radius*radius));
  return circle;
}

