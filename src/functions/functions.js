const multiply = (a, b) => {
    if(isNaN(a) || isNaN(b)) {
        throw new Error('Input is not a number')
    }
    return a * b
}

module.exports = {
    multiply
}