var btnShowModalCom = document.getElementById("showModalCom");
var btnShowModalTreCom = document.getElementById("showModalTreCom");
var btnShowModalDiv = document.getElementById("showModalDiv");
var btnShowModalHMA = document.getElementById("showModalHMA");
var btnShowModalVowels = document.getElementById("showModalVowels");
var btnShowModalHMV = document.getElementById("showModalHMV");
var showComp = document.getElementById("showCom");
var showTreComp = document.getElementById("showTreCom");
var showDiv = document.getElementById("showDiv");
var showHMA = document.getElementById("showHMA");
var showVowels = document.getElementById("showVowels");
var showHMV = document.getElementById("showHMV");
var formComp = document.getElementById("compNumbers");
var formTreComp = document.getElementById("compTreNumbers");
var formDiv = document.getElementById("divTwo");
var formHMA = document.getElementById("howManiA");
var formVowels = document.getElementById("vowels");
var formHMV = document.getElementById("howMVowels");
var modal1 = document.getElementById("modalCom");
var modal2 = document.getElementById("modalTreCom");
var modal3 = document.getElementById("modalDiv");
var modal4 = document.getElementById("modalHMA");
var modal5 = document.getElementById("modalVowels");
var modal6 = document.getElementById("modalHMV");
const span = document.getElementsByClassName("cerrar")[0];
const span2 = document.getElementsByClassName("cerrar2")[0];
const span3 = document.getElementsByClassName("cerrar3")[0];
const span4 = document.getElementsByClassName("cerrar4")[0];
const span5 = document.getElementsByClassName("cerrar5")[0];
const span6 = document.getElementsByClassName("cerrar6")[0];

//Funcion y modal para saber cual es el mayor de dos numeros
function compTwoNumbers(a, b) {
  if (a < b) {
    showComp.innerHTML = "El mayor es: " + b;
  } else if (a === b) {
    showComp.innerHTML = "Son iguales";
  } else {
    showComp.innerHTML = "El mayor es: " + a;
  }
}

btnShowModalCom.onclick = function () {
  modal1.style.display = "block";
};
formComp.addEventListener("submit", function (event) {
  event.preventDefault();
  const a = parseInt(document.getElementById("num1").value);
  const b = parseInt(document.getElementById("num2").value);
  compTwoNumbers(a, b);
});
span.onclick = function () {
  modal1.style.display = "none";
};

//Funcion y modal para saber cual es el mayor de tres numeros
function compTreNumbers(a, b, c) {
  if (a > b && a > c) {
    showTreComp.innerHTML = "El mayor es: " + a;
  } else if (b > a && b > c) {
    showTreComp.innerHTML = "El mayor es: " + b;
  } else if (c > b && c > a) {
    showTreComp.innerHTML = "El mayor es: " + c;
  } else if (a === b && b === c && c === a) {
    showTreComp.innerHTML = "Son iguales";
  } else {
    showTreComp.innerHTML = "Hay dos numeros iguales";
  }
}

btnShowModalTreCom.onclick = function () {
  modal2.style.display = "block";
};
formTreComp.addEventListener("submit", function (event) {
  event.preventDefault();
  const a = parseInt(document.getElementById("1num").value);
  const b = parseInt(document.getElementById("2num").value);
  const c = parseInt(document.getElementById("3num").value);
  compTreNumbers(a, b, c);
});
span2.onclick = function () {
  modal2.style.display = "none";
};

//Funcion y modal para saber si un numero es divisible entre dos
function divTwo(a) {
  var result;
  result = a % 2;
  if (result === 0) {
    showDiv.innerHTML = "Si es divisible entre 2";
  } else {
    showDiv.innerHTML = "No es divisible";
  }
}

btnShowModalDiv.onclick = function () {
  modal3.style.display = "block";
};
formDiv.addEventListener("submit", function (event) {
  event.preventDefault();
  const a = parseInt(document.getElementById("divNum").value);
  divTwo(a);
});
span3.onclick = function () {
  modal3.style.display = "none";
};

//Funcion y modal para saber cuantas a hay en una oracion
function checkA(a) {
  const result = a.match(/[aA]/g);
  var res = result ? result.length : 0;
  showHMA.innerHTML = `Hay ${res} A en la oracion`;
}
btnShowModalHMA.onclick = function () {
  modal4.style.display = "block";
};
formHMA.addEventListener("submit", function (event) {
  event.preventDefault();
  const a = document.getElementById("checkA").value;
  checkA(a);
});
span4.onclick = function () {
  modal4.style.display = "none";
};

//Funcion y modal para saber cuales vocales hay en una oracion
function checkVowels(a) {
  const result = a.match(/[aeiouAEIOU]/g);
  showVowels.innerHTML = `Estás son las vocales ${result}`;
}
btnShowModalVowels.onclick = function () {
  modal5.style.display = "block";
};
formVowels.addEventListener("submit", function (event) {
  event.preventDefault();
  const a = document.getElementById("checkV").value;
  checkVowels(a);
});
span5.onclick = function () {
  modal5.style.display = "none";
};

//Funcion y modal para saber cuantas vocales hay en una oracion
function howMVowels(a) {
  const result = a.match(/[aeiouAEIOU]/g);
  var res = result ? result.length : 0;
  showHMV.innerHTML = `Hay ${res} vocales en la oracion`;
}
btnShowModalHMV.onclick = function () {
  modal6.style.display = "block";
};
formHMV.addEventListener("submit", function (event) {
  event.preventDefault();
  const a = document.getElementById("hMV").value;
  howMVowels(a);
});
span6.onclick = function () {
  modal6.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  } else if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
};
