/*função para eu incluir os digitos da calculadora*/
function incluir(incluir) {
    var resultado = document.querySelector('p')
    if(Number(resultado.innerHTML) === 0){
        resultado.innerHTML = incluir
    } else {
        resultado.innerHTML = resultado.innerHTML + incluir
    }
}

/*função para limpar todo o visor da calculadora*/
function limpar() {
    var resultado = document.querySelector('p')
    resultado.innerHTML = 0
}

/*função para limpar o ultimo digito do visor da calculadora*/
function limparUltimo() {
    var resultado = document.querySelector('p')
    if (resultado.innerHTML.length === 1) {
        resultado.innerHTML = 0
    } else {
        resultado.innerHTML = resultado.innerHTML.slice(0, -1)
    }
}

/*função para fazer o calculo da expressão que está no visor da calculadora*/
function igual() {
    var resultado = document.querySelector('p')
    resultado.innerHTML = eval(resultado.innerHTML)
}