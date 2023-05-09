const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

router.route('/createThought').get(getThought).post(createThought);

router.route('/thoughtID').get(getSingleThought); //get by its id popoulated thought and friend data.

router.route('/').post(createThought); // (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

router.route('/updateThought').put(updateThought);

router.route('/deleteThought').delete(deleteThought);

module.exports = router;
/*

**`/api/thought`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value

*/