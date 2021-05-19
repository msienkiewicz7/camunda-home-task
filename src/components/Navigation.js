// export a navigation component (use react-router-dom)
import React from "react";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/modeler">Modeler</Link>
        </li>
        <li>
          <Link to="/frameworks">Frameworks</Link>
        </li>
      </ul>
    </div>
  );
}
