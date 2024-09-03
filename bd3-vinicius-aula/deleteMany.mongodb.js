/*Nome do banco de dados:*/
const database = 'BD3-VINICIUS-AULA';

/*Nome da coleção de dados:*/
const collection = 'LIVRARIA';

/* Criar ou acessar o banco de dados:*/
use(database);

/**/
db[collection].deleteMany(
    {autor: "Isaac Asimov"}
);