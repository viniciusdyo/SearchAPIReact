# ReactCourse

## Arquivos do projeto

#### .gitignore

Ignora arquivos e pastas que não vão para o repositório.

&nbsp;


#### package.json

Carrega consigo as dependências do projeto podendo ter dependências de dependências, uma carregando a outra. Esse arquivo marca e chama o que for necessário para o projeto.

&nbsp;


#### src\index.js

Arquivo que renderiza a página inicial do app. Também importa outros arquivos no início.

&nbsp;


#### public\index.html

Recebe a renderização feita pelo react e exibe dentro do ***body*** através da tag ***div*** que carrega o id="root".

&nbsp;


#### src\App.js

É um componente que importa coisas necessárias para o projeto e retorna, através de uma função construtora, código em HTML para ser redenrizado quando importado por outro arquivo.

&nbsp;

 
#### src\App.test.json

 Importa bibliotecas para testes de app. De início ela testa se o elemento linkado está na tela.
 
 &nbsp;
 &nbsp;

## Scripts

- Start - Inicia o projeto colocando-o online.
- Build - Cria uma pasta chamada build que carrega o conteúdo da pasta ***src*** e boa parte da pasta ***public***. Basicamente, a pasta ***build*** é o que o navegador vai entender.
- Test - Executa testes na aplicação.
- eject -

&nbsp;
&nbsp;

## Componentes

 O componente react não consegue retornar dois elementos root em uma só função. Somente retorna um root único e os elementos dentro dele. Mas usando "***<> </>***" no início e no final do elemento, é possível fragmentar (termo do qual ele é chamado) o root.
 P.Ex:
 ***Errado***
 > function App() {
 > return (
 > <div className="App"></div>
 > <div></div>
 > );
 > }
 >
 ***Certo***
  > function App() {
 >return (
 > <>
 > <div className="App"></div>
 > <div></div>
 > );
 >   </>
 >}

 Os "<> </>" não criam nenhum html mas funciona como uma div.

&nbsp;
&nbsp;

### export default App

  Exporta o componente para ser usado pelo aplicativo, escolhendo o nome e a forma como será exportado.

&nbsp;
&nbsp;

## Bundler

 Converte um amontoado de arquivos em um arquivo separado ou em vários arquivos distribuídos em pastas.

&nbsp;
&nbsp;

## Minificar

 Quando rodamos o comando "***npm run build***" cria-se uma pasta de mesmo nome build, onde os arquivos são minificados removendo os espaços entre os códigos para diminuír o tamanho em bytes deles.
 Essa minificação através da build do projeto converte tanto o css quanto o js do projeto.
 
 &nbsp;
 &nbsp;

## Deploy

 Significa que o site será hospedado de forma acessível para o mundo.
 
 &nbsp;
 &nbsp;
 
## ReactDOM

É responsável por manipular a DOM do navegador.
> ReactDOM.render(
> <React.StrictMode>
> <App />
> </React.StrictMode>,
> document.getElementById('root')
> );

Ele renderiza os parâmetros do componente App na div root da página.



O react também pode trabalhar em trechos da página, alterando o código e adicionando um seletor, p. ex.:
> document.querySelector('div-main')

&nbsp;
&nbsp;

## Componente Stateless

 São componentes que carregam em si funções e classes sem estado(**stateless**). Esses componentes retornam conteúdo sem classes podendo ser simples códigos HTML.

&nbsp;
&nbsp;

## Componentes Statefull

 Componentes de classes com estado(**statefull**). Estes renderizam o conteúdo com JSX e classes.
 
 &nbsp;
 &nbsp;

## Hooks

 São funções usando hooks para controlar os estados dos componentes.
 
 &nbsp;
 &nbsp;

## States

 Funcionam como estados que definem como a página será renderizada em sua ação.
 São dados que o componente utiliza. Quando mudamos o estado da página o método render é utilizado para renderizar a página novamente com o novo estado/dados.
 Todo componente react tem um state que é os dados do próprio componente em função.
 
 &nbsp;
 
