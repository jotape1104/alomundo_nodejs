// Import das bibliotecas
const express = require('express');
const cors = require('cors');
const app = express(); // Inicializa o servidor express
const port = 8000; // Define a porta do servidor
app.use(cors()); // Executar em mesmo computador
app.use(express.json()); // Tipo da saída

// Rota do serviço de mensagem
app.get("/mensagem", (request, response) => {
response.json({ mensagem: "Alo Mundo!" });
});

// Inicia o servidor
app.listen(port, () => {
console.log(`Servidor ouvindo a porta ${port}`);
});