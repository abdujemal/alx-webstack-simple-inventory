import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  customerName: { 
    type: String, 
    required: true 
  },
  customerId: {
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    required: true, 
    enum: ['Payed', 'Not Payed',]
  },
  pid: {
    type: String, 
    required: true
  },
  pName: {
    type: String, 
    required: true
  },
  pSku: {
    type: String, 
    required: true 
  },
  pImage: {
    type: String, 
    required: true
  },
  pLocation: {
    type: String, 
    required: true
  },
  pPrice: {
    type: Number,
    required: true
  },
  pStock: {
    type: Number,
    required: true
 }
}, {
  timestamps: true
});

export default mongoose.model('Activity', activitySchema);