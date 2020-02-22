let flagCreate = '';
const ENDPOINT_URL = 'http://5c3732177820ff0014d926b4.mockapi.io/';
$(function () {
    $("#btn-create-student").click(createForm);
    $("#btn-create-teacher").click(createForm);
    $("#btn-show-teachers").click(() => {
        searchResource('teacher')
    });
    $("#btn-show-students").click(() => {
        searchResource('student')
    });
});
function searchResource(partialEndpoint) {
    // let endpoint = e.target.innerHTML === 'Mostrar Alumnos' ? 'student' : 'teacher';
    destroyElements();
    $('#fact').addClass('fact');
    let endpoint = ENDPOINT_URL + partialEndpoint;
    searchData(endpoint)
        .done((response) => {
          handleData(response, partialEndpoint)
        })
        .fail(handleError);
}
// Función que maneja la creación de nuevos recursos
function createResource(e) {
  // TODO llamar a la función getFormData, esta devolvera un objeto con los valores del formulario que hay que pasar a la llamada Ajax
  // TODO Una vez obtenidos los datos del formulario, 
  //llamar a la función createData. .done debe llamar a destroyElements y
  // .fail a handleError.
  const data = getFormData(flagCreate);
   
  return $.ajax(data);
}

function createData(data, partialEndpoint) {
  debugger
  const endpoint = ENDPOINT_URL + partialEndpoint;
  // Todo Realizar la llamada Ajax con Jquery para crear un recurso nuevo.
  return $.post(data, endpoint);
}

function searchData (endpoint) {
   return $.ajax(endpoint);
        
    //Todo Realizar la llamada Ajax con Jquery para traer los recursos.
}
// Almacena los valores del formulario en un objeto y lo retorna.
function getFormData(endpoint) {
    const obj = {};
    if (endpoint === 'teacher') {
        obj.email = $("#email").val();
        obj.city = $("#city").val();
    }
    obj.name = $("#name").val();
    return obj;
}

// Función que recibe un array de datos y crea un elemento en el DOM por cada uno de ellos.
function handleData (data, endpoint) {
  if (data && data.length > 0) {
      data.forEach((element) => {
          createElement(element);
      })
  }
  window.localStorage.setItem(endpoint, JSON.stringify(data))
}

function handleError (err) {
    // Manage Error
    let misterios = $('#fact')
    if (err.status === 0) {
        misterios.text('No hay conexion');
    }else {
        misterios.text(err.responseText);
    }
}

// Función que elimina todos los elementos existentes en el div fact.
function destroyElements () {
    $('#fact').empty();
    $('#fact').removeClass('fact');
}
// Función que crea los elementos del DOM buscados.
function createElement(data) {
    const $icon = $("<img>", {id: "icon", "class": "icon-fact", src: data.avatar});
    const $name = $("<p>", {id: 'name'});
    const $id = $("<p>", {id: 'id'});
    const $profileBox = $("<div>", {class: "profile-box"});
    $id.append('Id: ' + data.id);
    $name.append('Nombre: '+data.name);
    $profileBox.append($icon);
    $profileBox.append($name);
    if (data.city || data.email) {
        const $email = $("<p>", {id: 'email'});
        const $city = $("<p>", {id: 'city'});
        $email.append('Email: '+data.email);
        $city.append('Ciudad: '+data.city);
        $profileBox.append($email);
        $profileBox.append($city);
    }
    $profileBox.append($id);
    $('#fact').append($profileBox);
}
// Función que se encarga de crear el formulario con los campos necesarios para crear un nuevo recurso.
function createForm(e) {
    destroyElements();
    $('#fact').addClass('fact');
    let endpoint = e.target.innerHTML === 'Crear Alumno' ? 'student' : 'teacher';
    flagCreate = endpoint;
    const $title = $("<h3>", {});
    const titleStr = e === 'teacher' ? 'Profesor' : 'Alumno';
    $title.append('Crear '+titleStr);
    const $inputName = $("<input>", {id: "name", "class": "input"});
    const $labelName = $("<label>", {"class": "input-field"});
    $labelName.append('Nombre: ');
    const $submit = $("<button class='submit' />");
    $submit.click(createResource);
    $submit.append('Enviar');
    $('#fact').append($title);
    $('#fact').append($labelName)
    $('#fact').append($inputName);
    if (endpoint === 'teacher') {
        const $labelEmail = $("<label>", {"class": "input-field"});
        const $labelCity = $("<label>", {"class": "input-field"});
        const $inputEmail = $("<input>", {id: "email", "class": "input"});
        const $inputCity = $("<input>", {id: "city", "class": "input"});
        $labelEmail.append('Email: ');
        $labelCity.append('Ciudad: ');
        $('#fact').append($labelEmail)
        $('#fact').append($inputEmail);
        $('#fact').append($labelCity)
        $('#fact').append($inputCity);
    }
    $('#fact').append($submit);
}