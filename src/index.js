module.exports = function reverse (n) {
  const numToStr = Math.abs(n).toString();
  const splitStr = numToStr.split('');
  const revStr = splitStr.reverse();
  const joinStr = revStr.join("");
return joinStr;
};
