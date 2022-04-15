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
      `<ul><li>${element[2]}:</li><li>Age on Planet: ${element[0]} years</li><li>${string}${element[1]} years</li><li><img src='${element[3]}'></li></ul>`
    );
  });
}
