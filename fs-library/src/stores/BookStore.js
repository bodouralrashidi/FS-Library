import axios from "axios";
import { makeAutoObservable, action } from "mobx";
import slugify from "react-slugify";

class BooksStore {
  books = [];

  constructor() {
    makeAutoObservable(this, {
      AddBook: action,
      fetchBook:action,
    });
  }

  fetchBook = async () => {
    try {
      const response = await axios.get(
        `https://library-borrow-system.herokuapp.com/api/books`
      );

      this.books = response.data;
      console.log("responsoe/////", response.data);
    } catch (error) {
      console.error("erorrrrrr" + error);
    }
  };


  AddBook = async (book) => {
    book._id = this.books[this.books.length - 1].id + 1;
    book.slug = slugify(book.title, {delimiter : "-"});
    this.books.push(book);
   
    try {
      const response = await axios.post(
        "https://library-borrow-system.herokuapp.com/api/books",
        book
      );
      console.log("Dataaa" + response.data);
    } catch (error) {
      console.error("ERORRRRRRR" + error);
    }
  };

 
}

const bookStore = new BooksStore();
bookStore.fetchBook();
export default bookStore;
