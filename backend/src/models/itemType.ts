import mongoose, { Schema, Document } from 'mongoose';

interface IItemType extends Document {
    name: string;
}

const ItemTypeSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true }
});

const ItemTypeModel = mongoose.model<IItemType>('ItemType', ItemTypeSchema);
export default ItemTypeModel;