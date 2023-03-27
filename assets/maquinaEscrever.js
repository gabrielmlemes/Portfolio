const msg = 'Desenvolvedor Front end';
let titulo = document.querySelector('.efeito-maquina');

for(var i=0; i < msg.length; i++ ) {
    (function(pos){
        setTimeout (function() {
            titulo.innerHTML += msg.charAt(pos);
        }, 150*pos)

    }) (i);
}

/*
Criei um laço de repetição para poder navegar de letra em letra;
Criei uma função auto invocável com o parâmetro 'pos' e dentro dela passei um SetTimeout
com uma função dentro e o valor do intervalo (150ms) multiplicando pelo 'pos' 
(Pois a cada 150ms ele executará o próximo comando). No SetTimeout passei uma função pegando
'titulo' e inserindo no documento (através do innerHTML). e coloquei o '+=' para ele adicionar
 a próxima letra, pois se colocasse somente o '=' ele iria substituir uma letra pela outra.
 E usei o '.charAt' para localizar letra por letra, com o parâmetro 'pos'. No final de tudo
 chamei a função com o parâmetro 'i'.

*/