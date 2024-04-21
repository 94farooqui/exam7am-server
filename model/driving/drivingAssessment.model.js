import mongoose from 'mongoose';

// Define a Mongoose schema
const driving_Assessment_Schema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create a Mongoose model
const Driving_Assessment = mongoose.model('Driving_Assessment', driving_Assessment_Schema);

export default Driving_Assessment;
