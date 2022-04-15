import { Person } from "./../src/planet-age.js";

describe("Person", () => {
  test("should return the age of a person object", () => {
    const person = new Person(21);
    expect(person.age).toEqual(21);
  });
});
