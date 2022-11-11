function somaP(){
    var obterP = document.getElementById('paragrafo1')
    var lista_inputs = document.getElementsByTagName('input')
    obterP.textContent+=lista_inputs[0].value
}