const {addTwo} = require('./index')

describe('function: addTwo', () => {
    it('should return input value plus two', () => {
        expect(addTwo(4)).toBe(6)
    })

    it('should return undefined if input is not a number', () => {
        expect(addTwo('test')).toBeFalsy()
    })
})