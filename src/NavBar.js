import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar } from "reactstrap";

// types: snacks or drinks: e.g.: /snacks/nachos
function NavBar({ foods }) {
  const links = foods.map(food => (
      <NavLink 
      key={food.type} 
      to={`/${food.type.toLowerCase()}`} >
      {food.type}
    </NavLink>

  ));


  return (
    <div>
      {/* navlink for the homepage */}
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

      {/* list all links by food type: drinks or snacks */}
      { links }

      </Navbar>
    </div>
  );
}

export default NavBar;

