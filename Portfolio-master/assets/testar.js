const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute ('aria-expanded', active)
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/*
O evento touchstart foi criado pois ao clicar no botão do menu hamburguer
através de um dispositivo mobile, o evento 'click' demora 300ms para executar
a ação de clique. Para isso o evento 'touchstart' serve para que seja executado
imediatamente após o clique, sem delay.

Porém o que ocorre é que após o evento 'touchstart', ocorre também o evento 'click',
gerando um duplo clique no botão causando uma abertura e fechamento simultâneo no menu hamburguer.
Por isso é criado o IF, tipando o evento adicionando o preventDefault() para
que não ocorra o próximo evento, que seria o 'click', evitando o problema.
*/


/*
Os atributos 'aria' são voltados para acessibilidade.
*/