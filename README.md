##  Book Inventory Managment API

This is a book inventory managment api.
This is designed using Mongoose and Express. This API will allow users to create, retrieve, update, and delete book records, making it essential for efficient book management.
Some of the features are protected and can only be accessed when a user is logged in.

### Routes of the API

#### User routes
##### 1) /api/user/register (POST) - to register the user you need to provide name, email and password. The name should be atleast 3 characters long and Password must contain at least one digit, one lowercase and one uppercase letter, and be at least 6 characters long
##### 2) /api/user/login (POST) - you need to enter the email and the password
##### 3) /api/user/logout (GET) - You need to be first logged in to be able to logout


#### Book routes - All the routes are protected you must be first logged in to access it
##### 1) /api/books/ (POST) - to create a book you need to enter title, author, genre, copies, availableCopies. Genre should be one among these 'Fiction', 'Non-Fiction', 'Science Fiction', 'Mystery', 'Fantasy', 'Other'
##### 2) /api/books/ (GET) - to get all the books in the inventory
##### 3) /api/books/:bookId (GET) - to get the detail of a paricular book pass its id as params
##### 4) /api/books/:bookId (PUT) - to update the available copies of a paricular book pass its id as params and the latest "quantity" in body
##### 5) /api/books/:bookId (DELETE) - to delete a paricular book pass its id as params
##### 6) /api/books/genre/:genre (GET) - to get the books of particular genre pass the genre as params

