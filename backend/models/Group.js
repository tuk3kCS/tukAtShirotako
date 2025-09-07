const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    description: {
        type: String,
    },

    groupPicture: {
        type: String,
    },

    members: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        required: true,
    },
}, { timestamps: true });

const Group = mongoose.model('Group', GroupSchema);

export default Group;