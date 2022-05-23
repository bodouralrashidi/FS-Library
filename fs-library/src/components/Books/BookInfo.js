import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import ReturnModal from "./ReturnModal";
import { useState } from "react";
import memberStore from "../../stores/MemberStore";
import { observer } from "mobx-react";

function BookInfo(props) {
  const book = props.book;

  const genres = () => {
    book.genres.forEach((element) => {
      <div>{element}</div>;
    });
  };
  const checkborrow = () => {
    if (book.available == false) {
      return "borrowed";
    } else {
      return "noDisplay";
    }
  };

  let borrowClass = checkborrow();
  let BorrowMemberid = book.borrowedBy[book.borrowedBy.length - 1];

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <div>
      <div class="BookInfo">
        <div onClick={openModal} className={borrowClass}>
          Return
        </div>
        <ReturnModal
          isOpen={isOpen}
          closeModal={closeModal}
          BorrowMemberid={BorrowMemberid}
          book={book}
        />
        <Link
          style={{
            textDecoration: "none",
          }}
          to={`/book-detail/${book.slug}`}
        >
          <img
            style={{
              width: "150px",
              height: "200px",
              marginTop: "20px",
              borderRadius: "0px",
            }}
            src={book.image}
          />
          <h6
            style={{
              textDecoration: "none",
              color: "#FFC300",
              fontWeight: "bold",
              marginTop: "10px",
              fontSize: "12px",
            }}
            className="noMargin"
          >
            {book.title}
          </h6>
          {/* <h5 class="noMargin"> {book.author}</h5> */}

          {genres}
        </Link>
      </div>
    </div>
  );
}

export default observer(BookInfo);
