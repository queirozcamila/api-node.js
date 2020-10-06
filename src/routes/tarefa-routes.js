const tarefaControllers = require('../controllers/tarefas-controllers');

//a rota aponta para a funçao no controlador-controller
//exports tem uma funcao chamada router que vai ler o comportamento do controller
//o verbo define o comportamento da rota
const express = require ('express'); 
const tarefasControllers = require('../controllers/tarefas-controllers');
const router = express.Router(); 
//nessa variavel eu vou pegar a funcao router. verbo http e metodo é a mesma coisa.

//@router GET Tarefas
//@decricao retornar todas as tarefas
//@access Public -- api pode ser interna (nós que estamos desenv) > publica > privada(so com autenticacao consegue acessar)
//primeiro parametro é o endpoint
//segundo parametro é a funcao no controller
router.get('/tarefas',tarefaControllers.getTarefas);

//@route GET Tarefas
//@query Titulo
//@desc Retornar apenas titulos
//@access Public
//@endpoint httpo://localhost:porta/tarefas/titulo
router.get('/tarefas/titulo', tarefaControllers.getPorTitulo);

//@route GET Tarefas
//@params Id
//@desc Retornar apenas uma unica tarefa pelo id
//@access Public
router.get('/tarefas/:id', tarefaControllers.getByIdTarefas);

router.post('/tarefas', tarefaControllers.criarTarefas);

router.delete('/tarefas/:id', tarefaControllers.deletarTarefa);
//ele só verifica no metodo se o id foi deletado, pq o delete por si só
// ja é um metodo pronto que deleta o id

module.exports = router;