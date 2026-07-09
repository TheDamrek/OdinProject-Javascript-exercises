const lastLetter = function(string) {

    for (let i = 0; i < string.length; i++) {

        if (i === string.length - 1) {
            return string.charAt(i);
        }
    }
}

module.exports = lastLetter;