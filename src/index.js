module.exports = function reverse (n) {
   let arr = String(n).split("");
   arr = arr.reverse(n);
   n = arr.join("");
   n = parseFloat(n); 
   return n
}
