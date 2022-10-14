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