// backend/src/models/page.ts
import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    html: { type: String, required: true },
}, { timestamps: true });

export const PageModel = mongoose.model('page', pageSchema);