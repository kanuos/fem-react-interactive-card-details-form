import { describe, it, expect } from "vitest";
import { getPaddedDigits, getFormattedCreditCard, getSpacedDigitCreditCard, groupDigits, } from "./helpers";

describe("helpers.test.ts", () => {
    describe("getPaddedDigits fn", () => {
        it("should return a double digit number if the input is single digit", () => {
            for (let i = 0; i <= 9; i++) {
                let result = getPaddedDigits("" + i);
                expect(result).toMatch(`0${i}`)
            }
        })

        it("should return a double digit number if the input has more than one digit", () => {
            for (let i = 10; i <= 9999; i++) {
                let result = getPaddedDigits("" + i);
                expect(result).toBe(i.toString().slice(0, 2))
            }
        })

        it("should return 00 if empty input is passed", () => {
            const result = getPaddedDigits("");
            expect(result).toBe("00")
        })

        it("should return string of length 2 if random chars are passed", () => {
            const sampleSpace = {
                hello: "he",
                world: "wo",
                "Good morning": "Go",
                67845: "67",
                "__main__": "__",
                "    45 days ago   ": "45"
            }
            Object.entries(sampleSpace).forEach(([key, value]) => {
                let res = getPaddedDigits(key);
                expect(res).toBe(value)
            })
        })

    })

    describe("getFormattedCreditCard fn", () => {
        describe('given empty string', () => {
            it("should return a string array of 0000", () => {
                const res = getFormattedCreditCard("");
                expect(res.length).toBe(4);
                res.forEach(el => {
                    expect(el).toBe("0000");
                })
            })
        })
        describe('given EXACTLY 16 chars string', () => {
            it("should return a grouped digits array for digits input", () => {
                const res = getFormattedCreditCard("1234567890123456");
                expect(res.length).toBe(4);
                expect(res[0]).toBe("1234")
                expect(res[1]).toBe("5678")
                expect(res[2]).toBe("9012")
                expect(res[3]).toBe("3456")
            })

            it("should return a grouped digits array for mixed chars input", () => {
                const res = getFormattedCreditCard("1234567890ABCDEF");
                expect(res.length).toBe(4);
                expect(res[0]).toBe("1234")
                expect(res[1]).toBe("5678")
                expect(res[2]).toBe("90AB")
                expect(res[3]).toBe("CDEF")
            })
        })

        describe('given MORE than 16 digit string', () => {
            it("should return array of length 4 with individual item of length 4", () => {
                const res = getFormattedCreditCard("1234567890ABCDEF12352342342343");
                expect(res.length).toBe(4);
                expect(res[0]).toBe("1234")
                expect(res[1]).toBe("5678")
                expect(res[2]).toBe("90AB")
                expect(res[3]).toBe("CDEF")
            })

            it("should return groups without spaces", () => {
                const res = getFormattedCreditCard("TO BE OR NOT TO BE THAT IS THE QUESTION");
                expect(res.length).toBe(4);
                expect(res[0]).toBe("TOBE")
                expect(res[1]).toBe("ORNO")
                expect(res[2]).toBe("TTOB")
                expect(res[3]).toBe("ETHA")
            })
        })

        describe('given LESS than 16 digit string', () => {
            it("should return grouped array with padded digits", () => {
                const res = getFormattedCreditCard("1234567");
                expect(res.length).toBe(4);
                expect(res[0]).toBe("1234")
                expect(res[1]).toBe("5670")
                expect(res[2]).toBe("0000")
                expect(res[3]).toBe("0000")
            })

            it("should return array of length 4 with individual item as 0000 for empty string", () => {
                const res = getFormattedCreditCard("");
                expect(res.length).toBe(4);
                expect(res[0]).toBe("0000")
                expect(res[1]).toBe("0000")
                expect(res[2]).toBe("0000")
                expect(res[3]).toBe("0000")
            })

        })
    })

    describe("getSpacedDigitCreditCard fn", () => {
        it("should return a blank string if empty card is provided", () => {
            const cc = "";
            const res = getSpacedDigitCreditCard(cc);
            expect(res).toBe("")
        })

        describe('format CC as [xxxx xxxx xxxx xxxx]', () => {
            it("should return formatted string if less than 16 letters are passed", () => {
                const cc = "12345";
                const res = getSpacedDigitCreditCard(cc);
                expect(res).toBe("1234 5")
            })

            it("should return formatted string if less than 16 letters are passed", () => {
                const cc = "123456789";
                const res = getSpacedDigitCreditCard(cc);
                expect(res).toBe("1234 5678 9")
            })

            it("should return formatted string if less than 16 letters are passed", () => {
                const cc = "1234567890ABCD";
                const res = getSpacedDigitCreditCard(cc);
                expect(res).toBe("1234 5678 90AB CD")
            })

            it("should return formatted string if 16 letters are passed", () => {
                const cc = "1234567890ABCDEF";
                const res = getSpacedDigitCreditCard(cc);
                expect(res).toBe("1234 5678 90AB CDEF")
            })

            it("should return a formatted string if input has more than 16 letters", () => {
                const cc = "1234567890ABCDEF12345";
                const res = getSpacedDigitCreditCard(cc);
                expect(res).toBe("1234 5678 90AB CDEF")
            })
        })
    })

    describe('groupDigits', () => {
        it("should return grouped digits of 4 digits by default", () => {
            const res = groupDigits("123456")
            expect(res).toEqual(["1234", "56"])
        })

        it("should return grouped digits of 4 digits by default", () => {
            const res = groupDigits("1234567890ABCDEF123456")
            expect(res).toEqual(["1234", "5678", "90AB", "CDEF", "1234", "56"])
        })

        it("should return grouped digits by A SIZE OF 6", () => {
            const res = groupDigits("1234567890ABCDEF123456", 6)
            expect(res).toEqual(["123456", "7890AB", "CDEF12", "3456"])
        })

        it("should return empty array if empty number is passed", () => {
            const res = groupDigits("", 6)
            expect(res).toEqual([])
        })
    })
})