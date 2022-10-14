//instalar npm init pra iniciar o projeto
console.log("teste"); // funcionando
//instalar o express e o ejs
// preciso importar o express
const express = require("express");

//preciso criar uma nova aplicação
const app = express();

//como precisamos publicar ele, desde o começo já vamos fazer o tratamento do "path"
const path = require("path");

//setando o viewengine ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // isso é pra hora que a gente for upar ele
app.use(express.static(path.join(__dirname, "public"))); //um lugar para utilizar css e outros arqruivos

//pegar / e renderizar home
app.get("/", (req, res) => {
	res.render("home");
});

//----------------------------------------------------------------
//---------------------------até aqui era só pra fazer tudo bumbar
const convert = require("./lib/convert");

app.get("/cotacao", (req, res) => {
	const { cotacao, quantidade } = req.query;
	//eu fiz uam coisa bem legal para conseguir pegar o cotacao e quantidade
	//dando um console.log(req) aparece um monte de coisa, mas na propriedade .query, estava lá os dados :)
	if (cotacao && quantidade) {
		const conversao = convert.convert(cotacao, quantidade);
		res.render("cotacao", {
			error: false,
			cotacao: convert.toMoney(cotacao),
			quantidade: convert.toMoney(quantidade),
			conversao: convert.toMoney(conversao),
		});
	} else {
		res.render("cotacao"),{
				error: "Valores inválidos"
		};
	}
});

// ouvir a aplicação na porta 3000
app.listen(3000, (err) => {
	if (err) {
		console.log("não foi possível iniciar");
	} else {
		console.log("Convert My Money is Online :)");
	}
});
//rodando no cmder, está funcionando até aqui:)
// agora eu quero que quando abra minha aplicação já apareça o formulário
// como vamos usar o ejs, eu preciso setar o meu view-engine, isso precisa ser no começo
