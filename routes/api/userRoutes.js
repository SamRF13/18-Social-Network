const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/createUser/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

router.route(':userId/friend/:friendId').post(addFriend).delete(deleteFriend);


//Friends routes missing.

// router.route('/').post(CreateUser).; //i dont know, 

/*```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}*/
/*

router.route('/').put(editUser). //update user by his id

router.route('/').delete(updateUser) //remove user by his id


*/

module.exports = router;
