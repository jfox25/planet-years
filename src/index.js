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
  let output = $("#output");
}
