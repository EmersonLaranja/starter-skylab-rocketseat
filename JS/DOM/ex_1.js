/*Create a button that when clicked creates a new element on the screen with a red square shape 100px high and wide. Whenever the button for clicked a new square should appear on the screen.*/

var divElement = document.createElement('div');//create a div
document.body.appendChild(divElement);//put the div on the body 

var btnElement = document.createElement('button');//create a button
divElement.appendChild(btnElement);//put the button as a child of div
btnElement.setAttribute('id', 'button');//create a "id" on the button
btnElement.setAttribute('onClick', 'CreateSquare()');//create a function atribute
var textElement = document.createTextNode('Create a square'); //text inside the button
btnElement.appendChild(textElement);//put the text inside the button

function CreateSquare() {
	let boxElement = document.createElement("div");

	boxElement.style.width = '100px';
	boxElement.style.height = '100px';
	boxElement.style.margin = '10px';
	boxElement.style.backgroundColor = '#f00';


	boxElement.classList.add('box');//add the box class
	divElement.appendChild(boxElement);
}



