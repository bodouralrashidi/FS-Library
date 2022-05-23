import BookStore from "../../stores/BookStore";
import MemberStore from "../../stores/MemberStore";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BorrowModal from "../Borrow/BorrowModal";
import BorrowedByList from "./BorrowedByList";
function BookDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const { bookSlug } = useParams();

  const book = BookStore.books.find((book) => book.slug === bookSlug);
  let previousBorrowedMembers = [];
  const membersborrowed = () =>
    book.borrowedBy.map((id) => {
      MemberStore.members.forEach((member) => {
        if (member._id === id) {
          previousBorrowedMembers.push(member);
        }
      });
    });
  const genres = book.genres.map((element) => (
    <span className="center genreBorder" value={element}>
      {element}
    </span>
  ));

  membersborrowed();
  let firstNameBorrowedBy = previousBorrowedMembers.map(
    (member) => member.firstName + " " + member.lastName
  );
  return (
    <div className="center">
      <div className="center bookDetailsPage">
        <div style={{ width: "50%" }}>
          <img className="imgwrap" src={book.image} />
        </div>

        <div style={{ padding: "30px", width: "50%" }}>
          <h2
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {book.title}
          </h2>
          <h5 style={{ color: "white" }}>by {book.author}</h5>

          <span className="gridGenre">{genres}</span>
          {book.available || previousBorrowedMembers.length < 1 ? (
            <button className="addBook-btn">
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
              style={{
                textDecoration: "none",
                color: "black",
                backgroundColor: "White",
                borderRadius: "20px",
              }}
              to={`/member-detail/${
                previousBorrowedMembers[previousBorrowedMembers.length - 1].slug
              }`}
            >
              <h5 className="borrowedBy-btn">
                Borrowed By{" "}
                {previousBorrowedMembers[previousBorrowedMembers.length - 1]
                  .firstName +
                  " " +
                  previousBorrowedMembers[previousBorrowedMembers.length - 1]
                    .lastName}{" "}
              </h5>
            </Link>
          )}
          <BorrowedByList firstNameBorrowedBy={firstNameBorrowedBy} />
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
