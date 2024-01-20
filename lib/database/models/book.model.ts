import { Schema, model, models } from 'mongoose';

const BookSchema = new Schema({
  userId: {type: String, required: true},
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: {type: String, required: true},
  categories: {type: String, required: true},
  thumbnail: {type: String, required: true},
  note: {type: String, required: false},
})

const Book = models.Book || model('Book', BookSchema);

export default Book;