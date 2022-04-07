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

module.exports = router;