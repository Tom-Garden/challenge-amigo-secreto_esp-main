//Arreglo vacío para amigos, Identifica los espacios donde se muestran los nombres ingresados y el que saldrá sorteado
let listaAmigos =[];
let mostrarListaAmigos = document.getElementById('listaAmigos');
let resultadoSorteo = document.getElementById('resultado');

//Función que revisa que no sea un valor vacío el que se agrega al listado de amigos y de tener un valor se agrega y muestra en una lista en el DOM
function agregarAmigo(nombre){
    let amigo = document.getElementById('amigo').value;
    if(amigo == ''){
        alert('Ingrese el nombre de su amigo que desea agregar');
        return;
    } else{
        listaAmigos.push(amigo);
        mostrarListaAmigos.innerHTML='';
        for (let index = 0; index < listaAmigos.length; index++) {
            mostrarListaAmigos.innerHTML += `<li>${listaAmigos[index]}</li>`
        }
        return;     
    }
}

//Función que elige al azar un amigo dentro de los que se agregaron. Revisa que la lista no esté vacía antes de sortear y muestra el amigo secreto en el DOM
function sortearAmigo(){
    let amigoSecreto = Math.floor(Math.random()*listaAmigos.length);
    if(listaAmigos.length == 0){
        alert('No hay amigos para elegir')
    }
    resultadoSorteo.innerHTML = `¡Tu amigo secreto es ${listaAmigos[amigoSecreto]}!`;
}


