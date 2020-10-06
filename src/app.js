const express = require('express');
const app = express ();

const tarefas = require("./routes/tarefa-routes");

//após a barra é o endpoint - isso que o primeiro parametro do use() fala
//poderia ser /api por exemplo  - após o /api/ é que vai vir o meu endpoint
//depois da barra(1 parametro), vou user as rotas do 2 parametro    
app.use('/', tarefas);

app.use(express.json());
//vai retornar o json direto e o send pode retornar qualquer tipo, xml por exemplo

module.exports = app;