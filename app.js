let miDiv = document.getElementById('miDiv');
console.log(miDiv.textContent);
miDiv.textContent = 'Este es el nuevo contenido de miDiv.';
console.log(miDiv.textContent);

miDiv.style.color = 'white';
miDiv.style.backgroundColor = 'green';
miDiv.style.fontSize = '30px';

let nuevoDiv = document.createElement('div');
nuevoDiv.id = "nuevoElemento";
nuevoDiv.textContent = "¡Hola, soy un nuevo elemento!";
console.log(nuevoDiv.textContent);
let contenedor = document.getElementById("contenedor");
contenedor.appendChild(nuevoDiv);
console.log(nuevoDiv.textContent);
let miElemento = document.getElementById("otroDiv");
miElemento.innerHTML = "<p>Nuevo contenido HTML</p>";

