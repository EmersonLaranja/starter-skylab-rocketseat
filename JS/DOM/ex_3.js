// From the vector, fill in a <ul> list 
var names = ["Diego", "Gabriel", "Lucas"];

var ulElement = document.createElement('ul');
document.body.appendChild(ulElement);

for (name of names) {
    var liElement = document.createElement('li');
    liElement.innerText = name;
    ulElement.appendChild(liElement);

}
