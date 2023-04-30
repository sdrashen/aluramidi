function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// listaDeTeclas[0].onclick = tocaSomPom;

let cont = 0;

while (cont < listaDeTeclas.length) {
    const instrumento = listaDeTeclas[cont].classList[1];

    console.log(instrumento);

    listaDeTeclas[cont].onclick = function () {
        tocaSom('#som_tecla_pom');
    }
    cont++;
    console.log(cont);
}

/*listaDeTeclas[cont].onclick = tocaSom(); se colocar com () vai dar o erro
*"usuário ainda não interagiu com a página". Precisamos passar um parâmetro pra
*o atributo onclick sem executá-lo imeditamente. Aí entra a arrow function.
*As funções anônimas são utilizadas quando elas são o valor de algum atributo
* ou estão sendo usadas dentro de uma variável.
*/