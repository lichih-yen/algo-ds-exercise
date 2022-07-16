/**
 * @param {string[]} strs
 * @return {string}
 */

/*
I: strs = ["flower","flow","flight"]
O: "fl"
C: If there is no common prefix, return an empty string ""

*/


var longestCommonPrefix = function(strs) {
    let prefix = '';
    if (strs.length === 0) return prefix;
    for (let i = 0; i < strs[0].length; i++) {
        let character = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] != character) return prefix
        }
        prefix = prefix + character;
    }
    return prefix;
};
