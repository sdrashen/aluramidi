function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

let cont = 0;

while (cont < listaDeTeclas.length) {
    listaDeTeclas[cont].onclick = tocaSom;
    cont++;
    console.log(cont);
}
