
import mongoose from 'mongoose';
import { bookSchema } from './book.schema.js'


const booksModel = mongoose.model('Book', bookSchema);

export default class BookRepository {

    //book creation
    async createBook(bookData) {
        const book = new booksModel(bookData);
        const savedBook = await book.save();
        return savedBook;
    }

    async getAll(){
        const books = await booksModel.find()
        return books
    }

    // filtering of book by id
    async getOne(id) {
        const book = await booksModel.findById(id);
        return book;
    }


    //filtering the books based on genre
    async listBooksByGenre(genre) {
         
         const books =await booksModel.find({genre})
         return books
     }

    //increasing the count of available books
    async updateBookAvailability(bookId, quantity) { 
        const book = await booksModel.findById(bookId);
        const newQuantity = book.availableCopies + quantity;
        book.availableCopies = newQuantity;
        await book.save()
        return book;
    }

    //deletion of book
    async deleteBookById(bookId) {
        const deletedBook = await booksModel.findByIdAndDelete(bookId)
        return deletedBook;
     }
}