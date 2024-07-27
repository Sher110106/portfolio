import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
    Name: {
        type: String,
        required: [true, 'Name is required.'],
    },
    Email: {
        type: String,
        required: [true, 'Email is required.'],
    },
    Phone: {
        type: String,
        required: false, // No need for an array if not providing a custom message
    },
    Message: {
        type: String,
        required: [true, 'Message is required.'],
    }
});

const Post = models.Post || model('Post', PostSchema);
export default Post;
