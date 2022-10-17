const axios = require("axios");
const getUrl = (data) =>
	`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27${data}%27&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

const getCotacaoAPI = (url) => axios.get(url); //me retorna uma promise
const extractCotacao = (res) => res.data.value[0].cotacaoVenda;
const getToday = () => {
	const today = new Date();
	return (
		today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear()
	); //month+1 pq a bosta do javascript faz os meses de 0-11
};

const getCotacao = async () => {
	try {
		//se acontecer um erro com o link, ele aconteceria no "await" então, preciso fazer algo antes, por isso o try
		const today = getToday();
		console.log(today); //não estava funcionando o today pq? pq o API do bacen não fucniona cotação no final de semana, fez sentido isso, pq não altera o cambio no findi
		const url = getUrl(today)
		const res = await getCotacaoAPI(url); //não existe cotação no findi nem feriados
		const cotacao = extractCotacao(res);
		return cotacao;
	} catch (err) {
		return ""; //asim caso der um erro, ele simplesmente não aparecerá o valor em "Cotação" e funcionará normalmente a aplicação
		//console.log('err', err) //já com esse método ele quebra o código para frente pq retorna um erro.
	}
};

module.exports = {
	getCotacaoAPI,
	getCotacao,
	extractCotacao,
};

//feito a "libzinha", agora vamos colocar no projeto
