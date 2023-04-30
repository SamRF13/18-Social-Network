const User = require('../models/user');

module.exports = {
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
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    const dbUserData = await User.findOneAndUpdate(req.body);
        // Uses findOneAndUpdate() method on model
        const result = await Genre
        .findOneAndUpdate(
          { _id: req.params.userId },
          { $set: req.body },
          { new: true }
        );
  },
  async deleteUser(req, res) {
    const dbUserData = await User.findOneAndDelete(req.body);
    // Uses findOneAndDelete() method on model
    const result = await Genre
    .findOneAndDelete(
      { _id: req.params.userId },
      { $set: req.body },
      { new: true }
    )

  },
  async addFriend(req, res){


  },
  async deleteFriend(req, res){


  },
};

module.exports = userController;