//testar separadamente do código
//isso é só um teste

const axios = require("axios");

const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='01-01-2022'&@dataFinalCotacao='01-03-2022'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

axios
    .get(url)
    .then( res => console.log(res.data.value[0].cotacaoVenda))
    .catch( err => console.log(err)) //pra caso dar erro, mostrar o parâmetro error

//aqui eu consegui pegar a cotacao do dia que eu fiz lá no api do bacen, daqui a pouco vouaprender a pegar dados atualizados
//praisso eu vou criar um módulo dentro do lib 'api.bcb.js'