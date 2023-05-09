const { user } = require('../models');
const User = require('../models/user');

const userController = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('posts');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
    /* populate example, idk if it will work

     async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('posts');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },*/
  },
  // create a new user
  async createUser(req, res) {
    try {
      console.log(req.body);
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    const dbUserData = await User.findOneAndUpdate(req.body);
    return dbUserData


  },
  async deleteUser(req, res) {
    const dbUserData = await User.findOneAndDelete(req.body);
    return dbUserData;
    
  },

  async addFriend(req, res){
    const dbUserData = await User.create (req.body);
  res.json(dbUserData);

  },
  async deleteFriend(req, res){
    const dbUserData = await user.findOneAndDelete(req.body);
    return dbUserData 

  },
};

module.exports = userController;