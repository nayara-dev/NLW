
//servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//cconfigurar nunjucks

nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//início e configuração do servidor
server
//receber os dados do re.body
.use(express.urlencoded({ extended: true}))
//configurar arquivos estáticos(css,scrpits, imagens)
.use(express.static("public"))
///rotas de aplicaçoes
.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

//sttart do servidor
.listen(5500)