import mongoose, { Model } from 'mongoose';
import { Entry } from '../interfaces';

const entrySchema = new mongoose.Schema({
  description: { type: String, required: true },
  createdAt: { type: Number, required: true },
  status: {
    type: String,
    enum: {
      values: ['pending', 'in-progress', 'finished'],
      message: '{VALUE} no es un estado permitido',
    },
    default: 'pending',
  },
});

const EntryModel: Model<Entry> =
  mongoose.models.Entry || mongoose.model('Entry', entrySchema);

export default EntryModel;
