/* global document */
var klasy = [
   "list-group-item list-group-item-info",
   "list-group-item list-group-item-primary",
   "list-group-item list-group-item-success",
   "list-group-item list-group-item-warning",
   "list-group-item list-group-item-danger",
   "list-group-item list-group-item-dark",
];
var button = document.getElementById("btn1");
var border = " border-2 border-dark rounded";

function clearTab() {
   var i;

   for (i = 0; i < 6; i++) {
      if (document.getElementById("k" + i).classList.contains("rounded") === true) {
         document.getElementById("k" + i).className = klasy[i];
      }
   }
}


function SetKili(wynik) {

   if (wynik >= 0.1 && wynik < 0.25) {
      document.getElementById("k0").classList.add("border-2", "border-dark", "rounded");
   } else if (wynik >= 0.25 && wynik < 0.5) {
      document.getElementById("k1").classList.add("border-2", "border-dark", "rounded");
   } else if (wynik >= 0.5 && wynik < 0.8) {
      document.getElementById("k2").classList.add("border-2", "border-dark", "rounded");
   } else if (wynik >= 0.8 && wynik < 1.2) {
      document.getElementById("k3").classList.add("border-2", "border-dark", "rounded");
   } else if (wynik >= 1.2 && wynik < 1.7) {
      document.getElementById("k4").classList.add("border-2", "border-dark", "rounded");
   } else if (wynik >= 1.7) {
      document.getElementById("k5").classList.add("border-2", "border-dark", "rounded");
   }
}


function Calculator() {
   var a = Number(document.inputy.piwo.value);
   var b = Number(document.inputy.woda.value);
   var c = Number(document.inputy.wino.value);
   var wynik = 0;

   if (document.inputy.checkbox.checked) {
      wynik = ((a + (b * 0.018) + (c * 0.005)) * 1.1) / 10;
   } else {
      wynik = (a + (b * 0.018) + (c * 0.005)) / 10;
   }

   document.getElementById("wynik").innerHTML = wynik.toFixed(2);

   SetKili(wynik);
}

button.addEventListener('click', Calculator, false);
button.addEventListener('click', clearTab, false);
