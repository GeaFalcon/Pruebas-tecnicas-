// Crear una funcion para multiplicar dos numeros sin el simbolo de multiplicar

function mul(a, b) {
  var num = a;
  var num2 = b;
  var primo = a;

  for (var i = 0; i < num2 - 1; i++) {
    primo = primo + num;

    console.log(primo);
  }
}
mul(5, 11);
