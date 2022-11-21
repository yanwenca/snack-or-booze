import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Menu from "./FoodMenu";
import NewFoodForm from "./NewFoodForm";

function Routes({ foods }) {

  // reset local storage
  // localStorage.setItem("foods", JSON.stringify(foods)); //to reset localStorage


  // redirect to "/" after form submission *******
  
  // 1- get initial foods from local storage or default colors
  const initialFoods = JSON.parse(localStorage.getItem("foods")) || foods; 

  // 2- create foods object to store the all foods 
  const[newFood, updateFoods] = useState(initialFoods); 
  // console.log(`initialFoods[1]: ${JSON.stringify(initialFoods[1])}`);
  
  function handleAdd(newFoodObj){
    if(newFoodObj[0] === "snacks"){
      initialFoods[0]["content"].push(newFoodObj[1]);
      updateFoods(initialFoods);
      localStorage.setItem("foods", JSON.stringify(newFood));
  }
    else if (newFoodObj[0] === "drinks"){
      initialFoods[1]["content"].push(newFoodObj[1]);
      updateFoods(initialFoods);
      localStorage.setItem("foods", JSON.stringify(newFood));
  }
  else {
    return null 
  }
};




  return (
    <Switch>

        {/* 1- root route - welcoming page */}
        <Route exact path="/" >
        <Home /> 
        </Route>

         {/* 2- show a list of snacks or a list of drinks */}
         <Route exact path="/new">
        <NewFoodForm addFood={handleAdd} />
        </Route>

        {/* 3- show a list of snacks or a list of drinks */}
        <Route path="/:type" >
        <Menu foods={foods} title="Menu" />
        </Route>

        
        {/* 4- redirect to "/" */}
        <Route>
        <p>Hmmm. I can't seem to find what you want.</p>
        </Route>

      </Switch>   
);                   
}

export default Routes;
