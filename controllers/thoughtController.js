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
        const dbThoughtData = await Thought.create(req.body);
        const dbUserData = await User.findOneAndUpdate(
          { _id: req.body.userId },
          {$push: {thoughts: dbThoughtData._id}},
          // Sets to true so updated document is returned; Otherwise original document will be returned
          { new: true })
          if(!dbUserData) {
            return req.status(404).json({message: "user not found"});
          }
        return dbThoughtData;
      } catch (err) {

        console.log(err)
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
          return dbUserData
    },
    async deleteThought(req, res) {
        const dbUserData = await Thought.findOneAndDelete(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true }
        ) (req.body);
        if (!dbUserData) {
          return res.status(404).json({ message: 'No thought with that ID' });
        }
        return dbUserData
        
    },
    async createReaction(req, res) {
      const dbUserData = await reactionSchema.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: {reactions: req.body}},
          { new: true }
        );
        if (!dbUserData) {
          return res.status(404).json({ message: 'Reaction not created' });
        }
        return dbUserData
    },

    async deleteReaction(req, res){
        const dbUserData = await reactionSchema.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: {reactions: {reactionId:req.params.reactionId}}},
          { new: true }
        );
        if (!dbUserData) {
          return res.status(404).json({ message: 'No reaction with that ID' });
        }
        return dbUserData
    },
  };
  
// still need to do reactions.

module.exports = thoughtController