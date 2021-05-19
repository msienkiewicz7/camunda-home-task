// export a navigation component (use react-router-dom)
import React from "react";
import { NavLink } from "react-router-dom";

import './Navigation.css'

export default function Navigation(props) {
  
  return (
    <div className="navigation-container">
          <StyledLink to="/">Home</StyledLink>

          <StyledLink to="/modeler">Modeler</StyledLink>

          <StyledLink to="/frameworks">Frameworks</StyledLink>
    </div>
  );
}

function StyledLink({to, children}) {

  return (
    <div className="styled-link-container">
      <NavLink exact to={to} activeClassName="selected">{children}</NavLink>    
    </div>

  )
}
