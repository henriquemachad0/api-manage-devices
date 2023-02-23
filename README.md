## [**Link para a documentação da API (estar rodando localmente)**](http://localhost:5051/api-manage-devices/docs)

> ## Rotas

1. [Cadastrar dispositivo](./requirements/create-device.md)
2. [Atualizar dispositivo](./requirements/update-device.md)
3. [Listar dispositivos](./requirements/get-all-device.md)
4. [Listar um dispositivo através do Id](./requirements/get-by-id-device.md)
5. [Remover dispositivo](./requirements/remove-device.md)

# Necessário ter instalado

Node: https://nodejs.org/en/

MongoDb: https://www.mongodb.com/try/download/community

# Iniciar Projeto Localmente

Rodar ```npm install``` para adicionar as dependências do projeto

Rodar ```npm run dev``` para rodar o projeto o localmente em modo de desenvolvimento

Projeto rodarar em ```http://localhost:5051/api-manage-devices/```

MongoDB rodarar em ```mongodb://localhost:27017```

# Iniciar Projeto Docker

Ter Docker instalado [(link para download aqui)](https://www.docker.com/products/docker-desktop/)

Caso esteja rodando no Windows e tiver problemas com WSL2 seguir esse passo a passo: https://gist.github.com/luizomf/8bc93474de107bff6ee09b1ceee481df

Rodar ```npm run up``` para iniciar

Rodar ```npm run down``` para finalizar

Projeto rodarar em ```http://localhost:5051/api-manage-devices/```

MongoDB rodarar em ```mongodb://localhost:27018```

# Build do Projeto

Rodar ```npm install``` para adicionar as dependências do projeto

Rodar ```npm run build```

Rodar ```npm start```

Projeto rodarar em ```http://localhost:5051/api-manage-devices/```

MongoDB rodarar em ```mongodb://localhost:27017```

# Testes

Rodar ```npm test``` para rodar todos os testes

Rodar ```npm run test:integration``` para testes de integração

Rodar ```npm run test:unit``` para testes unitários

Rodar ```npm run test:coveralls``` para saber a porcentagem de cobertura dos testes
