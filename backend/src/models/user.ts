import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
    {
        firstname:{
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: false
        },
        authentication:{
            password:{ type: String, required: true, select: false },
            salt:{ type: String, required: true, select: false },
            sessionToken:{ type: String, required: false, select: false }
        }
    },
    {
        timestamps: true
    }
);

export const UserModel = mongoose.model('User', userSchema);

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


//* The following is the copilot given code for the project

/*
import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    firstName: string;
    lastname: string;
    broughtBy?: mongoose.Types.ObjectId;
    datesSuggested: Date[];
    datesConfirmed: Date[];
    items: {
        item: mongoose.Types.ObjectId;
        quantity: number;
        dates: Date[];
    }[];
}

const UserSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastname: { type: String, required: true },
    broughtBy: { type: mongoose.Types.ObjectId, ref: 'User' },
    datesSuggested: { type: [Date], default: [] },
    datesConfirmed: { type: [Date], default: [] },
    items: [{
        item: { type: mongoose.Types.ObjectId, ref: 'Item', required: true },
        quantity: { type: Number, required: true },
        dates: { type: [Date], default: [] }
    }]
});

const UserModel = mongoose.model<IUser>('User', UserSchema);
export default UserModel;

// Create a new user
const createUser = async (userData: Partial<IUser>) => {
    const user = new UserModel(userData);
    return await user.save();
};

// Read a user by ID
const getUserById = async (id: string) => {
    return await UserModel.findById(id).populate('broughtBy').populate('items.item');
};

// Update a user by ID
const updateUserById = async (id: string, updateData: Partial<IUser>) => {
    return await UserModel.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete a user by ID
const deleteUserById = async (id: string) => {
    return await UserModel.findByIdAndDelete(id);
};

// Get all users
const getAllUsers = async () => {
    return await UserModel.find().populate('broughtBy').populate('items.item');
};

// Get all users for a given date (confirmed or suggested)
const getUsersForGivenDate = async (date: Date, type: 'suggested' | 'confirmed') => {
    const query = type === 'suggested' ? { datesSuggested: date } : { datesConfirmed: date };
    return await UserModel.find(query).populate('broughtBy').populate('items.item');
};

// Get all users for a given week (confirmed or suggested)
const getUsersForGivenWeek = async (startDate: Date, endDate: Date, type: 'suggested' | 'confirmed') => {
    const query = type === 'suggested' ? { datesSuggested: { $gte: startDate, $lte: endDate } } : { datesConfirmed: { $gte: startDate, $lte: endDate } };
    return await UserModel.find(query).populate('broughtBy').populate('items.item');
};*/
