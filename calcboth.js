
function calculate1() {
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    var side = document.getElementById("side").value;

    var result1 = 0.5 * base * height;
    var result2 = Number(side) + Number(side) + Number(base);

    document.getElementById("resultarea").value = result1.toFixed(2);
    event.preventDefault();
    
    document.getElementById("resultperimeter").value = result2.toFixed(2);
    event.preventDefault();

    
}

function calculate2() {
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    var side = document.getElementById("side").value;

    var result1 = base * height;
    var result2 = 2 * (Number(side) + Number(base));

    document.getElementById("resultarea").value = result1.toFixed(2);
    event.preventDefault();
    
    document.getElementById("resultperimeter").value = result2.toFixed(2);
    event.preventDefault();
}

function goHome() {
  window.location.href ="index.html";
}


/*
function calculate1() {
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    var errorMessage = document.getElementById("error-message");

    if (base === "" || height === "") {
        errorMessage.style.display = "block";
        document.getElementById("resultarea").value = "";
      } else {
        errorMessage.style.display = "none";
        var result1 = 0.5 * base * height;
        document.getElementById("resultarea").value = result1.toFixed(2);
    }
 

function calculate2() {
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    var errorMessage = document.getElementById("error-message");

    if (base === "" || height === "" || side1 === "") {
        errorMessage.style.display = "block";
        document.getElementById("resultarea").value = "";
      } else {
        errorMessage.style.display = "none";
        var result1 = base * height;
        document.getElementById("resultarea").value = result1;
      }


    var side1 = document.getElementById("side").value;
    var base = document.getElementById("base").value;
    var errorMessage = document.getElementById("error-message");

    if (base === "" || height === "" || side1 === "") {
        errorMessage.style.display = "block";
        document.getElementById("resultperimeter").value = "";
      } else {
        errorMessage.style.display = "none";
        var result2 = 2 * (Number(side1) + Number(base));
        document.getElementById("resultperimeter").value = result2;
      }
}
function goHome() {
    window.location.href ="index.html";
}
 */