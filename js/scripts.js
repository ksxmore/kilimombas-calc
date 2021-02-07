/* global document */
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
}
