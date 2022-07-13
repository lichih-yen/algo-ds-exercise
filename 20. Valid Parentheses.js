/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let bracket = {
        "(":")",
        "{":"}",
        "[":"]"
    }
    
    let heap = [];
    
    for (let ch of s) {
        if (bracket[ch]) {
            heap.push(bracket[ch])
        } else {
            if (heap.pop() !== ch) return false;
        }
    }
    
    return (!heap.length)
};
