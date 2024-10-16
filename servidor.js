// Inicialização do express e conexão com as rotas
import express from 'express'
const app = express()
import router from './routes/vagas.js'

// Utilizar JSON nas requisições
app.use(express.json())
// Informar arquivo de rotas utilizado
app.use(router)

app.listen(3000, () => console.log('Servidor rodando'))