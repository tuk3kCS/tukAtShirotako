const RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true });

const Role = mongoose.model('Role', RoleSchema);

export default Role;