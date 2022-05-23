import React from "react";
import { Link } from "react-router-dom";

// import BookList from "./Books/BookList";

function Home() {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#f1f1f1",
        borderRadius: "10px",
        margin: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://compote.slate.com/images/a92fef3e-c1db-4cbf-93da-dae90c0b9388.jpeg?width=1200&rect=4395x2930&offset=0x0"
          style={{
            width: "1100px",
            height: "300px",
            borderRadius: "20px",
            objectFit: "cover",
            marginTop: "30px",
            position: "relative",
            zIndex: "1",
          }}
        />
        <h1 className="HomeTitle">Archive Library</h1>
      </div>
      <div style={{ margin: "0px", position: "relative", bottom: "150px" }}>
        <h1
          style={{
            margin: "30px",
            fontWeight: "bolder",
            color: "#FFC300",
            textShadow: "1px 1px 3px #434343b9",
          }}
        >
          Top 3 most borrowed books from Archive Library
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            justifyContent: "space-around",
            marginTop: "50px",
          }}
        >
          <Link to={`/book-detail/harry-potter-and-the-deathly-hallows`}>
            <img
              style={{
                width: "250px",
                height: "350px",
                borderRadius: "20px",
                boxShadow: "0px 0px 10px 10px #D8D8D8",
              }}
              src="https://media.harrypotterfanzone.com/deathly-hallows-us-childrens-edition.jpg"
            />
          </Link>
          <Link
            to={`/book-detail/the-language-of-thorns-midnight-tales-and-dangerous-magic-1`}
          >
            <img
              style={{
                width: "250px",
                height: "350px",
                borderRadius: "20px",
                boxShadow: "0px 0px 10px 10px #D8D8D8",
              }}
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1491842507l/34076952.jpg"
            />
          </Link>
          <Link to={`/book-detail/12-rules-for-life-an-antidote-to-chaos`}>
            <img
              style={{
                width: "250px",
                height: "350px",
                borderRadius: "20px",
                boxShadow: "0px 0px 10px 10px #D8D8D8",
              }}
              src="https://images-na.ssl-images-amazon.com/images/I/71wR8wezE1L.jpg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
