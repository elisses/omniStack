const express = require('express');

const app = express();
app.get('/',(request, response) => {
    return response.json({
        evento: 'Semana OmnisStack 11',
        aluno: 'Elis Fernanda'
    });
});
app.listen(3333);