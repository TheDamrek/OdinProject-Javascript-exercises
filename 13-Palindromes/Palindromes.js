const palindromes = function (string) {

let cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
let reversedString = cleanedString.split("").reverse().join("");
if (cleanedString === reversedString){
    return true;
}
    else {
        return false;
    }
};


module.exports = palindromes;