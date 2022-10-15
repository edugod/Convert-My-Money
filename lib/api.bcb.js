const axios = require("axios");
const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='01-01-2022'&@dataFinalCotacao='01-03-2022'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

const getCotacaoAPI = (data) => axios.get(url) //me retorna uma promise
const extractCotacao = res => res.data.value[0].cotacaoVenda
const getCotacao = async() => {
    const res = await getCotacaoAPI('')
    const cotacao = extractCotacao(res)
    return cotacao
}

module.exports = {
    getCotacaoAPI,
    getCotacao,
    extractCotacao
}

//feito a "libzinha", agora vamos colocar no projeto