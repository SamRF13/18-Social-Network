const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

//http://localhost:3001/api/users/createUser
//// (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)
router.route('/createThought').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought); //get by its id popoulated thought and friend data.

router.route('/:thoughtId/reaction/:reactionId').post(createReaction).delete(deleteReaction);


module.exports = router;
/*
**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

*/