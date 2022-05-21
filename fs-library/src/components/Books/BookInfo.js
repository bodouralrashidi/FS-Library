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

    <Link
      style={{
        textDecoration: "none",
      }}
      to={`/book-detail/${book.slug}`}
    >
      <div class="BookInfo">
 
        <img
          style={{ width: "150px", height: "200px", marginTop: "20px" }}
          src={book.image}
        />
        <h6
          style={{
            textDecoration: "none",
            color: "#FFC300",
            fontWeight: "bold",
            marginTop: "10px",
          }}
          className="noMargin"
        >
          {book.title}
        </h6>
        {/* <h5 class="noMargin"> {book.author}</h5> */}
        
        {genres}
      </div>
    </Link>
  );
}

export default BookInfo;
