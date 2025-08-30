const ChapterSchema = new mongoose.Schema({
    chapterNumber: {
        type: Number,
        required: true,
    },

    title: {
        type: String,
        required: true,
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

    manga: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Manga',
        required: true,
    },

    chapterImages: {
        type: [String],
        required: true,
    },

}, { timestamps: true });

const Chapter = mongoose.model('Chapter', ChapterSchema);

export default Chapter;