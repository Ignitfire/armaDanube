import mongoose, { Schema, Document } from 'mongoose';

interface IRegistration extends Document {
  user: mongoose.Types.ObjectId;
  date: Date;
  status: 'NA' | 'isIntended' | 'isConfirmed';
}

const RegistrationSchema: Schema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['NA', 'isIntended', 'isConfirmed'], required: true }
});

const RegistrationModel = mongoose.model<IRegistration>('Registration', RegistrationSchema);
export default RegistrationModel;