import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide an email address'],
      unique: true,
      match: [/.+\@.+\..+/, 'Please enter a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [8, 'Password must be at least 6 characters long'],
    },
    username: {
      type: String,
      unique: true,
      sparse: true, // Allows this field to be optional and still enforce uniqueness
    },
    fullName: {
      type: String,
    },
    profilePicture: {
      type: String, // You can store the URL or the path of the uploaded image
    },
    role: {
      type: String,
      default: "customer",
      enum: ['customer', 'admin', 'seller'],

    },
    storeId: {
      type: String,
    },
  },
  { timestamps: true }
);


export default mongoose.models.customer || mongoose.model('customer', UserSchema);
