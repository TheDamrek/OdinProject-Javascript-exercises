const removeFromArray = function(array, ...elements){

return array.filter(val => !elements.includes(val))

}

module.exports = removeFromArray