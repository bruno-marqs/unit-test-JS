const UserModel = require('../../src/models/User')

describe('User tests', () => {
    test('should create a new user', async () => {
        const result = await UserModel.create({
            name: 'Pedro',
            cpf: '05430212032',
            password: '123456',
            confirmPassword: '123456'
        })
        
        expect(result).toBeTruthy()
    })
})       
