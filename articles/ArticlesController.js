const expres = require('express');
const router = expres.Router();
const Category = require('../categories/Category');
const Article = require("./Article");
const slugify = require("slugify");



router.get('/admin/articles', (req, res) => {
    Article.findAll({
        include: [{model: Category}]  //Incluindo na busca
    }).then(articles => {
        res.render('admin/articles/index', {articles: articles})
    });
})


router.get("/admin/articles/new", (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/articles/new.ejs', {categories: categories})
    })
    
})

router.post("/articles/save", (req, res) => {
//     valor 
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category;

    Article.create({
//     campo / valor
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => {
        res.redirect("/admin/articles");
    })
})


router.post("/articles/delete", (req, res) =>{
    var id = req.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            Article.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect("/admin/articles");
            });

        }else{ // não for um numero
            res.redirect('/admin/articles');        
        }

    }else{  // underfined
        res.redirect('/admin/articles');
    }
});


router.get("/admin/articles/edit/:id", (req, res) => {
    var id = req.params.id;
    if(isNaN(id)){
        res.redirect("index");
    }
    Article.findByPk(id).then(article => {
        if(article != undefined){
            Category.findAll().then(categories => {
                res.render("admin/articles/edit", {article: article, categories: categories});
            })
            
        }else{
            res.redirect("index");
        }
    }).catch(erro => {
        res.redirect("index");
    })
});

router.post('/admin/articles/update', (req, res) => {
    var title = req.body.title;
    var body = req.body.body;

});
module.exports = router;
