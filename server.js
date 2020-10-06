const app = require('./src/app');
const porta = 3000;

app.listen (porta, () => {
    console.log(`o servidor esta rodando ${porta} funciona!`)
});