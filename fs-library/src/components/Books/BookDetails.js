import BookStore from "../../stores/BookStore";
import MemberStore from "../../stores/MemberStore";
import { useParams, Navigate } from "react-router-dom";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import BorrowModal from "../Borrow/BorrowModal";
// import { ColorExtractor } from  'react-color-extractor'

function BookDetails() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  const { bookSlug } = useParams();

  const book = BookStore.books.find((book) => book.slug === bookSlug);
  const previousBorrowedMembers = [];
  const membersborrowed = () =>
    book.borrowedBy.map((id) => {
      MemberStore.members.forEach((member) => {
        if (member._id === id) {
          previousBorrowedMembers.push(member);
          console.log(member, "member");
        }
      });
    });
  const genres = book.genres.map((element) => (
    <span className="center genreBorder" value={element}>
      {" "}
      {element}
    </span>
  ));
  membersborrowed();
  console.log("previous" + previousBorrowedMembers);

  console.log(book.isAvailable, "tesst");
  //we put + before tripId in the following line to convert tripId from string to number

  console.log("member id consoled " + bookSlug);
  return (
    <div className="center">
      <div className="center bookDetailsPage">
        <img className="imgwrap" src={book.image} />

        {/* {colour} */}

        <div style={{ padding: "40px" }}>
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

          {membersborrowed}
          <span>{genres}</span>
          {
            book.available ? (
              <button>
                <span onClick={openModal}> Borrow book? </span>
                <BorrowModal
                  isOpen={isOpen}
                  closeModal={closeModal}
                  bookid={book._id}
                  book={book}
                />
              </button>
            ) : (
              <Link
                to={`/member-detail/${
                  previousBorrowedMembers[previousBorrowedMembers.length - 1]
                    .slug
                }`}
              >
                <h4>
                  borrowed by
                  {previousBorrowedMembers[previousBorrowedMembers.length - 1]
                    .firstName +
                    " " +
                    previousBorrowedMembers[previousBorrowedMembers.length - 1]
                      .lastName}
                </h4>
              </Link>
            )
            //http://localhost:3001/member-detail/bodour-alrashidiii
          }
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
