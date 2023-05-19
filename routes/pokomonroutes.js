const router = require('express').Router();

const { sendPokomon, filter, deletePokomon } = require('../controllers/pokomoncontroller');

router.post('/pokomon', sendPokomon); 

router.get('/:username', filter);

router.post('/deletePokomon/:id', deletePokomon)

// router.get('/deletePokomon/:id', deletePokomon, (req, res) => {
// res.render('index');
// });

module.exports = router;