import React from "react";
import { useParams, Route, Redirect, Link } from "react-router-dom";
import "./FoodMenu.css";
import "./NavBar.css";
import Item from "./FoodItem";


function FoodMenu({ foods }) {
  
  const currFoods = JSON.parse(localStorage.getItem("foods")) || foods; 
  console.log(currFoods);

  const { type } = useParams();
  if(type) {
    let result = currFoods.find(f => f["type"] === type);
    if (!result) return <Redirect to="/" />;

    let temp = result["content"];

  // match food type: snacks or drinks
  const foodLinks = temp.map(foodName => (
    <li key={foodName.name}>
        <Link to={`/${type}/${foodName.name}`}>{foodName.name}</Link>
    </li>
  ))

  // show each food item detail, currentFood is an array
  return(
    <div className="navbar-brand">
      <div expand="md" className="navbar-brand">
      <ul>{foodLinks}</ul>

      <Route path="/:type/:name" >
      <Item temp={currFoods} type={type} title="Food" />
      </Route>

      </div>
    </div>

  );
}
  return null;
}


export default FoodMenu;
