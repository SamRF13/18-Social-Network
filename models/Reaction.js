const { Schema,} = require('mongoose');

const reactionSchema = new Schema (

    {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },

    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date, 
            default: Date.now,
//            get: (time) // =>  {find date format, preferrably from other file}
        },

    
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
      }
    )

    module.exports = reactionSchema