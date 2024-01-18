const CharacterController = require('../../src/controllers/user-ctrl')

describe('User controller test', () => {
    test('should create a new user', async () => {
        const resMock = {status: (status) => {
            return {json: (message) => console.log(message)}
        }}
        const resSpy = await jest.spyOn(resMock, 'status')

        await CharacterController.create({
            body: {
                name: 'Pedro',
                cpf: '05430212032',
                password: '1234',
                confirmPassword: '1234'
            }
        }, resMock)

        expect(resSpy).toHaveBeenCalledWith(200)
    })
})        