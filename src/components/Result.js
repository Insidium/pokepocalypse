import React from "react";
import { Link } from "react-router-dom";

export default function Result() {
  return (
    <div>
      <h1>OH!</h1>
      <p>A wild XXXX has appeared!</p>
      <Link to='/' className='btn btn-link'>
        {" "}
        Go Home
      </Link>
    </div>
  );
}
