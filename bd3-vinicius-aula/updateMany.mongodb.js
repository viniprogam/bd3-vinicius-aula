/*Nome do banco de dados:*/
const database = 'BD3-VINICIUS-AULA';

/*Nome da coleção de dados:*/
const collection = 'LIVRARIA';

/* Criar ou acessar o banco de dados:*/
use(database);

/* altera os dados de um documento da collection */

db[collection].updateMany(
    {autor: "J.R.R Tolkien"},
    { $set:{autor: 'Jonh Ronald Reuel Tolkien'} }
);