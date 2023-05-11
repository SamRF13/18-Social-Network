const { Thought, User } = require('../models');


const thoughtController = {
    async getThoughts(req, res) {
      try {
        const users = await Thought.find();
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    async getSingleThought(req, res) {
      try {
        const Thought = await Thought.findOne({ _id: req.params.userId })
          .select('-__v');
  
        if (!Thought) {
          return res.status(404).json({ message: 'No thought with that ID' });
        }
  
        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // create a new thought
    async createThought(req, res) {
      try {
        const dbUserData = await Thought.create(req.body);
        res.json(dbUserData);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    async updateThought(req, res) {
      // Uses findOneAndUpdate() method on model
          const dbUserData = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            // Sets to true so updated document is returned; Otherwise original document will be returned
            { new: true }
          );
    },
    async deleteThought(req, res) {
        const dbUserData = await Thought.findOneAndDelete(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true }
        ) (req.body);
    },
    async createReaction(req, res) {
      const dbUserData = await reactionSchema.findOneAndDelete(

      )
    },

    async deleteReaction(req, res){
      const dbUserData = await reactionSchema.findOneAndDelete(

      )
    },
  };
  
// still need to do reactions.

module.exports = thoughtController