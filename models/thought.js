const userSchema = new Schema (
    {
    username: {
        type: String,
        required: true,
    },
    thoughtText: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 1
    },
    createdAt: {
        type: Date, 
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format
    },
    reactions: {


    }
    }
})