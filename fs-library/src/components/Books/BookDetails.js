import BookStore from "../../stores/BookStore";
import MemberStore from "../../stores/MemberStore";
import { useParams, Navigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BorrowModal from "../Borrow/BorrowModal";
function BookDetails() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  const { bookSlug } = useParams();

  const book = BookStore.books.find((book) => book.slug === bookSlug);
  const previousBorrowedMembers = [];
  const membersborrowed = ()=>
  (

    book.borrowedBy.map(id => { MemberStore.members.forEach(member => {
      console.log(member._id, "memeber id ", id , "book borrwed by member")
      if (member._id === id)
      { console.log(member._id, "memeber id ")
        previousBorrowedMembers.push(member)
        console.log(member,"member")
      } 
    });

    })
  )
  const genres = book.genres.map((element) => (
  
    <span className="center genreBorder" value={element}>
    
      {element}
    </span>
  ));

  membersborrowed()
console.log(previousBorrowedMembers)
  
  //we put + before tripId in the following line to convert tripId from string to number

  console.log("member id consoled " + book.available);
  return (
    <div className="center">
    <div className="center bookDetailsPage">
      <div style={{width: "50%"}}>
    <img className="imgwrap" src={book.image} />
    </div>

      <div style={{padding : "40px" ,width: "50%"}}>
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

      
        <span className="gridGenre">{genres}</span>
        {(book.available  || previousBorrowedMembers.length<1) ? (
          <button>
            <span onClick={openModal}> Borrow book? </span>
            <BorrowModal
              isOpen={isOpen}
              closeModal={closeModal}
              bookid={book._id}
              book={book}
            />
          </button>
         ): 
       <Link  style={{textDecoration: "none", color: "black", backgroundColor: "White", borderRadius:"20px"}}  to={`/member-detail/${previousBorrowedMembers[previousBorrowedMembers.length -1].slug}`} >
       <h5>Borrowed By {previousBorrowedMembers[previousBorrowedMembers.length -1].firstName + " "+ previousBorrowedMembers[previousBorrowedMembers.length -1].lastName } </h5>
        </Link>
}
       
      </div>
    </div>
    </div>
  );
}

export default BookDetails;
