# Desafio Ailos

Projeto desafio em angular para Ailos

## Como subir a aplicação

```shell
# Clonando o projeto
$ git clone https://github.com/matheussguerra/test-ailos.git

# Navegar até a pasta raiz do projeto
$ cd test-ailos

# Instalar dependências
$ npm install

# Iniciar servidor
$ npm start
```

Abra o navegador em http://localhost:4200/

## Funcionamento

O formulário valida se o CPF inserido é válido ou não, caso seja válido o botão é habilitado para realizar a consulta.
O service retorna dados estáticos independente do CPF informado

## Componentes

Foi desenvolvido componentes para cards e buttons, os inputs foram criados com estilização global.

## Estrutura de pastas

```
├───app
│   ├───models
│   ├───pages
│   │   ├───components
│   │   └───home
│   ├───services
│   └───shared
│       ├───components
│       │   ├───buttom
│       │   ├───card
│       │   └───card-info
│       ├───layout
│       │   ├───header
│       │   └───sidenav
│       └───validators
├───assets
│   ├───icons
│   └───images
└───environments
```
