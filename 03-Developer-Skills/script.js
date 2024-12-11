// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-6, -5, -33, -12, 20, 6, 17, 1, 4, 29, "error", 8];
const calcAmpl = function (arr) {
  let min = 255;
  let max = -255;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "error") continue;
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }
  return max - min;
};
console.log(temperatures);
console.log(calcAmpl(temperatures));
const printForecasts = function (temps) {
  let forecast = "";
  for (let i = 0; i < temps.length; i++)
    forecast += `... ${temps[i]} in ${i + 1} days ...`;
  console.log(forecast);
};
const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];
printForecasts(temps1);
printForecasts(temps2);
