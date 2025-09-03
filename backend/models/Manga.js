const MangaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    otherNames: {
        type: [String],
    },

    description: {
        type: String,
    },

    author: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Author',
        required: true,
    },

    genres: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Genre',
        required: true,
    },

    isCompleted: {
        type: Boolean,
        default: false,
    },

    coverUrl: {
        type: String,
    },

    uploader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        default: null,
    },

    chapters: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Chapter',
    },

    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Comment',
    },
}, { timestamps: true });

const Manga = mongoose.model('Manga', MangaSchema);

export default Manga;