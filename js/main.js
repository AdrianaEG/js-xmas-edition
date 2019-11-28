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

const $form = document.querySelector('#carta-a-santa'); //otra forma: document.formulario; es decir agarrarlo por el name... otra es document.querySelector('[name=formulario]');

const nombre = $form.nombre.value; // otra forma document.querySelector('[name=nombre]').value;

const ciudad = document.querySelector('[name=ciudad]').value; //otra forma: document.formulario.ciudad.value; o const $ciudad = $formulario.ciudad.value;

const comportamiento = $form.comportamiento.value; //document.querySelectorAll('[name=comportamiento]').value;

const descripcionRegalo = $form['descripcion-regalo'].value; //escribí el name entre llaves y con comillas porque tiene un guion en el medio :)
//otra forma de hacerlo sería esta: document.querySelector('[name=descripcion-regalo]').value;

//console.log(nombre);
//console.log(ciudad);
//console.log(comportamiento);
//console.log(descripcionRegalo);

function validarFormulario(event) {
    const $form = document.querySelector('#carta-a-santa');
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);
    
    document.querySelector('#errores').innerText = '';

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    };

    //console.log(errores);

    const esExito = manejarErrores(errores) === 0;

    if (esExito) {
        document.querySelector('#exito').className = '';
        document.querySelector('#carta-a-santa').className = 'oculto';

        setTimeout(function () {
            window.location.href = "wishlist.html";
        }, 5000);
    }

    event.preventDefault(); //cancela el evento. No deja que ese evento se siga propagando.  
    //event bubbling, si nosotros tenemos un input dentro de una etiqueta p, la cual está dentro de un div que está dentro de un body, el body está dentro de la etiqueta html, por ende si le hacemos click al input le estamos haciendo click a cada uno de los elementos. --> Acá lo puedo ver document.querySelectorAll('*').forEach(function(element){element.onclick = function (){console.log(this.tagName);}});
}

function manejarErrores(errores) {
    //errorNombre = errores.nombre;
    //errorCiudad = errores.ciudad;
    //errorDescripcionRegalo = errores.descripcionRegalo;


    /*if(errorNombre){// esto es lo mismo que if(errorNombre.length > 0) ó errorNombre !== ''
        $form.nombre.className = 'error';
    }
    else{
        $form.nombre.className = '';
    }
    
    if(errorCiudad){
        $form.ciudad.className = 'error';
    }
    else{
        $form.ciudad.className = '';
    }
    
    if(errorDescripcionRegalo){
        $form['descripcion-regalo'].className = 'error';
    }
    else{
        form['descripcion-regalo'].className = '';
    }*/

    //Una mejor forma de hacerlo: --> Manera dinámica:

    const keys = Object.keys(errores);
    //console.log(keys);

    const $errores = document.querySelector('#errores');


    let cantidadErrores = 0;

    keys.forEach(function (key) { //función de callback que la llama el navegador, yo defino la función pero el navegador es el que se encarga de llamarla

        const error = errores[key];

        if (error) {
            cantidadErrores++;
            $form[key].className = 'error';

            const $error = document.createElement('li');
            $error.innerText = error;

            $errores.appendChild($error);
        } // esto lo que haría sería $form['nombre'].className = 'error' entonces va al form y busca el elemento que tenga el atributo  name = 'nombre' y le pone la clase que le stoy diciendo
        else {
            $form[key].className = '';

        }
    });

    return cantidadErrores;
}

$form.onsubmit = validarFormulario; //onsubmit es una propiedad del objeto form. Es una función de callback, el navegador ejecuta esa función y qué parámetros se van a enviar

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
