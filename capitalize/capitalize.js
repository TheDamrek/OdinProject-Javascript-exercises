const capitalize = function(string) {

    for (let i = 0; i < string.length; i++) {
        if (i === 0) {
            string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }
    }
    return string;
}

module.exports = capitalize;