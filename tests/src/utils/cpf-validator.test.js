const CpfValidator = require('../../../src/utils/cpf-validator');

describe('CpfValidator', () => {
    test('should return true if cpf is valid', () => {
        const result = CpfValidator.isValid('05430212032');
        expect(result).toBe(true);
    })

    test('should return false if cpf is invalid', () => {
        const result = CpfValidator.isValid('05430212031');
        expect(result).toBe(false);
    })

    
})