import BookStore from "../../stores/BookStore";
import { useParams, Navigate } from "react-router-dom";
import React, { useState } from "react";

//import Borrowedbooklist from "./Borrowedbookslist";
import BorrowModal from "../Borrow/BorrowModal";
function BookDetails() {
  // const trip = tripsData[0];
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  const { bookSlug } = useParams();

  const book = BookStore.books.find((book) => book.slug === bookSlug);
  const checkBook = {};

  const genres = book.genres.map((element) => (
    <span className="center genreBorder" value={element}>
      {" "}
      {element}
    </span>
  ));

  const isAvailable = () => {
    if (book.isAvailable == true) {
      console.log("eddd");
    }
  };

  //we put + before tripId in the following line to convert tripId from string to number

  console.log("member id consoled " + bookSlug);
  return (
    <div className="center bookPage">
      <div>
        <h1
          style={{
            textDecoration: "none",
            color: "#FFC300",
            fontWeight: "bold",
          }}
        >
          {book.title}
        </h1>
        <h3>by {book.author}</h3>

        <img className="imgwrap" src={book.image} />

        <span>{genres}</span>

        <button>
          <span onClick={openModal}> Borrow book? </span>
          <BorrowModal
            isOpen={isOpen}
            closeModal={closeModal}
            bookid={book._id}
            book={book}
          />
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
