function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let cont = 0;

while (cont < listaDeTeclas.length) {

    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    // console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    cont++;
    // console.log(cont);
}

//Para evitar repetição de código (cont), criamos uma const para a tecla.