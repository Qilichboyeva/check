function myFunction () {
    var input1 = parseFloat(document.getElementById( "blog1").value);
    var input2 = parseFloat(document.getElementById ('blog2').value);
    var yourResult = 3.2*input1 +3.1*input2;

  document.getElementById("result").innerHTML = "Siz to'plagan ball="+yourResult;
}