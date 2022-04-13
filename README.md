<h1> Dev-Blog <h1>

  <h4> Porjeto focado em aprofundar os estudos em Node.JS, onde foi desenvolvido um Blog com atutenticação de usuários e CRUD completo.</h4>
  
<h2> Projeto </h2>
<br>
  
> Home

  ![Captura de tela de 2022-04-13 14-17-16](https://user-images.githubusercontent.com/99812176/163260661-4a79886c-7e1e-400e-b92f-aaf1b513e9cd.png)

<br><br>
  
> Sistema de <strong>Login</strong>
> 
  ![Captura de tela de 2022-04-13 14-17-46](https://user-images.githubusercontent.com/99812176/163261006-b6f87dc4-ace0-44af-a127-f98e7c3451b8.png)

<br><br>
> Listagem de Artigos<strong>(Admin)</strong>
> 
  ![Captura de tela de 2022-04-13 14-18-17](https://user-images.githubusercontent.com/99812176/163261850-083ad261-52da-44d3-912d-091afecbec92.png)

<br><br>

> Criação e edição de artigos utilizando o Tinymce
>
  ![Captura de tela de 2022-04-13 14-18-52](https://user-images.githubusercontent.com/99812176/163262205-5339fa79-892a-4927-b845-c7d1e524ec4e.png)
  <br><br>
<div align="left">
  O foco do projeto foi no back-end, buscando entender melhor alguns recursos e bibliotecas do Node.JS, foi feito uma básica estilização da página home, com a ajuda do Bootstrap, 
  e trabalhando com as bibliotecas do Express, foi possível criar um sistema de autenticação e verificação de usuário com o express.sessions, e criação de hash no cadastro dos usuários com o bcryptjs. Para a conexão com o banco de dados foi utilizado o ORM Sequelize.
</div>
<h2> Quer contribuir? </h2>
<br>
 Este é um respositório público, logo você está livre para ter uma cópia do projeto,  e se achar algum problema ou tiver alguma contribuição, pode fazer um **fork** do projeto, e sinta-se a vontade para fazer um **pull request**.
  
   Para rodar a aplicação, você precisará:
 - Ajustar o arquivo <code>database.js</code> de acordo com o seu banco de dados.
 - Importar as bibliotecas e dependências com <code>npm install</code> na pasta do projeto.
 - É recomendado ter o nodemon instalado na sua máquina, caso não tenha, pode instalar globalmente com  <code>npm install -g nodemon</code> e rodar o arquivo index.js para iniciar o servidor express com o comando <code>nodemon index.js</code> na pasta raiz do projeto. (Caso não tenha basta executar  <code>node index.js</code>, mas caso você faça alterações terá que reiniciar o servidor novamente).
