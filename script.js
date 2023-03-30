let output = document.getElementById("output");
let expression = "";

function addChar(char) {
	expression += char;
	output.innerHTML = expression;
}

function deleteChar() {
	expression = expression.slice(0, -1);
	output.innerHTML = expression;
}

function clearOutput() {
	expression = "";
	output.innerHTML = "0";
}

function calculate() {
	let result = eval(expression);
	output.innerHTML = result;
	expression = result;
}
