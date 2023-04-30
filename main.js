function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

let cont = 0;

while (cont < listaDeTeclas.length) {
    listaDeTeclas[cont].onclick = tocaSomPom;
    cont++;
    console.log(cont);
}
