function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento && elemento.localName === 'audio') {
        {
            elemento.play();
        }
    }else {
        // alert('Elemento não encontrado.');
        console.log('Elemento não encontrado  ou seletor inválido.');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let cont = 0; cont < listaDeTeclas.length; cont++) {

    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }    
    
    tecla.onkeydown = function (evento) {
        
        if(evento.code === 'Space' || 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => { 
        tecla.classList.remove('ativa');
    }

}