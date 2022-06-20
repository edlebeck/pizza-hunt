const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment_controller');

router.route('/:pizzaId').post(addComment);

router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;