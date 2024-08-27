/*Nome do banco de dados:*/
const database = 'BD3-VINICIUS-AULA';

/*Nome da coleção de dados:*/
const collection = 'LIVRARIA';

/* Criar ou acessar o banco de dados:*/
use(database);

/* Seleciona todos os registros da coleção */
db[collection].find(
                        {"categoria": "Ficção Científica"},
                        {"_id": 0, "codigo": 0, "descricao": 0}
                    );