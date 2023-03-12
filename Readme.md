# Cartas aleatórias

Olá, o objetivo desse app foi realizar um desafio para que possa mostrar na tela cartas que tem o conteúdo delas alimentado via API.
O projeto foi desenvolvimento em React Native, utilizando o expo e o Typescript.


## Regras

As regras são as seguintes:
-   [x] Construir uma tela que exibe cinco cartas, o conteúdo dessas cartas deve ser alimentado via API.
-   [x] Cada carta deve conter pelo menos: nome, imagem, descrição e um valor aleatório de 0 a 10 que podemos chamar de pontos.
-   [x] Ao acessar a primeira página ele deve digitar um nome e clicar em ver cartas.
-   [x] Na tela seguinte ele visualiza as 5 cartas e o seu nome no canto superior direito.
-   [x] Na tela de cartas ele tem dois botões, onde um deles permite puxar uma nova carta aleatoriamente, ele pode apertar apenas 3 vezes.
-   [x] As cartas nunca são descartadas, caso ele puxe 3 novas cartas ele estará visualizando 8 cartas.
-   [x] O segundo botão permite a ele embaralhar a ordem das cartas que está visualizando.


## Rodando o projeto

Foi utilizado o expo para o desenvolvimento desse app.
- Após baixar ou clonar o repositório no github, basta apenas rodar o comando: **yarn** ou **npm i** 
- execute o comando **expo start** para rodar a aplicação
- execute o comando **i** para abrir o ios ou **a** para abrir o do android
- Se quiser, também poderá utilizar um celular fixo, basta apenas estar na mesma rede que a aplicação está sendo rodada e ler o QR-Code que aparece quando roda a aplicação

## Libs externas

Como não gosto muito de usar bibliotecas externas que facilitam muito o trabalho mas podem causar algum problema no projeto, acabei fazendo o projeto inteiro na mão, mas utilizei apenas as libs que seriam úteis para o desenvolvimento, e são essas:

- styled-components
- @react-navigation/native
- @react-navigation/native-stack
- axios
- @types/styled-components
- @types/styled-components-react-native

A API que foi utilizada para o projeto é a https://deckofcardsapi.com/


## Funcionamento do projeto

Logo quando o projeto inicia, a primeira tela informa que iremos fazer um game de carta, e pede para que possamos escrever em um input como podemos ser chamados, assim que preenchemos o campo, clicamos no botão para **Ver as Cartas** e somos redirecionados para a segunda tela.

Na segunda tela, já é mostrado para o usuário as 5 cartas iniciais que foram geradas aleatoriamente via API e dois botões, um para sacar mais uma carta que pode apenas sacar somente mais 3 cartas e outro botão para embaralhar as cartas.

![Gif Zoom](https://github.com/felipeamodio/RandomCards/blob/master/randomCards.gif)