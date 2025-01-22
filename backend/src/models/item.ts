//* the following is the given code from the copilot for the project
/*
import mongoose, { Schema, Document } from 'mongoose';

enum ItemType {
    TYPE1 = 'Type1',
    TYPE2 = 'Type2',
    TYPE3 = 'Type3'
}

interface IItem extends Document {
    name: string;
    type: ItemType;
    neededQuantity: number;
    actualQuantity: number;
}

const ItemSchema: Schema = new Schema({
    name: { type: String, required: true },
    type: { type: String, enum: Object.values(ItemType), required: true },
    neededQuantity: { type: Number, required: true },
    actualQuantity: { type: Number, required: true }
});

const ItemModel = mongoose.model<IItem>('Item', ItemSchema);
export default ItemModel;
export { ItemType };

// Create a new item
const createItem = async (itemData: Partial<IItem>) => {
    const item = new ItemModel(itemData);
    return await item.save();
};

// Read an item by ID
const getItemById = async (id: string) => {
    return await ItemModel.findById(id);
};

// Update an item by ID
const updateItemById = async (id: string, updateData: Partial<IItem>) => {
    return await ItemModel.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete an item by ID
const deleteItemById = async (id: string) => {
    return await ItemModel.findByIdAndDelete(id);
};

// Get all items
const getAllItems = async () => {
    return await ItemModel.find();
};

// Get items of a user
const getItemsOfUser = async (userId: string) => {
    const user = await UserModel.findById(userId).populate('items.item');
    return user ? user.items : [];
};

// Get users bringing an item
const getUsersBringingItem = async (itemId: string) => {
    return await UserModel.find({ 'items.item': itemId }).populate('broughtBy').populate('items.item');
};

// Get all items for a given week (confirmed or suggested)
const getItemsForGivenWeek = async (startDate: Date, endDate: Date, type: 'suggested' | 'confirmed') => {
    const query = type === 'suggested' ? { 'items.dates': { $gte: startDate, $lte: endDate } } : { 'items.dates': { $gte: startDate, $lte: endDate } };
    return await UserModel.find(query).populate('broughtBy').populate('items.item');
};*/
