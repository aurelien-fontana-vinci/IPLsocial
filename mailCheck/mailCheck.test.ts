import { mailCheck } from "./mailCheck";

describe("mailCheck", () => {
   test ("should return false for email without @", () => {
       const actual = mailCheck("test.test");   
       expect(actual).toBe(false);
   });

   test ("should return true for email without . after @", () => {
       const actual = mailCheck("test@example");   
       expect(actual).toBe(false);
    });

    test ("should return false for email ending with .", () => {
        const actual = mailCheck("test@example.");   
        expect(actual).toBe(false);
    });

    test("should return false for email with space", () => {
        const actual = mailCheck("test@ example.com");   
        expect(actual).toBe(false);
    });

    test ("should return false for email without text before @", () => {
        const actual = mailCheck("@example.com");   
        expect(actual).toBe(false);
    });

    test ("should return false for email without text after @", () => {
        const actual = mailCheck("test@");   
        expect(actual).toBe(false);
    });

    
});