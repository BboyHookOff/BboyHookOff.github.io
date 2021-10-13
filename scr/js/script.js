"use strict"
// ---- рассчёт стоимости ------------------------------
let def = "Выберите пункт...";
let type = { time: 0, price: 0, }
let design = { time: 0, price: 0, }
let adapt = { time: 0, price: 0, }
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
function countUreWeb() {
  countType();
  countDesign();
  countAdapt();
  if ( document.getElementById("saitType").options.selectedIndex != 0 &&
       document.getElementById("saitDesign").options.selectedIndex != 0 &&
       document.getElementById("saitAdapt").options.selectedIndex != 0 ){
    document.getElementById("worktime").innerHTML =
      (type.time + design.time + adapt.time) + " недели";
    document.getElementById("webcost").innerHTML =
      (type.price + design.price + adapt.price) + " рублей";
      if(count == 0){
      alert("Вы рассчитали стоимость сайта! Оставьте заявку нажав на кнопку формы :)");
      count++;
    }
  }
}
// ---- рассчёт стоимости ------------------------------

// ---- анимация бегущих цифр в статистике -------------------
let options = {threshold: [1]};
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.st_item'); //  $('.st_item');
elements.each((i,el) => {
  observer.observe(el);
});

let startItemOfStat = 0;
let st1 = 100, st2 = 88, st3 = 3, st4 = 24; // будущие знацения 4-х статистик
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting){

      setTimeout( function functionName() {
          increaseStatistics("#st1",startItemOfStat,st1);
          increaseStatistics("#st2",startItemOfStat,st2);
          increaseStatistics("#st3",startItemOfStat,st3);
          increaseStatistics("#st4",startItemOfStat,st4);
          startItemOfStat = 10000; // чтобы повторно анимация не включалась на телефонах когда блоки идут сверху-вниз
      },750)
      // change.target.classList.add('op1');
    }
  });
}

function increaseStatistics(statisticClass, start, finish) {
  let timer = 200/start;
  if(start < finish){
    if(start < finish-2){
      setTimeout(function () {
        start++;
        $(statisticClass).text(start);
        increaseStatistics(statisticClass, start, finish)
      },timer);
    }
    else{
      setTimeout(function () {
        start++;
        $(statisticClass).text(start);
        increaseStatistics(statisticClass, start, finish)
      },timer+200);
    }
  }
}

// после клика на ссылку анимация сбрасывается, чтобы она поворялась не единожды
$('a').click(function () {
  startItemOfStat = 0;
  $('#st1').text(0);
  $('#st2').text(0);
  $('#st3').text(0);
  $('#st4').text(0);
});
// ---- анимация бегущих цифр в статистике -------------------

// ---- оптимизация картинок в слайдере ----------------------
let options1 = {threshold: [0.5]};
let observer1 = new IntersectionObserver(onEntry1, options1);
let elements1 = $('.case-slide img'); // $('.case-slide img');$('.opt-picture');
elements1.each((i,el) => {
  observer1.observe(el);
});

function onEntry1(entry) {
  entry.forEach(change => {
    if (change.isIntersecting){
      change.target.src = change.target.dataset.src;
    }
  });
}
// ---- оптимизация картинок в слайдере ----------------------

// ----
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});
