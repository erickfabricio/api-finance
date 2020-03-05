const router = require('express-promise-router')();

const {
    find,
    findById,
    save,
    update,
    remove
} = require('../controllers/app-transactions');

router.get('/', find);
router.get('/:transactionId', findById);
router.post('/', save);
router.put('/:transactionId', update);
router.delete('/:transactionId', remove);

module.exports = router;