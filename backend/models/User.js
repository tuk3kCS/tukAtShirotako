const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },
    
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true,
        default: 'user',
    },

    provider: {
        type: String,
        required: true,
        default: 'local', //for OAuth
    },

    profilePicture: {
        type: String,
    },

    bookmarks: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Manga',
    },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

export default User;