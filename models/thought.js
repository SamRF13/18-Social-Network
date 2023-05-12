const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');

const thoughtSchema = new Schema (
    {
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1
    },
    createdAt: {
        type: Date, 
        default: Date.now,
//        get: (time) // =>  {find date format, preferrably from other file}

    },

    username: {
        type: String,
        required: true,
    },
 reactions: [reactionSchema],
},

// json
{
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      getters: true,
    },
    id: false,
  },

)

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  })

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;