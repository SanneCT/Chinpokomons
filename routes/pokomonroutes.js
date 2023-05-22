const router = require('express').Router();

const { sendPokomon, filter, deletePokomon, updatePokomon, } = require('../controllers/pokomoncontroller');

router.post('/pokomon', sendPokomon); 

router.get('/:username', filter);

router.delete('/deletePokomon/:id', deletePokomon);

router.put('/updatePokomon', updatePokomon);

module.exports = router;