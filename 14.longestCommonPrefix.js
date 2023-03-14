/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length===0) return ""

    let prefix = strs[0]
    for(let i = 1;i<strs.length;i++){
        while(strs[i].indexOf(prefix)!==0)//to compare strings if 0 they are comapring
        {
            prefix = prefix.substring(0,prefix.length-1)// to cut one letter from the end 
        }
    }
    return prefix
};