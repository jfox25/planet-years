import { Person } from "./../src/planet-age.js";

describe("Person", () => {
  test("should return the age of a person object", () => {
    const person = new Person(21);
    expect(person.age).toEqual(21);
  });

  test("should return the age of a person object on Mercury", () => {
    const person = new Person(21);

    const mercuryAge = person.ageOnPlanet(0.24);
    expect(mercuryAge).toEqual(87.5);
  });

  test("should return the age of a person object on Venus", () => {
    const person = new Person(21);

    const mercuryAge = person.ageOnPlanet(0.62);
    expect(mercuryAge).toEqual(87.5);
  });
});
