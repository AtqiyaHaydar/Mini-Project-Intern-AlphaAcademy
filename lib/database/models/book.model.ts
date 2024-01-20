import { Schema, model, models } from 'mongoose';

const BookSchema = new Schema({
  bookId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: {type: String, required: true},
  categories: {type: String, required: true},
  thumbnail: {type: String, required: true},
})

const Book = models.Book || model('Book', BookSchema);

export default Book;