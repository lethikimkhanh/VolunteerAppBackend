import mongoose, { Document, ObjectId, Schema } from 'mongoose';

export interface IPost {
    type: String,
    ownerId: String,
    createdAt: Date,
    updatedAt: Date,
    exprirationDate: Date,
    scope: String,
    content: String,
    media: Array<String>,
    numOfComment: Number,
    commentUrl: String,
    numOfLike: Number,
    likes: Array<ObjectId>,
    participants: Number,
    participatedPeople: Array<ObjectId>
}

export interface IPostModel extends IPost, Document { }

const IPostSchema: Schema = new Schema(
    {
        type: {type: String, require: true},
        ownerId: {type: String, required: true},
        createdAt: {type: Date, required: false},
        updatedAt: {type: Date, require: false},
        exprirationDate: {type: Date, require: true},
        scope: {type: String, require: true},
        content: {type: String, require: true},
        media: {type: Array<String>, require: false},
        numOfComment: {type: Number, require: false},
        commentUrl: {type: String, require: false},
        numOfLike: {type: Number, require: false},
        likes: {type: Array<ObjectId>, require: false},
        participants: {type: Number, require: true},
        participatedPeople: {type: Number, require: false}
    },
    {
        versionKey: false
    }
);

export default mongoose.model<IPostModel>('Post', IPostSchema);

export const DefaultPostData = (type: String,ownerId: String, exprirationDate: Date, scope: String, content: String, media: Array<String>, participants: Number) => {
    const iPost: IPost = {
        type: type,
        ownerId: ownerId,
        createdAt: new Date(),
        updatedAt: new Date(),
        exprirationDate: exprirationDate,
        scope: scope,
        content: content,
        media: media,
        numOfComment: 0,
        commentUrl: '',
        numOfLike: 0,
        likes: [],
        participants: participants,
        participatedPeople: []
    }
    return iPost;
}