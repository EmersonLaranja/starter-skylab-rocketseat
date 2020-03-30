/*
Following the result of the previous exercise, add a screen input and a button as follows:

     <input type = "text" name = "name">
     <button onClick = "add ()"> Add </button>

     When clicking on the button, the add () function must be triggered by adding a new item to the list of names based on the name filled in the input and rendering the new item on screen together with the other previous items. In addition, the content of the input must be deleted after clicking.
*/

var inputElement = document.createElement('input');
document.body.appendChild(inputElement);
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('name', 'name');

var buttonElement = document.createElement('button');
document.body.appendChild(buttonElement);
buttonElement.innerHTML = 'add a name';
buttonElement.setAttribute('onClick', 'adicionar()');

var ulElement = document.createElement('ul');
document.body.appendChild(ulElement);

function adicionaItem(text) {
    var liElement = document.createElement('li');
    var textElement = document.createTextNode(text);

    liElement.appendChild(textElement);
    ulElement.appendChild(liElement);
}

function adicionar() {
    adicionaItem(inputElement.value);
    inputElement.value = "";
}
