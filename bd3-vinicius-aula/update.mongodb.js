/*Nome do banco de dados:*/
const database = 'BD3-VINICIUS-AULA';

/*Nome da coleção de dados:*/
const collection = 'LIVRARIA';

/* Criar ou acessar o banco de dados:*/
use(database);

/* altera os dados de um documento da collection */

db[collection].updateOne(
    {titulo: 'O Senho dos anéis: As Duas Torres'},
    { $set:{valor: '98'} }
);