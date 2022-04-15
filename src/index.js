import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { Person } from "./planet-age";

$("#user-form")
  .children("button")
  .click(function (event) {
    event.preventDefault();
    const age = parseInt($("#age-input").val());
    const lifeExpectancy = parseInt($("#life-input").val());
    const person = new Person(age, lifeExpectancy);
    person.calculateAllAges();
    buildUI(person);
  });

function buildUI(person) {
  let string;
  if (person.overLifeExpectency) {
    string = "Over Life Expectancy By: ";
  } else {
    string = "Life Expectancy Remaining: ";
  }
  let output = $("#output");
  person.ageArray.forEach((element) => {
    $(output).append(
      `<ul class='planet'><img src='${element[3]}'><li><h3>${element[2]}:</h3></li><li>Age on Planet: ${element[0]} years</li><li>${string}${element[1]} years</li></ul>`
    );
  });
}
