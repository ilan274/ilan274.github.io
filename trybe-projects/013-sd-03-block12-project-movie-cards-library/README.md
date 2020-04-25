[English - Portuguese]

# Welcome to the Movie Cards Library project folder!
## What should be developed

You should develop a movie card library using React. The library must have a header and a list of cards. Each card represents a film and has an image, title, subtitle, synopsis, and evaluation. The library should look something like the image below.

! [image] (preview.png)

You will need to implement a set of components in React that will make up your App.

## Development and testing

This repository already contains a _template_ with an App React created and configured. After cloning the project and installing the dependencies (more on that below), you will not need to perform any additional configuration. You must complete this _template_ by implementing the requirements listed in the next section.

You will need to create four React Components:

   - Header
   - MovieList
   - MovieCard
   - Rating

Each component represents a specific part of the website, as shown below:

! [image] (site-outline.png)

All components must be created inside the `src/components` folder. ** It is important that your components have exactly the names listed above **.

All project requirements will be tested automatically. The tests for each requirement are in the `src / App.test.js` file. Spend time reading it to understand how the tests are organized.

To run the tests locally, type the command `npm test` in the terminal. Initially, your tests will look like this:

! [image] (failing-tests.png)

The first part of the output shows a summary of each test and its status. A ❌ represents a failing test, while a ✅ represents a correct test. Of course, in the beginning, all tests will be failing.

Below the summary, for each failed test, there is an explanatory message about the reason that caused the test to fail, as well as the line on which the failure occurred. In the image, we see that the test fails because the component `Header`, (line 38), is not defined.

If we do a simple implementation of the `Header` component, which does not render anything:

`` jsx
import React from 'react';

class Header extends React.Component {
  render () {
  }
}

export default Header;
``

And uncomment the line that imports the `Header` component in` App.test.js`:

`` js
// import App from './App';
import Header from './components/Header';
// import MovieCard from './components/MovieCard';
// import MovieList from './components/MovieList';
// import Rating from './components/Rating';
``

We will see that the first test now passes:

! [image] (first-green-test.png)

When your project is finished, all tests should be passing:

! [image] (all-green.png)

#### Tip: disabling tests

Especially at the beginning, when most tests are failing, the output after running the tests is very polluted. You can temporarily disable a test using the `skip` function next to the` it` function. As the name implies, this function "skips" a test:

`` js
it.skip ('it includes the text `Movie Cards Library` inside a h1 tag', () => {
  wrapper = shallow (<Header />);

  expect (wrapper.find ('header h1'). text ()). toBe ('Movie Cards Library');
});
``

When exiting the test run, you will see an <img src = "orange-circle.png" width = "15px"> indicating that the test is being skipped:

! [image] (skipped-test.png)

One strategy is to skip all tests at the beginning and implement one test at a time, removing the `skip` function from it.

⚠️ Remember not to deliver the project with any skipped tests. Skipped tests will be treated as failed tests.

#### Tip: watch mode

