function appendValue(value) {
    document.getElementById("result").value += value;
}
function clearScreen() {
    document.getElementById("result").value = "";
}
function calculate() {
    try {
        let input = document.getElementById("result").value;
        let answer = eval(input);
        document.getElementById("result").value = answer;
    } catch (error) {
        document.getElementById("result").value = "Error!";
    }
}
