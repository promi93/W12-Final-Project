import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { BsFillBookFill } from "react-icons/bs";
import Logo from "../assets/Spotify_Logo.png";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const SidebarPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = async (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${e.target.value}`
      );
      const data = await response.json();
      setSearchResults(data.data);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Container sm={2}>
      <nav
        className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="nav-container">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Spotify Logo" width="131" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <Link className="nav-item nav-link" to="/">
                    <FaHome className="fas FaHome fa-lg"></FaHome>&nbsp; Home
                  </Link>
                </li>
                <li>
                  <a className="nav-item nav-link" href="alt">
                    <BsFillBookFill className="fas BsFillBookFill fa-lg"></BsFillBookFill>
                    &nbsp; Your Library
                  </a>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                    />
                    <div
                      className="input-group-append"
                      style={{ marginBottom: "4%" }}
                    >
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        type="button"
                        id="button-addon1"
                      >
                        GO
                      </button>
                    </div>
                  </div>
                  <ul>
                    {searchResults.map((result) => (
                      <li key={result.id}>
                        <Link to={`/song/${result.id}`}>{result.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <br />
          <a href="alt">Cookie Policy</a> |<a href="alt"> Privacy</a>
        </div>
      </nav>
    </Container>
  );
};

export default SidebarPage;
