const expres = require('express');
const router = expres.Router();

router.get('/articles', (req, res) => {
    
    res.send('Rota de artigo');
})

module.exports = router;