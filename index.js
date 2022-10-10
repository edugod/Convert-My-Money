//instalar npm init pra iniciar o projeto
console.log('teste') // funcionando
//instalar o express e o ejs

// preciso importar o express
const express = require('express')
//como precisamos publicar ele, desde o começo já vamos fazer o tratamento do "path"
const path = require('path')

//setando o viewengine ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views' ))


//preciso criar uma nova aplicação
const app = express()
// ouvir a aplicação na porta 3000
app.listen(3000, err => {
    if (err) {
        console.log('não foi possível iniciar')
    } else {
        console.log('Convert My Money is Online :)')
    }
})
//rodando no cmder, está funcionando até aqui:)
// agora eu quero que quando abra minha aplicação já apareça o formulário
// como vamos usar o ejs, eu preciso setar o meu view-engine, isso precisa ser no começo