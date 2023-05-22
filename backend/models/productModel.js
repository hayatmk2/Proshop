import mongoose from 'mongoose'

const ProductSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image:{
    type: String,
    required: true
  },
  brand:{
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true,
    default: 0
  },
  description:{
    type: String,
    required: true
  },

  numReviews:{
    type: Number,
    required: true,
    default: 0
  },
  countInStock:{
    type: Number,
    required: true,
    degault: 0
  }
},{
  timestamps: true
});

const Product = mongoose.model('Product', ProductSchema)
export default Product