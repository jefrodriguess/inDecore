var elementosSelecionar = document.querySelectorAll('.selecionar') // VARIAVEL PARA USAR TODOS OS ELEMENTOS DA CLASSE = .DUVIDA 

elementosSelecionar.forEach(function (selecionar) { //EXECUTAR UMA FUNÇÃO PARA CADA ELEMENTO DUVIDA
    selecionar.addEventListener('click', function (){ //PARA CADA ELEMENTO DUVIDA UM EVENTO DE CLICK
        selecionar.classList.toggle('ativa') // RESULTADO DO EVENTO CLICK / TOGGLE = LIGA/DESLIGA TROCAR
    })
})