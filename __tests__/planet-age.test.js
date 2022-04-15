import { Person } from "./../src/planet-age.js";

describe("Person", () => {
  test("should return the age of a person object", () => {
    const person = new Person(21, 75);
    expect(person.age).toEqual(21);
    expect(person.lifeExpectancy).toEqual(75);
  });

  test("should return the age of a person object on Mercury", () => {
    const person = new Person(21, 75);

    const mercuryAge = person.ageOnPlanet(0.24, person.age);
    expect(mercuryAge).toEqual(87.5);
  });

  test("should return the age of a person object on Venus", () => {
    const person = new Person(21, 75);

    const venusAge = person.ageOnPlanet(0.62, person.age);
    expect(venusAge).toEqual(33.9);
  });

  test("should return the age of a person object on Mars", () => {
    const person = new Person(21, 75);

    const marsAge = person.ageOnPlanet(1.88, person.age);
    expect(marsAge).toEqual(11.2);
  });

  test("should return the age of a person object on Jupiter", () => {
    const person = new Person(21, 75);

    const jupiterAge = person.ageOnPlanet(11.86, person.age);
    expect(jupiterAge).toEqual(1.8);
  });

  test("should set the age value for all planets on the person object", () => {
    const person = new Person(21, 75);
    person.calculateAllAges();
    expect(person.mercuryAge).toEqual(87.5);
    expect(person.venusAge).toEqual(33.9);
    expect(person.marsAge).toEqual(11.2);
    expect(person.jupiterAge).toEqual(1.8);
  });

  test("should return how much you have left to live on mecuery", () => {
    const person = new Person(21, 75);
    const mercuryAge = person.ageOnPlanet(0.24, person.age);
    const leftToLive = person.leftToLive(mercuryAge, 0.24);

    expect(mercuryAge).toEqual(87.5);
    expect(leftToLive).toEqual(225);
    expect(person.overLifeExpectency).toEqual(false);
  });

  test("should return how much your over life expetency", () => {
    const person = new Person(21, 20);
    const mercuryAge = person.ageOnPlanet(0.24, person.age);
    const leftToLive = person.leftToLive(mercuryAge, 0.24);

    expect(mercuryAge).toEqual(87.5);
    expect(leftToLive).toEqual(4.2);
    expect(person.overLifeExpectency).toEqual(true);
  });

  test("should return how much you have left to live on all planets", () => {
    const person = new Person(21, 75);
    person.calculateAllAges();
    expect(person.mercuryAge).toEqual(87.5);
    expect(person.venusAge).toEqual(33.9);
    expect(person.marsAge).toEqual(11.2);
    expect(person.jupiterAge).toEqual(1.8);
    expect(person.mercuryLeftToLive).toEqual(225);
    expect(person.venusLeftToLive).toEqual(87.1);
    expect(person.marsLeftToLive).toEqual(28.7);
    expect(person.jupiterLeftToLive).toEqual(4.5);
    expect(person.overLifeExpectency).toEqual(false);
  });

  test("should return how much you have left to live on all planets when your older than life expectency", () => {
    const person = new Person(21, 20);
    person.calculateAllAges();
    expect(person.mercuryAge).toEqual(87.5);
    expect(person.venusAge).toEqual(33.9);
    expect(person.marsAge).toEqual(11.2);
    expect(person.jupiterAge).toEqual(1.8);
    expect(person.mercuryLeftToLive).toEqual(4.2);
    expect(person.venusLeftToLive).toEqual(1.6);
    expect(person.marsLeftToLive).toEqual(0.6);
    expect(person.jupiterLeftToLive).toEqual(0.1);
    expect(person.overLifeExpectency).toEqual(true);
  });
});
