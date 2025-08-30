const MangaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
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
}, { timestamps: true });

const Manga = mongoose.model('Manga', MangaSchema);

export default Manga;