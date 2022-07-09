/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    
    const memory = {};
    
    if (s.length !== t.length) {
        return false;
    }
    
    for (let i in s) {
        if (!memory[s[i]]) 
            memory[s[i]] = 0;
            memory[s[i]] ++;
        
    }
    
    for (let j in t) {
        if (!memory[t[j]]) 
            return false;
            memory[t[j]]--;
        
    } 
    return true;
    
 };
