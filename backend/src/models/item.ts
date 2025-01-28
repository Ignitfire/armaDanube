import mongoose, { Schema, Document } from 'mongoose';
import ItemTypeModel from './itemType';

interface IItem extends Document {
    name: string;
    type: mongoose.Types.ObjectId;
}

const ItemSchema: Schema = new Schema({
    name: { type: String, required: true },
    type: { type: mongoose.Types.ObjectId, ref: 'ItemType', required: true },
    neededQuantity: { type: Number, required: true },
    actualQuantity: { type: Number, required: true }
});

const ItemModel = mongoose.model<IItem>('Item', ItemSchema);
export default ItemModel;