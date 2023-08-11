const { multiply } = require('./functions')

describe('multiply', () => {
    it('should multiply two numbers', () => {
        const result = multiply(2,2)
        expect(result).toBe(4)
    })

    it('should error if there is invaild inputs', () => {
        expect(() => multiply(2,'c')).toThrow()
    })

    it('should fail so I can trigger notification', () => {
        const result = multiply(2,2)
        expect(result).toBe(2)
    })
})