/**
 * @param {number} x
 * @return {number}
 */

/*

I: x = 123456
O: 654321
C: -2^31 <= x <= 2^31 - 1

*/


const reverse = (x) => {
    if (x < 0) return -1 * reverse(-x);
    let solution = (x + "").split("").reverse().join("");
    return  (solution > 2**31) ? 0 : solution; 
};
