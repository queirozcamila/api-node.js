const tarefaModel = require('../models/tarefa-models');
const tarefa = require('../models/tarefa-models');

const getTarefas = (requisicao,resposta) => {
    resposta.status(200).json(tarefaModel);
};

const getByIdTarefas = (requisicao, resposta) => {
    const { id } = requisicao.params;
    // const id = requisicao.params.id; - aqui nao desestrutura o objeto
    //params é o que vem dentro da url, ja tenho ele
    
    const tarefa = tarefaModel.find (tarefa => tarefa.id == id);

    resposta.status(200).json(tarefa);
};

const getPorTitulo = (requisicao, resposta) => { 
    const { titulo } = requisicao.query;
    //const titulo = requisicao.query.titulo - mesma coisa aqui, destestruturou o objeto
    //tenho que buscar por isso é query: /perfil?perfil=Jessica - uri! url é sem esse complemento
    const tarefa = tarefaModel.find(tarefa => tarefa.titulo == titulo );

    resposta.status(200).json(tarefa);

};

//post

const criarTarefas = (requisicao, resposta) => {
    // const {titulo, descricao, prazo, responsavel} = requisicao.body; Não rolou assim pela professora
    //body é objeto de requisicao aqui
    //essa informacao é enviada pelo body quando se preenche um formulario por exemplo
    //GET sem BODY - POST com BODY
    
    const tarefaId = tarefaModel.map(tarefa => tarefa.id == id);

    const novoId = tarefaId.length > 0 ? Math.max.apply (Math, tarefaId) + 1 : 1;

    const novaTarefa = {
        id: novoId,
        titulo: requisicao.body.titulo,
        descricao: requisicao.body.descricao,
        prazo: requisicao.body.prazo,
        responsavel: requisicao.body.responsavel,
        dataCriacao: new Date()
    }

    tarefaModel.push(novaTarefa);

    resposta.status(201).json(novaTarefa);
};


//DELETE
//eu nao precido deletar a tarefa na minha funcao pq o verbo delete na rota ja faz isso!!

const deletarTarefa = (resquisicao, resposta) => {
    const { id } = requisicao.params;
    // const tarefaDeletada = tarefaModel.find ( tarefa => tarefa.id == id);

    tarefaModel.filter(tarefas => tarefa.id != id);
    //isso aqui é só pra verificar que a tarefa foi deletada
    
    resposta.status(204).json({mensagem: "Tarefa deletada"})
};



//exportando as funçoes criadas
module.exports = {
    getTarefas,
    getByIdTarefas,
    getPorTitulo,
    criarTarefas,
    deletarTarefa
}

