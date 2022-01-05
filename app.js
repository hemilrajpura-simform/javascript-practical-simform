var memoryStore = [];

function mc() {
  memoryStore = [];
  document.getElementById("memory-operation").innerHTML = 
  (memoryStore.length==0? "No Stored Value Available":memoryStore[0]);
}
function ms() {

  console.log(memoryStore);
  memoryStore.unshift(Number(scrn.value));
  console.log(memoryStore);
  document.getElementById("memory-operation").innerHTML =
    (memoryStore.length == 0 ? "No Stored Value Available" : memoryStore[0]);
}

function mr() {
  console.log(memoryStore[0]);
  scrn.value += memoryStore[0];
}
function mplus() {
scrn.value = Number(scrn.value)+memoryStore[0];
}
function mminus() {
  scrn.value = Number(scrn.value)-memoryStore[0];
}


document.getElementById("memory-operation").innerHTML =
  (memoryStore.length == 0 ? "No Stored Value Available" : memoryStore[0]);

function checkAlpha(e) {
  var x = e.which || e.keycode;
  if ((x >= 48 && x <= 57))
    return true;
  else
    return false;
}

function positive() {
  scrn.value = 0 - scrn.value;
}

function backspace() {
  scrn.value = scrn.value.substr(0, scrn.value.length - 1);
}
function one() {
  scrn.value = '1';
}
function tenpower() {
  scrn.value = Math.pow(10, scrn.value);
}
function sign() {
  scrn.value = Math.sign(scrn.value);
}
function oneDivide() {
  scrn.value = (1 / scrn.value);
}
function tenpower() {
  scrn.value = Math.pow(scrn.value, -1);
}
function fact() {

  var i, num, f;
  f = 1;
  num = scrn.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  scrn.value = f;

}
function sqrt() {
  scrn.value = Math.sqrt(scrn.value) * 2;
}

function log() {
  scrn.value = Math.log(scrn.value);
}

function trigo() {
  var e = document.getElementById("Trigonometry").value;
  console.log(e);
  console.log(Math.sin(scrn.value));

  if (e == 1) {
    scrn.value = Math.sin(scrn.value);
    document.getElementById("Trigonometry").selectedIndex = 0;
  }
  else if (e == 2) {
    scrn.value = Math.cos(scrn.value);
    document.getElementById("Trigonometry").selectedIndex = 0;
  }
  else if (e == 3) {
    scrn.value = Math.tan(scrn.value);
    document.getElementById("Trigonometry").selectedIndex = 0;
  }

}




function Function() {
  var e = document.getElementById("Function").value;
  console.log(e);

  if (e == 1) {
    scrn.value = Math.abs(scrn.value);
    document.getElementById("Function").selectedIndex = 0;
  }
  else if (e == 2) {
    scrn.value = Math.acos(scrn.value);
    document.getElementById("Function").selectedIndex = 0;
  }
  else if (e == 3) {
    scrn.value = Math.acosh(scrn.value);
    document.getElementById("Function").selectedIndex = 0;
  }
  else if (e == 4) {
    scrn.value = Math.asin(scrn.value);
    document.getElementById("Function").selectedIndex = 0;
  }
}


function asin() {
  scrn.value = Math.asin(scrn.value);
}
function acos() {
  scrn.value = Math.acosh(scrn.value);
}
function acosh() {
  scrn.value = Math.acosh(scrn.value);
}

function abs() {
  scrn.value = Math.abs(scrn.value);
}

function sin() {
  scrn.value = Math.sin(scrn.value);
}
function cos() {
  scrn.value = Math.cos(scrn.value);
}
function tan() {
  scrn.value = Math.tan(scrn.value);
}