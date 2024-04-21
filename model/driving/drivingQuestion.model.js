import mongoose from 'mongoose';

// Define a Mongoose schema
const drivingQuestionSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create a Mongoose model
const Driving_Question = mongoose.model('Driving_Question', drivingQuestionSchema);

export default Driving_Question;
