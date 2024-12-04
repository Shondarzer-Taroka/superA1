const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., "Categorize", "Cloze", "Comprehension"
  questionText: { type: String, required: true },
  options: { type: Array }, // Optional: For "Categorize"
  image: { type: String }, // Image URL
});

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  headerImage: { type: String },
  questions: [questionSchema],
});

module.exports = mongoose.model('Form', formSchema);
