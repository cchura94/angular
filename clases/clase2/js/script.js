function suma () {
	 var a = parseInt(document.getElementById("n1").value);
	 var b = parseInt(document.getElementById("n2").value);
	 document.getElementById("resultado").value = a+b;
}

function resta () {
	var a = parseInt(document.getElementById("n1").value);
	 var b = parseInt(document.getElementById("n2").value);
	 document.getElementById("resultado").value = a-b;
}

function multiplicacion () {
	var a = parseInt(document.getElementById("n1").value);
	 var b = parseInt(document.getElementById("n2").value);
	 document.getElementById("resultado").value = a*b;
}

function division () {
	var a = parseInt(document.getElementById("n1").value);
	 var b = parseInt(document.getElementById("n2").value);
	 document.getElementById("resultado").value = a/b;
}
