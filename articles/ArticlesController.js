const expres = require('express');
const router = expres.Router();

router.get('/articles', (req, res) => {
    
    res.render('admin/articles/new.ejs');
})


module.exports = router;