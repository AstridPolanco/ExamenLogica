function multiplicar() {
    var primer_num = parseInt(document.getElementById('primer_num').value);
    var segundo_num = parseInt(document.getElementById('segundo_num').value);
    var tercer_num = parseInt(document.getElementById('tercer_num').value);

    if (primer_num < tercer_num) {
      var resultado = primer-num * segundo_num * tercer_num;
      document.getElementById('resultado').innerHTML = 'Operación: Multiplicación Resultado: ' + resultado;
    } else {
      document.getElementById('resultado').innerHTML = 'El primer número no es menor que el tercer número.';
    }
  }

  function resta() {
    var primer_num = parseInt(document.getElementById('primer_num').value);
    var segundo_num = parseInt(document.getElementById('segundo_num').value);
    var tercer_num = parseInt(document.getElementById('tercer_num').value);

    if (segundo_num === 0) {
      if (primer_num < tercer_num) {
        var resultado = tercer_num - primer_num;
        document.getElementById('resultado').innerHTML = 'Operación: Resta Resultado: ' + resultado;
      } else {
        var resultado = primer_num - tercer_num;
        document.getElementById('resultado').innerHTML = 'Operación: Resta Resultado: ' + resultado;
      }
  }
  }

