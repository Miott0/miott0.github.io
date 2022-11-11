window.onload = () =>{
    const formulario = document.getElementById('formulario');

    formulario.onsubmit = (evento) => {
        evento.preventDefault();

        const cidadeRetirada = document.getElementById('cidade-retirada').value;
        const cidadeEntrega = document.getElementById('cidade-entrega').value;
        const tipoCarro = document.getElementById('tipo-carro').value;
        const dataRetirada = document.getElementById('data-retirada').value;
        const dataEntrega = document.getElementById('data-entrega').value;
        const precoTipoCarro = {
            basico: 119,
            ar: 199,
            executivo: 299

        };

            
        const diasAlugados = (new Date(dataEntrega) -  new Date(dataRetirada))/ (1000 * 60 * 60 * 24);
        let preco = precoTipoCarro[tipoCarro] * diasAlugados;
        if(cidadeEntrega!==cidadeRetirada){
            preco+=300;
        }

        alert(`O custo da locação é R$ ${preco}`);
    }
}