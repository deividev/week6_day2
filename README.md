# Boream Campus BBDD

Con este ejercicio vamos a practicar los callbacks y las llamadas Ajax con 
la librería JQUERY. Hemos creado una API que contiene un listado de alumnos y profesores
y debemos ser capaces de listar todos los recursos y crear nuevos.

Recuerda que puedes ayudarte de la documentación oficial de Jquery si tienes
alguna duda acerca de la librería.

## Iteración 1
En esta primera Iteración vamos a mostrar los alumnos y profesores almacenados en la base de datos.
Lo primero que debemos hacer es registrar eventos onClick para los botones con los siguientes ids:

Ambos eventos deben disparar la función searchResource.

 ```
 $("#btn-show-teachers").click(searchResource);
 ```
Debes completar la función searchResource para que realice la llamada a la función
searchData pasandole como parámetro la variable endpoint. Dicha llamada debe implementar los callBacks 
para cuando la llamada se realiza correctamente y cuando se produce algún error en la petición. En el caso de
que la petición se realiza correctamente debemos llamar a la función handleData, por otro lado, si ocurre un error debemos
llamar a handleError.

Busca información acerca de los callbacks .done y .fail de Jquery.ajax.


## Iteración 2
Implementa la función searchData para que realice una petición Ajax al endpoint definido en la variable 
ENPOINT_URL. La función debe retornar la respuesta de la petición y la petición debe hacerse mediante 
la librería Jquery.

Una vez realizado este punto, una vez se pulse en los botones "Mostrar Alumnos" o "Mostrar Profesores"
ya deben pintarse los recursos traidos desde el servidor. 

Como extra, gestiona la función handleError para que cree un elemento del DOM dentro del div
fact que muestre un mensaje de error. 

## Iteración 3
En esta iteración vamos a realizar la funcionalidad de crear un nuevo alumno o un nuevo
profesor en la BBDD. 

Al igual que en la iteración 1, debes registrar eventos onClick para los botones con las siguientes ids:

btn-create-teachers
btn-create-students

Ambos eventos deben disparar la función createForm. Que sera la encargada de crear los elementos DOM del formulario.

Una vez el usuario completa la información del formulario y pulsa el botón de Enviar, se dispara la 
función createResource. En dicha función debes realizar la llamada a createData, pasandole como parámetro la variable data, ademas, dicha llamada debe implementar los callbacks .done y .fail como en el punto anterior.


## Iteración 4
Implementa la función createData para que realice una llamada Ajax que cree un recurso nuevo en la base de datos.
La llamada debe realizarse con Jquery y debe enviar los datos introducidos por el usuario en el formulario. 

## Bonus 1
En la función createElement, implementa la creación de un Boton que permita borrar el elemento en cuestión. 
Dicho botón llamara a una nueva función deleteElement que realizara una petición DELETE para borrar el recurso de BBDD atacando al siguiente endpoint:

/student/:id

Por ejemplo, para borrar el estudiante con el id 2, debemos atacar al siguiente endpoint:

http://5c3732177820ff0014d926b4.mockapi.io/student/2

##Bonus 2

Echa un vistazo al código base para ver el funcionamiento de las diferentes funciones que crean y eliminan 
elementos del DOM. 

Ya podemos listar y crear elementos nuevos, realiza los cambios necesarios en el código e implementa tus propias funciones
para permitir a un usuario editar los datos de un profesor o alumno ya existente. 

Recuerda que debes mostrar un formulario que permita ingresar los cambios y se envien al servidor mediante
una nueva petición Patch.

El endpoint al que se debe atacar es /student/:id. Por ejemplo, para editar el estudiante con id 2 la url completa es:

http://5c3732177820ff0014d926b4.mockapi.io/student/2