import {testString} from "./RegexRequirements"

describe("regex worlds", () => {
    it("does stuff", () => {
        expect(testString("a")).toBe("Your gender must be more than 3 characters");
        expect(testString("abcdefghijklmnopqrstuvwxyz")).toBe("Your gender must be less than 26 characters");
        expect(testString("asdf")).toBe("Your gender must contain a capital letter");
        expect(testString("ADSF")).toBe("Your gender must contain a lowercase letter");
        expect(testString("Asdf")).toBe("Your gender must be at least 10 characters");
        expect(testString("Asdfghjklqwertyuiop")).toBe("Your gender must contain a number");
        expect(testString("12345Asdfg")).toBe("Your gender must contain a special character");
        expect(testString("12345Asdfg!")).toBe("Your gender must contain a space");
        expect(testString("12345 Asdfg!")).toBe("Your gender must contain the word \"space\"");
        expect(testString("12345A! space")).toBe("Your gender must contain a non-ascii character");
        expect(testString("12345AÀ! space")).toBe("Your gender must contain \"🌽\"");
        expect(testString("12345A🌽! space")).toBe("Your gender must end with é");
        expect(testString("12345A🌽! spaceé")).toBe("Your gender must end with a consonant")
    });
});
