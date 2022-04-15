const { TestScheduler } = require("jest");

describe("Person", () => {
  TestScheduler("should return the age of a person object", () => {
    const person = new Person(21);

    expect(person.age).toEqual(21);
  });
});
