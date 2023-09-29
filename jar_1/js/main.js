const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");

const collor = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42,
];
const collor2 = [
  10, 53, 111, 166, 221, 300, 370, 444, 511, 650, 700, 813, 871, 926, 950, 999,
  1000,
];

const collor3 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50,
];
const collor4 = [
  10, 53, 111, 166, 221, 333, 371, 445, 512, 690, 804, 823, 831, 946, 950, 999,
  1000, 1100, 1200, 1300, 1400, 1500,
];

let i = 0;
const colroFun = setInterval(() => {
  i = i % collor.length;
  num1.textContent = collor[i];
  if (collor[i] === 42) {
    clearInterval(colroFun);
  }

  i++;
}, 45);
// //////////////////////////////////////////////////
b = 0;
const colroFun2 = setInterval(() => {
  b = b % collor2.length;
  num2.textContent = collor2[b];
  if (collor2[b] === 1000) {
    clearInterval(colroFun2);
  }
  b++;
}, 120);

/////////////////////////////////////

c = 0;
const colroFun3 = setInterval(() => {
  c = c % collor3.length;
  num3.textContent = collor3[c];
  if (collor3[c] === 50) {
    clearInterval(colroFun3);
  }
  c++;
}, 44);

d = 0;
const colroFun4 = setInterval(() => {
  d = d % collor4.length;
  num4.textContent = collor4[d];
  if (collor4[d] === 1500) {
    clearInterval(colroFun4);
  }
  d++;
}, 100);
// ////////////////////////////////////////////////////////////2222222222222222222222222222222222222222222
