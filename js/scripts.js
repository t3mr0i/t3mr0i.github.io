function calculateDaysBetweenDates(begin, end) {
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var days = Math.round((endDate - beginDate) / (1000 * 60 * 60 * 24));
    return days;
}
function buttonSayingHello() {
    document.getElementById("helloButton").innerHTML = "Hello There";
}

function redcoloredButton(colorParameter) {
    document.getElementById("redButton").style.backgroundColor = colorParameter;
}
function turnBackroundRed() {
    document.body.style.backgroundColor = "red";
}
function showAlertWithWarning() {
    alert("Warning: This is a warning");
}
function changeBackgroundOfBodyWithParameter(colorParameter) {
    document.body.style.backgroundColor = colorParameter;
}

function iterateOverAHashMapAndAddOneToEachValue(map) {
    for (var key in map) {
        map[key] = map[key] + 1;
    }
}

function createNameInputFieldAndTakeTheNameAsHeader() {
    var nameInputField = document.createElement("inputter");
    nameInputField.type = "text";
    nameInputField.placeholder = "Enter your name";
    nameInputField.id = "nameInputField";
    document.getElementById("header").appendChild(nameInputField);
}