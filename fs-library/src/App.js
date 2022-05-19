import logo from "./logo.svg";
import "./App.css";
import MembersPage from "./components/MembersPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import MemberDetails from "./components/MemberDetails";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members-page" element={<MembersPage />} />
        <Route
          path={"/member-detail/:memberSlug"}
          element={<MemberDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
