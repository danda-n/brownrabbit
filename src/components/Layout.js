import React from "react";
import { Link } from "react-router-dom";
import "../scss/Layout.scss";

const Layout = (props) => {
  return (
    <div className="main">
      <header className="main-header">
        <div className="app-navi">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About NBC</Link>
            </li>
            <li>
              <Link to="/event">2011 Event</Link>
            </li>
            <li>
              <Link to="/roaster">Nordic Roaster</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
            <li>
              <Link to="/links">Links</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <input type="text" placeholder="Search..." value={props.searchValue} onChange={props.onSearchChange}></input>
          </ul>
        </div>
      </header>
      <div className="app-content">{props.children}</div>
    </div>
  );
}

export default Layout;