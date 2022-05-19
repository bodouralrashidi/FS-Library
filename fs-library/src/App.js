import logo from "./logo.svg";
import "./App.css";
import MembersPage from "./components/members/MembersPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import MemberDetails from "./components/members/MemberDetails";
import BooksPage from "./components/Books/BooksPage";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members-page" element={<MembersPage />} />
        <Route path="/books-page" element={<BooksPage />} />
        <Route
          path={"/member-detail/:memberSlug"}
          element={<MemberDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