When running the tests locally, [Jest] (https://jestjs.io/), the tool that runs the tests, enters _watch mode_. In this mode, each time a file is saved, the tests are run again. This can increase your productivity by removing the need to run tests manually all the time. You can open a tab in your terminal or in the _VSCode_ terminal and leave _Jest_ running in that mode.

## Project requirements

⚠️ Remember that your project will only be evaluated if it is going through the _checks_ of ** CodeClimate **

#### 1 Create a component called `Header`

This component will represent the page header.

#### 2 Render the text "Movie Cards Library" inside `Header`

The text must be inside an `h1` tag, which in turn must be inside a` header` tag.

#### 3 Create a component called `MovieList`

This component will represent the entire area with film cards. `MovieList` should receive a prop` movies`, which is an array of objects with information from a movie.

#### 4 Render `MovieCard` components within` MovieList`

`MovieList` must render a` MovieCard` component for each object contained in the array received in the `movies` prop.

#### 5 Pass a key for each rendered 'MovieCard`

`MovieList` should render` MovieCard`s dynamically. That is, you must use the `map` function to render a list. Each `MovieCard` component should receive a` key` prop with the name of the movie.

#### 6 Create a component called `MovieCard`

This component represents a film card. `MovieCard` should receive a` movie` prop. This prop will be an object, containing the properties, `title`,` subtitle`, `storyline`,` imagePath`, and `rating`.

#### 7 Render the movie image

`MovieCard` must render an` img` tag, with the attribute `src` being the value of the property` imagePath` of the object received as a prop.

#### 8 Render the movie title

`MovieCard` must render the movie title inside an` h4` tag. The title is contained in the `title` property of the object received as a prop.

#### 9 Render the movie subtitle

`MovieCard` must render the subtitle of the movie inside an` h5` tag. The subtitle is contained in the `subtitle` property of the object received as a prop.

#### 10 Render the movie synopsis

`MovieCard` must render the synopsis of the movie inside a` p` tag. The synopsis is contained in the `storyline` property of the object received as a prop.

#### 11 Render a `Rating` component within` MovieCard`

`MovieCard` must render a` Rating` component.

#### 12 Pass the `rating` attribute to the` Rating` component

`MovieCard` must pass to the Rating component a prop called` rating`. The value of this prop is the `rating` property of the object received in the` movie` prop.

#### 13 Create a component called `Rating`

This component represents the evaluation of a film.

#### 14 Render a movie's note within Rating

`Rating` must render the rating of the film received in the` rating` prop within an element with the `rating` class.

#### 15 `App` should render` Header`

The `App` component must render a` Header` component.

#### 16 `App` should render` MovieList`

The `App` component should render a` MovieList` component, passing the list of movies contained in the `data.js` file as prop` movies`. To do this, you will need to import `data.js` into` App.js`.

----
----
----
----

# Boas vindas à pasta do projeto de Movie Cards Library!
## O que deverá ser desenvolvido

Você deverá desenvolver uma biblioteca de cartões de filmes utilizando React. A biblioteca deverá possuir um cabeçalho e uma lista de cartões. Cada cartão representa um filme e possui uma imagem, título, subtítulo, sinopse e avaliação. A biblioteca deverá ser algo parecido com a imagem abaixo.

![image](preview.png)

Você precisará implementar um conjunto de componentes em React que irão compor o seu App.

## Desenvolvimento e testes

Este repositório já contem um _template_ com um App React criado e configurado. Após clonar o projeto e instalar as dependências (mais sobre isso abaixo), você não precisará realizar nenhuma configuração adicional. Você deverá completar este _template_ implementando os requisitos listados na próxima seção.

Será necessário criar quatro `React Components`:

   - Header
   - MovieList
   - MovieCard
   - Rating

Cada componente representa uma parte específica do site, conforme ilustrado abaixo:

![image](site-outline.png)

Todos os componentes devem ser criados dentro da pasta `src/components`. **É importante que seus componentes tenham exatamente os nomes listados acima**.

Todos os requisitos do projeto serão testados automaticamente. Os testes para cada requisitos estão no arquivo `src/App.test.js`. Gaste um tempo lendo-o para entender como os testes estão organizados.

Para executar os testes localmente, digite no terminal o comando `npm test`. Inicialmente, seus testes estarão assim:

![image](failing-tests.png)

A primeira parte da saída mostra um sumário de cada teste e seu status. Um ❌ representa um teste falhando, enquanto um ✅ representa um teste correto. Naturalmente, no início todos os testes estarão falhando.

Abaixo do sumário, para cada teste falhando, há uma mensagem explicativa sobre o motivo que causou a falha do teste, assim como a linha em que a falha ocorreu. Na imagem, vemos que o teste falha porque o componente `Header`, utilizado na linha 38, não está definido.

Se fizermos uma implementação simples do componente `Header`, que não renderiza nada:

```jsx
import React from 'react';

class Header extends React.Component {
  render() {
  }
}

export default Header;
```

E descomentarmos a linha que importa o componente `Header` em `App.test.js`:

```js
// import App from './App';
import Header from './components/Header';
// import MovieCard from './components/MovieCard';
// import MovieList from './components/MovieList';
// import Rating from './components/Rating';
```

Veremos que o primeiro teste agora passa:

![image](first-green-test.png)

Quando seu projeto estiver terminado, todos os testes deverão estar passando:

![image](all-green.png)

#### Dica: desativanto testes

Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é bastante poluída. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `it`. Como o nome indica, esta função "pula" um teste:

```js
it.skip('it includes the text `Movie Cards Library` inside a h1 tag', () => {
  wrapper = shallow(<Header />);

  expect(wrapper.find('header h1').text()).toBe('Movie Cards Library');
});
```

Na saída da execução dos testes, você verá um <img src="orange-circle.png" width="15px"> indicando que o teste está sendo pulado:

![image](skipped-test.png)

Uma estratégia é pular todos os testes no início e ir implementando um teste de cada vez, removendo dele a função `skip`.

⚠️ Lembre-se de não entregar o projeto com nenhum teste ignorado. Testes ignoradados serão tratados como testes falhando.

#### Dica: watch mode

Ao executar os testes localmente, [Jest](https://jestjs.io/), a ferramenta que executa os testes, entra em _watch mode_. Nesse modo, a cada vez que um arquivo é salvo, os testes são executados novamente. Isso pode aumentar sua produtividade removendo a necessidade de executar os testes manualmente o tempo todo. Você pode abrir uma aba no seu terminal ou no terminal do _VSCode_ e deixar o _Jest_ rodando nesse modo.

## Requisitos do projeto

⚠️ Lembre-se que o seu projeto só será avaliado se estiver passando pelos _checks_ do **CodeClimate**

#### 1 Crie um componente chamado `Header`

Esse componente representará o cabeçalho da página.

#### 2 Renderize o texto "Movie Cards Library" dentro de `Header`

O texto deverá estar dentro de uma tag `h1`, que por sua vez deve estar dentro de uma tag `header`.

#### 3 Crie um componente chamado `MovieList`

Este componente representará toda a área com os cartões de filmes. `MovieList` deve receber uma prop `movies`, que é um array de objetos com informações de um filme.

#### 4 Renderize componentes `MovieCard` dentro de `MovieList`

`MovieList` deve renderizar um componente `MovieCard` para cada objeto contido no array recebido na prop `movies`.

#### 5 Passe uma key para cada `MovieCard` renderizado

`MovieList` deve renderizar `MovieCard`s de forma dinâmica. Ou seja, deve utilizar a função `map` para renderizar uma lista. Cada componente `MovieCard` deve receber uma prop `key` com o nome do filme.

#### 6 Crie um componente chamado `MovieCard`

Esse componente representa um cartão de filme. `MovieCard` deve receber uma prop `movie`. Essa prop será um objeto, contendo as propriedades, `title`, `subtitle`, `storyline`, `imagePath` e `rating`.

#### 7 Renderize a imagem do filme

`MovieCard` deve renderizar uma tag `img`, tendo como atributo `src` o valor da propriedade `imagePath` do objeto recebido como prop.

#### 8 Renderize o título do filme

`MovieCard` deve renderizar o título do filme dentro de uma tag `h4`. O título está contido na propriedade `title` do objeto recebido como prop.

#### 9 Renderize o subtítulo do filme

`MovieCard` deve renderizar o subtítulo do filme dentro de uma tag `h5`. O subtítulo está contido na propriedade `subtitle` do objeto recebido como prop.

#### 10 Renderize a sinopse do filme

`MovieCard` deve renderizar a sinopse do filme dentro de uma tag `p`. A sinopse está contida na propriedade `storyline` do objeto recebido como prop.

#### 11 Renderize um componente `Rating` dentro de `MovieCard`

`MovieCard` deve renderizar um componente `Rating`.

#### 12 Passe como prop para o componente `Rating` o atributo `rating`

`MovieCard` deve passar para o componente `Rating` uma prop chamada `rating`. O valor dessa prop é a propriedade `rating` do objeto recebido na prop `movie`.

#### 13 Crie um componente chamado `Rating`

Esse componene representa a avaliação de um filme.

#### 14 Renderize a nota de um filme dentro de `Rating`

`Rating` deve renderizar a nota do filme recebido na prop `rating` dentro de um elemento com a classe `rating`.

#### 15 `App` deve renderizar `Header`

O componente `App` deve renderizar um componente `Header`.

#### 16 `App` deve renderizar `MovieList`

O componente `App` deve renderizar um componente `MovieList`, passando como prop `movies` a lista de filmes contida no arquivo `data.js`. Para isso, você precisará importar `data.js` dentro de `App.js`.
