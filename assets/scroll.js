window.sr = ScrollReveal({reset:true});

sr.reveal('#inicio', {duration: 3000});

sr.reveal('#sobre-mim', { 
    rotate: {x: 0, y: 20, z: 0}, 
    duration: 3000
});

sr.reveal('#projetos', {
    rotate: {x: 0, y: 20, z: 0},
    duration: 3000
});

sr.reveal('#habilidades', {
    rotate: {x: 0, y: 20, z: 0},
    duration: 3000
});

/*Menu Âncora
-------------------------------*/

const menuItens = document.querySelectorAll('#nav-principal a[href^="#"]'); //Selecionar somente os links que possuam o href com o #, para não selecionar links que levem para sites externos, caso houvesse um link "LOGIN".

menuItens.forEach( item => {
    item.addEventListener('click', ScrollToId);
})

function ScrollToId(event) {
    const element = event.target;
    const id = element.getAttribute('href')
    const section = document.querySelector()
}



/*
Descrição do Menu âncora:

*Criamos uma const com o nome menuItens e utilizamos o document.querySelectorAll
para selecionar todos os links do menu de navegação.

*Através do menuItens, foi dado um forEach (para verificar se para cada item dessa
lista, ele foi clicado ou não). Criou-se um arrow function com o nome "item"
e através dele, utilizamos o .addEventListener para adivinhar o evento de click.
Passamos dois argumentos, o 'click' e a função 'ScrollToId'.

Criada a função ScrollToId, passamos o parâmetro event.

 */