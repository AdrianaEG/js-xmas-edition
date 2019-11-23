//SINTÁXIS: ACCEDER A ELEMENTOS DE UN FORMULARIO A TRAVÉS DE SUS ATRIBUTOS (NO POR ID O CLASES)

//POR EJEMPLO PUEDE SABER QUE RADIOBUTTOM ESTÁ SELECCIONADO 

//console.log(document.querySelector('[name=nombre]')); //le estoy diciendo dame los elementos que tengan el atributo name='nombre' :)

//console.log(document.querySelectorAll('[name=comportamiento]')); // esto me trae todos los radiobutomm que tiene el atributo name='comportamiento'; 

//console.log(document.querySelector('#carta-a-santa')); // me devuelve el formulario que tiene el id ese.
//console.log(document.querySelector('#carta-a-santa').comportamiento); //me devuelve los elementos que tienen como name comportamiento y están dentro del form con id carta-a-santa. 
//console.log(document.querySelector('#carta-a-santa').comportamiento.value); //me devuelve el radiobuttom que está seleccionado. 
//console.log(document.querySelector('#carta-a-santa').nombre.value); //lo que está haciendo es devolver el valor que está dentro del input con name nombre que está dentro del form... es decir accedo a los datos a traves de su atributo no a través del id o clases como veniamos haciendo. 
//console.log(document.formulario)//me trae el formulario que tiene como name='formulario'.
//console.log(document.forms['carta-a-santa']); // es otra forma de hacer lo mismo. 

const $formulario = document.querySelector('#carta-a-santa'); //otra forma: document.formulario; es decir agarrarlo por el name... otra es document.querySelector('[name=formulario]');

const nombre = $formulario.nombre.value; // otra forma document.querySelector('[name=nombre]').value;

const ciudad = document.querySelector('[name=ciudad]').value; //otra forma: document.formulario.ciudad.value; o const $ciudad = $formulario.ciudad.value;

const comportamiento = $formulario.comportamiento.value; //document.querySelectorAll('[name=comportamiento]').value;

const descripcionRegalo = $formulario['descripcion-regalo'].value; //escribí el name entre llaves y con comillas porque tiene un guion en el medio :)
//otra forma de hacerlo sería esta: document.querySelector('[name=descripcion-regalo]').value;

//console.log(nombre);
//console.log(ciudad);
//console.log(comportamiento);
//console.log(descripcionRegalo);


function validarNombre(nombre) {
    nombre = nombre.trim(); //el .trim() es para eliminar espacios en ambos extremos.
    /* Una forma: 
    if(nombre === ''){
        console.log('Este campo debe tener al menos 1 caracter');
    }
    else if(nombre.length > 50){
        console.log('Este campo debe tener menos de 50 caracteres');
    }*/

    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }

    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }

    if (!/^[a-z]+$/i.test(nombre)) { //si fuese nombre y apellido /^[a-z]+ [a-z]+$/i.test(nombre);
        return 'el campo nombre solo acepta letras';
    }

    return '';
}
validarNombre(nombre);

function validarCiudad(ciudad) {
    if (ciudad === '') { //se puede escribir también if(ciudad.length === 0){}
        return 'Debe seleccionar una ciudad';
    }
    return '';
}
console.log(validarCiudad(ciudad));

function validarDescripcionRegalo(descripcionRegalo) {
    descripcionRegalo = descripcionRegalo.trim();
    if (descripcionRegalo.length >= 100) {
        return 'La descripción del regalo debe ser más corta';
    } else if (descripcionRegalo.length === 0) {
        return 'Por favor escriba una descripción del regalo';
    } else if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return 'El campo descripción solo puede tener números y letras';
    } else {
        return '';
    }
}
console.log(validarDescripcionRegalo(descripcionRegalo));
