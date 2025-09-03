const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    chapter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter',
    },

    manga: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manga',
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;