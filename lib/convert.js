const convert = (cotacao, quantidade) => {
    return cotacao * quantidade
}
const toMoney = valor => {
    /*
    return valor.toFixed(2) //2 casas decimais
    aqui tinha dado um erro, pq o "valor" pode não ser um número
    então a gente da um parseFloat
    */
   return parseFloat(valor).toFixed(2)
}


module.exports ={
    convert,
    toMoney
}

//vamo testar se asfunções testam o que deveriam testar
//se eu garantir que as funções toMoney e o convert funcionem, as chances de /cotacao fucnionar funcionar, sao altas.