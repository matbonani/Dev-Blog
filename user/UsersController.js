const express = require("express");
const router = express.Router();
const User = require("./User");
const bcrypt = require("bcryptjs");


// listagem dos users
router.get("/admin/users", (req, res) => {
    User.findAll().then( users => {
        res.render("admin/users/users.ejs", {users: users});
    })
});

// formulario para criação de usuario
router.get("/admin/users/create", (req, res) => {
    res.render("admin/users/create");
})

// criação de usuario
router.post("/users/create", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    // verificação de email duplo
    User.findOne({where: {email: email}}).then( user => {
        if (user == undefined){
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(password, salt);
            
            User.create({
                email: email,
                password: hash
            }).then(() =>{
                res.redirect('/');
            }).catch(() => {
                res.redirect('/');
            });

        }else{
            res.redirect("/admin/users/create");
        }
    });
});

// formulario de login
router.get("/login", (req, res) => {
    res.render("admin/users/login");
})

// formulario de autenticação
router.post("/authenticated", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({where: {email: email}}).then(user =>{
        if(user != undefined){ // se existir usuario com esse email
            // é necessario validar  a senha, comparamos a senha usada para login com a do banco de dados
            var correct = bcrypt.compareSync(password, user.password);
            if(correct){ // se a senha estiver correta
                req.session.user = {
                    id: user.id,
                    email: user.email
                }
                res.redirect("/admin/articles");
            }else{       
                res.redirect("/login");
            }



        }else{
            res.redirect("/login");
        }
    })
})

router.get("/logout", (req, res) => {
    req.session.user = undefined;
    res.redirect("/");
})


module.exports = router;