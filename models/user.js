const {Schema, model} = require('mongoose')

// Schema to create User model
const userSchema = new Schema (
    {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        match: [/.+\@.+\..+/],
    },
    thoughts: [
        {
        type: 
        ref: 'thought'
        }
    ],
    friends: [
        {
        type:
        ref:'friend'
        }
    ]
        },
        )
        
        