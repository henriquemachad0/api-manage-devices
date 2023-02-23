## [**Link para a documentação da API (estar rodando localmente)**](http://localhost:5051/api-manage-devices/docs)

> ## Rotas

3. [Cadastrar dispositivo](./requirements/create-device.md)
3. [Atualizar dispositivo](./requirements/update-device.md)
4. [Listar dispositivos](./requirements/get-all-device.md)
5. [Listar um dispositivo através do Id](./requirements/get-by-id-device.md)
6. [Remover dispositivo](./requirements/remove-device.md)

# Iniciar Projeto Localmente

Rodar ```npm install``` para adicionar as dependências do projeto

Rodar ```npm run dev``` para rodar o projeto o localmente em modo de desenvolvimento

Projeto rodarar em ```http://localhost:5051/api-manage-devices/```

MongoDB rodarar em ```mongodb://localhost:27017```

# Iniciar Projeto Docker

Ter Docker instalado [(link para download aqui)](https://www.docker.com/products/docker-desktop/)

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