import React, { useState } from "react";
import bookStore from "../../stores/BookStore";
import BookInfo from "./BookInfo";
import { observer } from "mobx-react";
import { Button } from "react-bootstrap";
import AddBookModal from "./AddBookModal";

function BookList() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  const [genre, setGenre] = useState("");
  const [query, setQuery] = useState("");

  const booksList = bookStore.books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) &&
        (book.genres.find((genra) => genra == genre) || genre == "")
    )
    .map((book) => <BookInfo book={book} key={book._id} />);

  return (
    <div>
      <div class="search-filter">
        <div class="genre"></div>
        <input
          type="search"
          class="search"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />

        <select class="dropdown" onChange={(e) => setGenre(e.target.value)}>
          <option value="" selected>
            All
          </option>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="Business">Business</option>
          <option value="Crime">Crime</option>
          <option value="Entrepreneurship">Entrepreneurship</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Fiction">Fiction</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Self-Help">Self-Help</option>
          <option value="Suspense">Suspense</option>
          <option value="Thriller">Thriller</option>
        </select>

        <button class="addMember-btn">
          <span onClick={openModal}> + </span>
          <AddBookModal isOpen={isOpen} closeModal={closeModal} />
        </button>
      </div>

      <div class="Bookslistcontainer">{booksList} </div>
    </div>
  );
}

export default observer(BookList);
