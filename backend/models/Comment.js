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

    chapter: { //hiển thị bình luận của từng chương
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chapter',
    },

    manga: { //hiển thị tất cả bình luận trên trang chính của truyện
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