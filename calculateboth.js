function calculate() {
    const base = document.getElementById("base").value;
    const height = document.getElementById("side").value;
    const result1 = base * height;
    document.getElementById("resultarea").value = result1;

    const side1 = document.getElementById("side").value;
    const side2 = document.getElementById("base").value;
    const result2 = 2 * (Number(side1) + Number(side2));
    document.getElementById("resultperimeter").value = result2;
}