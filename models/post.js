const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** ToDo: Add projectSchema including an owner field, email, etc */
const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  creator: {
    type: Object,
    required: String
  }
},
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);