#### Eventos sintéticos

 - ***onClick*** - é um evento sintético que é ativado dentro da página a partir da interação do click do mouse em algum elemento.
 
 &nbsp;
 &nbsp;

## Método
 
 - Não é possível acessar o *this* dentro de um método a partir de uma classe, p. ex.:

~~~
handlePClick() {
  const { name } = this.state; // erro - precisa do bound method
  console.log(`<p> clicado ${name}`);
}

 render() { 
  const { name } = this.state;
 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.hanclePClick}>
          {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
~~~ 

 - O React não faz o *bind* do *this* dentro de um método de classe, para isso tem que fazer manualmente pegando o método e fazer uma ***bound function*** ou um ***bound method*** :
  
~~~
  
  constructor(props) {
    this.handlePClick = this.handlePClick.bind(this); // bound method
    super(props);
    this.state = {
      name: 'Otávio Miranda'
    };
  }

handlePClick() {
  const { name } = this.state;
  console.log(`<p> clicado ${name}`);
}

 render() { 
  const { name } = this.state;
 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.hanclePClick}>
          {name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
~~~ 

&nbsp;

#### Método ***setState***
 Consiste em mudar o estado de um elemento(ou mais) do componente, p. ex., mudar o nome que existente dentro do ***this.state = { name: 'Otávio Miranda' };*** :
 
~~~
 handlePClick(){
   this.setState({ name: 'Junior' });
 } 
~~~
 Sempre que mudar o estado o método ***render()*** é chamado novamente.

 &nbsp;
 &nbsp;
## Funções

#### Arrow Function 
 É uma função que aponta para o ***this*** de dentro da classe mãe. É utilizado para fazer bind sem ocupar muitas linhas de código:
 
~~~
this.state = {
  name: 'Otavio Miranda',
  counter: 0
}

handleAClick = (event) => { // possibilida a criação de evento
  event.preventDefault(); // o evento está prevenindo que a função faça o que iria fazer antes (direcionaria para a página home do react)
  const { counter } = this.state;
  this.setState({ counter: counter + 1 });
}

render() { 
  const { name, counter } = this.state; // adiciona o contador na renderização do estado da página
 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handlePClick}>
          {name} {counter} // mostra o counter na página ao lado do name
        </p>
        <a
          onClick={this.handleAClick}
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
~~~

&nbsp;
&nbsp;

## Variável no JSX

 Para usar uma variável no JSX basta utilizar as ***{}***, p. ex:

>
> ~~~
> <p>
> { name }
>  </p>
> ~~~

 Utiliza o ***destructuring*** do ***javascript*** para desestruturar as atribuições, tornando-as mais simples e menores. P. ex.:

>
> ~~~
> const name = this.state.name;
> ~~~  

> ### [Link de referencia para Destructuring](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
 
 &nbsp;
 &nbsp;

 ## Constructor 
 Para minimizar o construtor é necessário utilizar as arrow functions, deixando-o com bem menos linhas de código :

~~~
constructor(props) {
    super(props);
    this.state = {
      name: 'Otávio Miranda',
      counter : 0
 };
}
~~~
 - Minimizado
~~~
state = {
      name: 'Otávio Miranda',
      counter : 0
 };
~~~ 
 
 &nbsp;
 &nbsp;

 ## Import

### import de componentes react

  Existe várias formas de usar o ***import***, p. ex:

~~~
import { Component } from 'react/cjs/react.production.min';

class App extends Component { 

~~~ 
 E 
~~~
import React from 'react';

class App extends React.Component { 

~~~

 Essa seria um forma mais longa de importar os componentes do react.
 
 &nbsp;
 &nbsp;

 ## Array
 [Array.prototype.map()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

 Ele invoca a função callback passada por argumento em cada elemento do Array e entrega um novo array como resultado. 
 É utilizado para "mapear" um array e usá-lo dentro de um elemento, como um root jsx.
 Para utilizar essa função se usa um sintax parecida com a abaixo:
 ~~~
 render() { 
  const { posts} = this.state;
 return (
    <div className="App">
       {posts.map(post => <h1 key={post.id}>{post.title}</h1>)}
    </div>
  );
 ~~~

 Onde o elemento ***posts.map()*** simboliza o ***Array.prototype.map()*** que recebe até três atributos.
 Dentro da ***Arrow function***, existe um *h1* carregando uma *key* (chave única) para aumentar a performace do aplicativo, renderizando apenas o que foi alterado e selecionado pelo código.
 
 &nbsp;
 &nbsp;

 ## LifeCicle Methods

 Métodos de ciclo de vida

 [React.Component LifeCile Methods](https://pt-br.reactjs.org/docs/react-component.html)

 ### componentDidMount() 

  Quando o componente for "montado na tela" o método ***componentDidMount()*** irá ser executado e fará alguma coisa. Ele será executado apenas uma vez.
  É usado para buscar dados de alguma API para renderizar na tela. Assim que o componente montar a função irá fazer uma requisição à API externa e ai irá setar o estado.

 - ***setTimeout(#,#)*** : recebe dois atributos, os dados e a definição de quando os dados serão montados na página. 
 - ***handle() - handleTimeout()*** - a palavra handle é uma convensão usada no react para métodos.

### componentDidUpdate()

Tecebe três atributos:

> ~~~
> componentDidUpdate(prevProps, prevState, snapshot)
> ~~~

Como no componentDidMount() o componentDidUpdate() também atualiza os elementos da página, lembrando que quando o método render() termina de montar a página os métódos componentDidMount() e componentDidUpdate() atualizam o state e consequentemente chamam o render de novo atualizando os elementos da página.

Com o componentDidUpdate() pode acontecer dele entrar em looping, uma vez que é possível executar mais de uma vez a função no código. Assim que a página é montada, o método componentDidUpdate() verifica se houve atualização do state, executando a função se for verdadeiro.

### componentWillUnmount()

Ele retira o "lixo" antes de desmontar a página. 
Esse método faz parte dos life cicle methods que definem todo o ciclo de vida do componente na página. Quando um componente é montado define-se como um ciclo de vida, assim quando é atualizado e desmontado.

[lifeCycle methods driagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

- ***Fase Render ***:
"Pura e sem efeitos colaterais. Pode ser pausada, abortada ou reiniciada pelo React."

- ***Fase Commit***:
"Pode operar o DOM, executar efeitos colaterais, agendar atualizações."
 
 &nbsp;
 &nbsp;

## Data Fetch

 Data Fetching é buscar dados fora da API.

 Utilizamos o método ***componentDidMount()*** para preencher os *posts* através do *Data Fetch*.
 
 Para fazermos as requisições, usamos a Fetch API do navegador. Descrito melhor na [documentação sobre Data Fetch em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API).

 Fetch Data, no react, funciona através de respostas das requisições feitas no navagador pela API.

> ~~~
> componentDidMount() {
>   fetch('https://jsonplaceholder.typicode.com/posts')
>   .then(response => response.json())
>   .then(posts => this.setState({ posts }))
> }
> ~~~
hangeClass = correctSlide => {
    slides.forEach(slide => slide.classList.remove('slideActive'))
    slides[correctSlide].classList.add('slideActive')
}

nextButton.addEventListener('click', () => {
    const correctSlide = currentSlide === lastIndex 
    ? currentSlide = 0 
    : ++currentSlide

    changeClass(correctSlide)
})

prevButton.addEventListener('click', () => {
    const correctSlide = currentSlide === 0
    ? currentSlide = lastIndex 
    : --currentSlide
e após isso o ***setState*** seta o estado da página com o conteúdo dos posts.

### Promise.all()

 Recebe dados assíncronos que podem ser rejeitados ou resolvidos. Caso sejam resolvidos, a Promise cria uma array com os dados resolvidos.
 Na API do projeto, esse método é utilizado para consumir os dados de uma API externa e tratá-los. No caso, ela já utiliza os dados de uma array que se forem rejeitados seriam tratados pelo método da mesma forma. 
 ***Promise*** é utilizado no JavaScript como uma promessa, podendo trazer os dados na mesma hora, em um futuro ou mesmo não apresentar dados nenhum (quando rejeitados).

### Lógica Fetch

> ~~~ 
> loadPosts = async () => {
>    
>    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
>    
>    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
>
>    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
>   
>    const postsJson = await posts.json();
>    const photosJson = await photos.json();
>
>    const postsAndPhotos = postsJson.map((post, index) => {
>      return { ...post, cover: photosJson[index].url }
>    });
>    
>    this.setState({ posts: postsAndPhotos });
>  }
> ~~~

 Para utilizar tanto os posts e photos em array, utilizamos o Ziper, uma forma de juntar dois arrays e indexar seus dados. No caso, para cada post tem uma foto do photos, ou seja, está relacionando os indices de cada banco.( o post de id: 1 carrega a imagem da post no Json photos com o mesmo id: 1)

> ~~~    
>    const postsAndPhotos = postsJson.map((post, index) => {
>      return { ...post, cover: photosJson[index].url }
>    });
>    
>    this.setState({ posts: postsAndPhotos });
> ~~~
 
[API gratuita para consumir](https://jsonplaceholder.typicode.com/)

[Documentação sobre Data Fetch em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)


&nbsp;

&nbsp;

---

&nbsp;

&nbsp;

## Padrão de organização

São formas de programar e organizar o código criadas por programadores e utilizadas por convensão para facilitar o entendimento do código. 

## Componentização

Sempre que um componente for executar JSX, seguindo o padrão certos padrões de organização, a extensão da index.js precisa ser alterada pada index.jsx de acordo com o conteúdo que o componente carrega. Porém, não há diferença entre as extensões, é apenas uma convensão.

Os componentes podem ou não ter estados, podendo utilizar ReactHooks com componentes funcionais para adicionar estado em componentes de funções.

Relembrando, um componente é um elemento que tem uma classe que tem o método render e retorna JSX ou uma função que também retorna JSX.


###### Ex. da API.
> components/PostCard/Index.jsx 

### Props 

***Props*** são propriedades de um objeto. 

Os componentes podem ter corpo ou não, assim como elementos jsx como as <div> root. A sintaxe para definir os componentes que tem corpo é, por exemplo:

> ~~~ 
> <PostCard></PostCard> 
> ~~~

E os componentes que não possuem corpo são definidos da forma abaixo:

> ~~~ 
> <PostCard /> 
> ~~~


O componente pode não ter corpo/filhos, mas contém atributos.


> ~~~
> {posts.map(post => (
>   <PostCard atributo='atributo' />
> ))}
> ~~~

Assim que se define o atributo e seu valor, ele retorna como objeto para as propriedades (*props*) do componente:

> ~~~
> 
> export const PostCard = (props) => {
>    console.log(props);
>    
>    return (
>        <h1>Oi</h1>
>       )
> }
> ~~~

Essas props podem receber JSX através dos atributos.

P. ex:

> ~~~ 
>  <section className="container">
>        <div className="posts">
>          {posts.map(post => (
>            <PostCard post={post} key={post.id}  />
>
>          ))}
>        </div>
>      </section>
> ~~~


> ~~~
> export const PostCard = ({post}) => {
>    return (
>       <div className="post">
>            <img src={post.cover} alt={post.title} />
>            
>            <div className="post-content">
>                <h1>{post.title}</h1>
>                <p>{post.body}</p>
>            </div>
>        </div>
>    )
> }
> ~~~



## Paginação 

