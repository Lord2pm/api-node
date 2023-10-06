const conn = require('./connection');
const express = require('express');
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.end("Minha primeira API com o NodeJS e o Express!");
});


// Select

app.get('/ver-alunos', (req, res) => {
    conn.query('select * from alunos', (err, result) => {
        if(!err) {
            return res.json(result);
        }
        else {
            console.log('Erro:', err);
        }
    });
});


// Insert

app.post('/cadastrar-aluno', (req, res) => {
    const aluno = req.body;
    conn.query('insert into alunos set ?', aluno, (err, result) => {
        if(!err) {
            return res.json(result);
        }
        else {
            console.log('Erro:', err);
        }
    });
});


// Update

app.put('/actualizar-aluno/:id', (req, res) => {
    const aluno = [req.body.nome, req.body.media, req.params.id];
    conn.query('update alunos set nome = ?, media = ? where id = ?', aluno, (err, result) => {
        if(!err) {
            return res.json(result);
        }
        else {
            console.log('Erro:', err);
        }
    });
})


// Delete

app.delete('/eliminar-aluno/:id', (req, res) => {
    let id = req.params.id;
    conn.query('delete from alunos where id = ?', id, (err, result) => {
        if(!err) {
            return res.json(result);
        }
        else {
            console.log('Erro:', err);
        }
    });
});

app.listen(8080, () => {
    console.log("Servidor Ligado!");
});
