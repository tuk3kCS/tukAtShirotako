const ChapterSchema = new mongoose.Schema({
    chapterNumber: {
        type: Number,
        required: true,
    },

    title: {
        type: String,
    },

    manga: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manga',
        required: true,
    },

    chapterImages: {
        type: [String],
        required: true,
    },

    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Comment',
    },

}, { timestamps: true });

const Chapter = mongoose.model('Chapter', ChapterSchema);

export default Chapter;