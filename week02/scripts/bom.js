const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();

        });
        input.value = ' ';
        input.focus();

    }
});

/* MY NOTES:
En su archivo js, ​​declare tres variables const que contengan referencias a los elementos input , button y . list .
Ejemplo
        
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
Cree un detector de eventos de clic para el botón Agregar capítulo usando addEventListener y una función anónima o una función de flecha .
Ejemplos
button.addEventListener('click', function() { ... });
button.addEventListener('click', () => { ... });
El ... representa un marcador de posición para líneas de código. Tenga cuidado con los corchetes de apertura y cierre.

En el bloque de función del evento de clic {...}, haga lo siguiente:
Verifique que la entrada no esté en blanco antes de realizar las siguientes tareas restantes en esta lista usando un bloque if , de lo contrario proporcione un mensaje o al menos no haga nada y devuelva .focus() al campo de entrada.
Ejemplo
if (input.value != '') { ... }
Este ejemplo solo verifica si la entrada no está en blanco sin ninguna rama else. Simplemente no hace nada si el campo está en blanco. La rama else podría contener una declaración de salida a un mensaje que le recuerde al usuario que ingrese un libro y un capítulo. Hay muchas formas de hacer esto. Todo el código siguiente iría en la rama verdadera { ... }.

crear un elemento li
Ejemplo
const li = document.createElement('li');
crear un botón de eliminar
Ejemplo
const deleteButton = document.createElement('button');
Rellene los elementos li textContent o innerHTML con el valor de entrada
Ejemplo
li.textContent = input.value;
Rellene el texto del botón textContent con un ❌
Ejemplo
deleteButton.textContent = '❌';
Añade el elemento li con el botón eliminar
Ejemplo
li.append(deleteButton);
Añade el elemento li a la lista desordenada en tu HTML
Ejemplo
list.append(li);
Agregue un detector de eventos al botón Eliminar que elimina el elemento li cuando se hace clic en él.
Ejemplo
deleteButton.addEventListener('click', function () {
  list.removeChild(li);
  input.focus();
});
Envía el foco al elemento de entrada
Ejemplo
input.focus();
Cambie el valor de entrada a nada o a una cadena vacía para limpiar la interfaz para el usuario
Ejemplo
input.value = ''; */


