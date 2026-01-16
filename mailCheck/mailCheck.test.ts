import { mailCheck } from "./mailCheck";

describe("mailCheck", () => {
   test ("should return false for email without @", () => {
       const actual = mailCheck("test.test");   
       expect(actual).toBe(false);
   });

});