//      imports
const express = require('express');
const app = express();

const bodyParse = require('body-parser');
const connection = require('./database/database');

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const Article = require("./articles/Article")
const Category = require("./categories/Category");



//      View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// body parse
app.use(bodyParse.urlencoded( {extended: false} ));
app.use(bodyParse.json());

// DataBase

connection
    .authenticate()
    .then(() => {
        console.log("Conexão ao banco de dados com sucesso")
    }).catch((error) => {
        console.log(error);
})

//   Rotas
app.use("/", categoriesController);
app.use("/", articlesController);

app.get('/', (req, res) =>{
    Article.findAll({
        order: [
            ['id', 'DESC']
        ], 
        limit: 4  // limite de artigo 
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render("index", {articles: articles, categories: categories});
        });
    });
})

// Rota artigo detail
app.get("/:slug", (req, res) => {
    var slug = req.params.slug;
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined){
            Category.findAll().then(categories => {
                res.render("article", {article: article, categories: categories});
            });
        }else{
            res.redirect("/");
        }
    }).catch(error => {
        res.redirect("/");
    });
})

//Rota de todos os artigos da categoria
app.get("/category/:slug", (req, res) => {
    var slug = req.params.slug;
    Category.findOne({
        where: {
            slug: slug
        }, include: [{model: Article}]
    }).then(category => {
        if(category != undefined){
            Category.findAll().then(categories => {
                res.render("index", {articles: category.articles, categories: categories});
            });
        }else{
            res.redirect("/");
        }
    }).catch(err => {
        res.redirect("/");
    })
})


app.listen(3030, () => {
    console.log('Servidor rodando...')
})