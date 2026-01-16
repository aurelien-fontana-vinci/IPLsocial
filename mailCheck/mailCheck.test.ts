import { mailCheck } from "./mailCheck";

describe("mailCheck", () => {
   test ("should return true for any email", () => {
       const actual = mailCheck("test.test");   
       expect(actual).toBe(false);
   });
});