const CheckPassword = require("../../src/utils/check-password");

describe("CheckPassword", () => {
    test("should return true if password and confirmPassword are the same", () => {
        const result = CheckPassword.match("password", "password");
        expect(result).toBe(true);
    })

    test("should return false if passaword and confirmPassword are different", () => {
        const result = CheckPassword.match("password", "password2");
        expect(result).toBe(false);
    })
})
