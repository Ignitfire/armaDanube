import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    firstName: string;
    lastName?: string;
    email?: string;
    broughtBy?: IUser
    authentication: {
        password: string;
        salt: string;
        sessionToken?: string;
    };
    pseudo?: string;
}

const userSchema: Schema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String },
        email: { type: String },
        broughtBy: { type: Schema.Types.ObjectId, ref: 'User' },
        authentication: {
            password: { type: String, required: true, select: false },
            salt: { type: String, required: true, select: false },
            sessionToken: { type: String, select: false }
        }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

userSchema.virtual('pseudo').get(function (this: IUser) {
    return this.lastName ? `@${this.firstName}_${this.lastName}` : this.firstName;
});

userSchema.pre('save', async function (next) {
    const user = this as unknown as IUser;
    const existingUser = await UserModel.findOne({
        firstName: user.firstName,
        lastName: user.lastName
    });
    if (existingUser) {
        const error = new Error('Pseudo must be unique');
        return next(error);
    }
    next();
});

export const UserModel = mongoose.model<IUser>('User', userSchema);

// getters
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({ 'authentication.sessionToken': sessionToken });
export const getUserById = (id: string) => UserModel.findById(id);

// CRUD-like operations
export const createUser = (values: Record<string, any>) => new UserModel(values)
    .save()
    .then((user) => user.toObject());

export const deleteUserById = (id: string) => UserModel.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values);