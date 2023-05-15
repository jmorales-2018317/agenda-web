function Login(){
    sessionStorage.clear();
    var usuario=document.getElementById("user").value;
    var password=document.getElementById("pass").value;

    sessionStorage.user = usuario;
    sessionStorage.pass = password;
    
}

function Perfil(){
    sessionStorage.user;
    sessionStorage.pass;

    var nombreDeUsuario = sessionStorage.getItem('user');
    var contrasena = sessionStorage.getItem('pass');

    document.getElementById("user1").value=nombreDeUsuario;
    document.getElementById("pass1").value=contrasena;

}

function InfoContacto1(){
    var nombre = "Elizabeht Daniela López García";
    var nombreUsuario = "elilopez210132";
    var correo = "elizabehtgarcia1998@gmail.com";
    var contra = "K5S601X5s";
    var tel = "54863205";
    sessionStorage.nombre = nombre;
    sessionStorage.nombreUsuario = nombreUsuario;
    sessionStorage.correo = correo;
    sessionStorage.contra = contra;
    sessionStorage.tel = tel;
}

function InfoContacto2(){
    var nombre = "Manuel Gabriel Perales Flores";
    var nombreUsuario = "manuelflores6541";
    var correo = "manuelflores1987@gmail.com";
    var contra = "LSAC6A5SC";
    var tel = "48633920";
    sessionStorage.nombre = nombre;
    sessionStorage.nombreUsuario = nombreUsuario;
    sessionStorage.correo = correo;
    sessionStorage.contra = contra;
    sessionStorage.tel = tel;
}

function InfoContacto3(){
    var nombre = "Luca Naranjo Castillo";
    var nombreUsuario = "lucalucastillo41";
    var correo = "lucanaranjo1980@gmail.com";
    var contra = "6CAS532a0";
    var tel = "07896304";
    sessionStorage.nombre = nombre;
    sessionStorage.nombreUsuario = nombreUsuario;
    sessionStorage.correo = correo;
    sessionStorage.contra = contra;
    sessionStorage.tel = tel;
}

function InfoContacto4(){
    var nombre = "Valeria Isabella Leiva Rosales";
    var nombreUsuario = "valeriaisaleiva10";
    var correo = "valeriarosales1999@gmail.com";
    var contra = "VAS5C231cx2";
    var tel = "07809623";
    sessionStorage.nombre = nombre;
    sessionStorage.nombreUsuario = nombreUsuario;
    sessionStorage.correo = correo;
    sessionStorage.contra = contra;
    sessionStorage.tel = tel;
}

function InfoContacto5(){
    var nombre = "Hector Daniel Arreaga Santos";
    var nombreUsuario = "hectorarreaga001";
    var correo = "hectorarreaga1991@gmail.com";
    var contra = "OI6L4J5CDS2";
    var tel = "47854601";
    sessionStorage.nombre = nombre;
    sessionStorage.nombreUsuario = nombreUsuario;
    sessionStorage.correo = correo;
    sessionStorage.contra = contra;
    sessionStorage.tel = tel;
}


function DetalleContacto(){
    sessionStorage.nombre;
    sessionStorage.nombreUsuario;
    sessionStorage.correo;
    sessionStorage.contra;
    sessionStorage.tel;

    var nombreC = sessionStorage.getItem('nombre');
    var nombreUsuarioC = sessionStorage.getItem('nombreUsuario');
    var correoC = sessionStorage.getItem('correo');
    var contraC = sessionStorage.getItem('contra');
    var telC = sessionStorage.getItem('tel');


    document.getElementById("nombreYApellidos").value=nombreC;
    document.getElementById("nombreDeUsuario").value=nombreUsuarioC;
    document.getElementById("Email").value=correoC;
    document.getElementById("Contra").value=contraC;
    document.getElementById("Telefono").value=telC;

}

/*  TO DO LIST */

let lista = [];

const objEmpleado = {
    id: '',
    nombre: '',
    puesto: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const puestoInput = document.querySelector('#puesto');
const btnAgregarInput = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(nombreInput.value === '' || puestoInput.value === '') {
        alert('Todos los campos se deben llenar');
        return;
    } else if(puestoInput.value <1 || puestoInput.value>10){
        alert('Debe escoger un número entre 1 y 10');
        return;
    }

    

    if(editando) {
        editarEmpleado();
        editando = false;
    } else {
        objEmpleado.id = Date.now();
        objEmpleado.nombre = nombreInput.value;
        objEmpleado.puesto = puestoInput.value;

        agregarEmpleado();
    }
}

function agregarEmpleado() {

    lista.push({...objEmpleado});

    mostrarEmpleados();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    objEmpleado.id = '';
    objEmpleado.nombre = '';
    objEmpleado.puesto = '';
}

function mostrarEmpleados() {
    limpiarHTML();

    const divEmpleados = document.querySelector('.div-empleados');
    
    lista.forEach(empleado => {

        const {id, nombre, puesto} = empleado;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${nombre} - ${puesto} - `;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarEmpleado(empleado);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarEmpleado(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divEmpleados.appendChild(parrafo);
        divEmpleados.appendChild(hr);
    });
}

function cargarEmpleado(empleado) {
    const {id, nombre, puesto} = empleado;

    nombreInput.value = nombre;
    puestoInput.value = puesto;

    objEmpleado.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    
    editando = true;
}

function editarEmpleado() {

    objEmpleado.nombre = nombreInput.value;
    objEmpleado.puesto = puestoInput.value;

    lista.map(empleado => {

        if(empleado.id === objEmpleado.id) {
            empleado.id = objEmpleado.id;
            empleado.nombre = objEmpleado.nombre;
            empleado.puesto = objEmpleado.puesto;

        }

    });

    limpiarHTML();
    mostrarEmpleados();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    
    editando = false;
}

function eliminarEmpleado(id) {

    lista = lista.filter(empleado => empleado.id !== id);

    limpiarHTML();
    mostrarEmpleados();
}

function limpiarHTML() {
    const divEmpleados = document.querySelector('.div-empleados');
    while(divEmpleados.firstChild) {
        divEmpleados.removeChild(divEmpleados.firstChild);
    }
}