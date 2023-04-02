
function calculate1() {
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    var errorMessage = document.getElementById("error-message");

    if (base === "" || height === "" || side1 === "") {
        errorMessage.style.display = "block";
        document.getElementById("resultarea").value = "";
      } else {
        errorMessage.style.display = "none";
        var result1 = 0.5 * base * height;
        document.getElementById("resultarea").value = result1;
      }


    var side1 = document.getElementById("side").value;
    var base2 = document.getElementById("base").value;
    var errorMessage = document.getElementById("error-message");

    if (base === "" || height === "" || side1 === "") {
        errorMessage.style.display = "block";
        document.getElementById("resultperimeter").value = "";
      } else {
        errorMessage.style.display = "none";
        var result2 = Number(side1) + Number(side1) + Number(base2);
        document.getElementById("resultperimeter").value = result2;
      }

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

function goBack() {
    window.history.back();
}

function gotriangle() {
    window.location.href = "calctriangle.html";
}
