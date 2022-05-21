import React from "react";
import BookStore from "../../stores/BookStore";
import { useParams, Navigate } from "react-router-dom";
//import Borrowedbooklist from "./Borrowedbookslist";

function BookDetails() {
  // const trip = tripsData[0];
  const {bookSlug } = useParams();

  const book = BookStore.books.find(
    (book) => book.slug === bookSlug
  );
  
 const genres = book.genres.map((element) => (
      <span className="center genreBorder" value = {element}> {element}</span>
    ));
   


  //we put + before tripId in the following line to convert tripId from string to number
 
  console.log("member id consoled " + bookSlug);
  return (
    <div className="center bookPage">
      <div >
      <h1
          style={{
            textDecoration: "none",
            color: "#FFC300",
            fontWeight: "bold",
              }}
         
        >
          {book.title}
        </h1>
     

        <img className="imgwrap"
          src={book.image}
        />
       
       
        <span>{genres}</span>
        
 
      </div>
    </div>
  );
}

export default  BookDetails;
