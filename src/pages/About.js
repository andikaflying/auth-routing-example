import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <nav id="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div>Halaman About</div>
    </div>
  );
}

export default About;
