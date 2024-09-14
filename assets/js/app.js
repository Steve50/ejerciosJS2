var btnShowModalCom = document.getElementById("showModalCom");
var btnShowModalTreCom = document.getElementById("showModalTreCom");
var btnShowModalDiv = document.getElementById("showModalDiv");
var showComp = document.getElementById("showCom");
var showTreComp = document.getElementById("showTreCom");
var showDiv = document.getElementById("showDiv");
var formComp = document.getElementById("compNumbers");
var formTreComp = document.getElementById("compTreNumbers");
var formTreDiv = document.getElementById("divTwo");
var modal1 = document.getElementById("modalCom");
var modal2 = document.getElementById("modalTreCom");
var modal3 = document.getElementById("modalDiv");
const span = document.getElementsByClassName("cerrar")[0];
const span2 = document.getElementsByClassName("cerrar2")[0];
const span3 = document.getElementsByClassName("cerrar3")[0];

function compTwoNumbers(a, b) {
  if (a < b) {
    showComp.innerHTML = "El mayor es: " + b;
  } else if (a === b) {
    showComp.innerHTML = "Son iguales";
  } else {
    showComp.innerHTML = "El mayor es: " + a;
  }
}

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

function divTwo(a) {
  var result;
  result = a % 2;
  if (result === 0) {
    showDiv.innerHTML = "Si es divisible entre 2";
  } else {
    showDiv.innerHTML = "No es divisible";
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
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};
span.onclick = function () {
  modal1.style.display = "none";
};
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
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
span2.onclick = function () {
  modal2.style.display = "none";
};
btnShowModalDiv.onclick = function () {
  modal3.style.display = "block";
};
formTreDiv.addEventListener("submit", function (event) {
  event.preventDefault();
  const a = parseInt(document.getElementById("divNum").value);
  divTwo(a);
});
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};
span3.onclick = function () {
  modal3.style.display = "none";
};
