import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function BookInfo(props) {
  const book = props.book;

  const genres = () => {
    book.genres.forEach((element) => {
      <div>{element}</div>;
    });
  };

  return (
    <Link to={`/member-detail/${book.slug}`}>
      <div class="memberInfo">
        <h4 class="noMargin">{book.title}</h4>
        <h5 class="noMargin"> {book.author}</h5>
     {/* <img src={book.image} /> */}
        {genres}
      </div>
    </Link>
  );
}

export default BookInfo;
