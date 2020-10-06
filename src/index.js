module.exports = function reverse (n) {
  if (n < 0) {
    n = n * (-1);
  }
  n = n.toString();
  let reverseArr = n.split('').reverse();
  let result = reverseArr.join('');

  return +result;
}