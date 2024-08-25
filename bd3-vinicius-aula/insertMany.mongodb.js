/* Nome do banco de dados */
const database = 'BD3-VINICIUS-AULA';

/* Nome do banco de dados da coleção */
const collection = 'LIVRARIA';

/* Criar ou acessar o banco de dados */
use(database);

/* Insere um registro na coleção de dados */
db[collection].insertMany([
    {
        "codigo":"3",
        "titulo": "Os Robôs da Alvorada",
        "autor": "Isaac Asimov",
        "descricao": "Em meio à mais evoluída colônia humana fora da Terra, ocorre um crime sem precedentes: um robô humaniforme é assassinado, colocando em xeque a reputação de um importante estudioso daquele planeta, único suspeito do crime.",
        "imagem":"/livros/robos_alvorada.jpg",
        "valor": 115,
        "categoria":"Ficção Científica"
    },
    {
        "codigo":"4",
        "titulo": "Robôs e Império",
        "autor": "Isaac Asimov",
        "descricao": "A humanidade evoluiu muito a partir então, e, para desgosto dos Siderais, o plano delineado por Baley finalmente começa a dar certo. Mas o universo se encontra em um impasse, enquanto cientistas poderosos e vingativos ameaçam destruir a Terra e tudo o que ela representa.",
        "imagem":"/livros/robos_imperio.jpg",
        "valor": 180,
        "categoria":"Ficção Científica"
    },
    {
        "codigo":"5",
        "titulo": "Poeira das Estrelas",
        "autor": "Isaac Asimov",
        "descricao": "Quando o jovem Biron Farrill descobre que seu pai foi assassinado e que sua própria vida corre perigo, decide partir em uma missão perigosa para encontrar respostas e achar os culpados. Ele não imagina, porém, que sua busca o lançará em uma obscura trama de revoltas, conspirações políticas e espionagem.",
        "imagem":"/livros/poeira_estrelas.jpg",
        "valor": 85,
        "categoria":"Ficção Científica"
    },
    {
        "codigo":"6",
        "titulo": "As Correntes do Espaço",
        "autor": "Isaac Asimov",
        "descricao":"Em um futuro distante, os poderosos de Sark enriquecem à custa de Florina, um planeta vizinho cujos habitantes são subjugados e trabalham incessantemente para produzir o valioso kyrt, matéria-prima disputada por todos os planetas. Rebelar-se é impensável. Rik é um homem sem memória e sem passado que trabalha em uma fábrica no planeta Florina.",
        "imagem":"/livros/correntes_espaco.jpg",
        "valor": 75,
        "categoria":"Ficção Científica"
    },
    {
        "codigo":"7",
        "titulo": "O Senho dos anéis: A Sociendade do Anel",
        "autor": "J.R.R Tolkien",
        "descricao": "Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel.",
        "imagem":"/livros/sociedade_anel.jpg",
        "valor": 195,
        "categoria":"Fantasia Heroica"
    },
    {
        "codigo":"8",
        "titulo": "O Senho dos anéis: As Duas Torres",
        "autor": "J.R.R Tolkien",
        "descricao": "Após a captura de Merry e Pippy pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman.",
        "imagem":"/livros/duas_torres.jpg",
        "valor": 98,
        "categoria":"Fantasia Heroica"
    },
    {
        "codigo":"8",
        "titulo": "O Senho dos anéis: O Retorno do Rei",
        "autor": "J.R.R Tolkien",
        "descricao":"Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.",
        "imagem":"/livros/retorno_rei.jpg",
        "valor": 120,
        "categoria":"Fantasia Heroica"
    }

])