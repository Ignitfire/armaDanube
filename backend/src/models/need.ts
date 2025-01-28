import mongoose, { Schema, Document } from 'mongoose';

interface IContribution extends Document {
    user: mongoose.Types.ObjectId;
    status: 'isIntended' | 'isConfirmed';
    quantity: number;
}

interface INeed extends Document {
    date: Date;
    item: mongoose.Types.ObjectId;
    totalQuantity: number;
    contributions: IContribution[];
}

const ContributionSchema: Schema = new Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['isIntended', 'isConfirmed'], required: true },
    quantity: { type: Number, required: true, min: 1 }
});

const NeedSchema: Schema = new Schema({
    date: { type: Date, required: true },
    item: { type: mongoose.Types.ObjectId, ref: 'Item', required: true },
    totalQuantity: { type: Number, required: true, min: 1 },
    contributions: { type: [ContributionSchema], default: [] }
});

const NeedModel = mongoose.model<INeed>('Need', NeedSchema);
export default NeedModel;