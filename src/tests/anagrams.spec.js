import { checkStringsAnagram } from '../utils/anagram'

describe('anagrams', () => {
    test('simple anagram test', () => {
        expect(checkStringsAnagram("no", 'on').toBe(true))
    })

    test('different cases', () => {
        expect(checkStringsAnagram("silent", 'LISTEN').toBe(true))
    })

    test('string with spaces', () => {
        expect(checkStringsAnagram("signature", 'a true sign').toBe(true))
    })
})