export class Person {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.planetArray = [
      "mercury",
      0.24,
      "venus",
      0.62,
      "mars",
      1.88,
      "jupiter",
      11.86,
    ];
    if (lifeExpectancy < age) {
      this.overLifeExpectency = true;
    } else {
      this.overLifeExpectency = false;
    }
  }

  ageOnPlanet(planetYears, age) {
    const ageNum = age / planetYears;
    return Math.round(ageNum * 10) / 10;
  }

  calculateAllAges(planetArray) {
    for (let i = 0; i < planetArray.length; i += 2) {
      this[planetArray[i] + "Age"] = this.ageOnPlanet(
        planetArray[i + 1],
        this.age
      );
      this[planetArray[i] + "LeftToLive"] = this.leftToLive(
        this[planetArray[i] + "Age"],
        planetArray[i + 1]
      );
    }
  }

  leftToLive(planetAge, planetYears) {
    const lifeExpecentyPlanet = this.ageOnPlanet(
      planetYears,
      this.lifeExpectancy
    );
    const leftToLive = lifeExpecentyPlanet - planetAge;
    return Math.abs(Math.round(leftToLive * 10) / 10);
  }
}
