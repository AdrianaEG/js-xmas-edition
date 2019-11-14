function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();

//console.assert es la función que vamos a utilizar para hacer pruebas. si yo hago console.assert(1===1)--> undefined. console.assert(1===2)--> assertion failed.
//console.assert(1===2. "1 no es igual a 2");

/* ejemplo de otra prueba. 
function sumar(a, b){
    return a+b;
}

console.assert(sumar(1, 2) === 3, "la suma de 1 + 2 no dio 3");//si no funcionó me da ese mensaje... sino no me manda nada. */

//ahora validarCiudad() y validarDescripcionRegalo() no sean vacíos y hacer las pruebas de eso. 

//crear también pruebas para las funciones de las tareas 5 y 6. 


function probarValidarCiudad(){
    console.assert(
        validarCiudad('')==='Debe seleccionar una ciudad', 'validarCiudad() No validó si no selecciona una ciudad'
    );
}
probarValidarCiudad();

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'Debe escribir una descripción del regalo', 'validarDescripcionRegalo() no validó si no escribe descripción'
    );
}

probarValidarDescripcionRegalo();

