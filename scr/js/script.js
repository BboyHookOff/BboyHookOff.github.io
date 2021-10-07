"use strict"

let def = "Выберите пункт...";
let type = {
  time: 0,
  price: 0,
}
let design = {
  time: 0,
  price: 0,
}
let adapt = {
  time: 0,
  price: 0,
}
let count = 0;
function countType() {
  let indeX = document.getElementById("saitType").options.selectedIndex;
  if(indeX == 1) { type.price = 1000; type.time = 1; }
  if(indeX == 2) { type.price = 2000; type.time = 1; }
  if(indeX == 3) { type.price = 1000; type.time = 1; }
  if(indeX == 4) { type.price = 3000; type.time = 1; }
  if(indeX == 5) { type.price = 1000; type.time = 1; }
  if(indeX == 6) { type.price = 2000; type.time = 1; }
}
function countDesign() {
  let indeX = document.getElementById("saitDesign").options.selectedIndex;
  if(indeX == 1) { design.price = 1000; design.time = 0.5; }
  if(indeX == 2) { design.price = 2000; design.time = 0.5; }
  if(indeX == 3) { design.price = 1000; design.time = 0.5; }
  if(indeX == 4) { design.price = 2000; design.time = 1; }
  if(indeX == 5) { design.price = 2000; design.time = 1; }
  if(indeX == 6) { design.price = 4000; design.time = 1.5; }
}
function countAdapt() {
  let indeX = document.getElementById("saitAdapt").options.selectedIndex;
  if(indeX == 1) { adapt.price = 2500; adapt.time = 0; }
  if(indeX == 2) { adapt.price = 2500; adapt.time = 0; }
  if(indeX == 3) { adapt.price = 5000; adapt.time = 0.5; }
}
setInterval(function () {
  countType();
  countDesign();
  countAdapt();
  if ( document.getElementById("saitType").options.selectedIndex != 0 &&
       document.getElementById("saitDesign").options.selectedIndex != 0 &&
       document.getElementById("saitAdapt").options.selectedIndex != 0 ){
    document.getElementById("worktime").innerHTML =
      (type.time + design.time + adapt.time) + " недель";
    document.getElementById("webcost").innerHTML =
      (type.price + design.price + adapt.price) + " рублей";
      if(count == 0){
      alert("Вы рассчитали стоимость сайта! Оставьте заявку нажав на кнопку формы :)");
      count++;
    }
  }
}, 100)
