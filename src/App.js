import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

import NavBar from "./NavBar";
import Routes from "./Routes";
import NewFoodForm from "./NewFoodForm";
import SnackOrBoozeApi from "./Api";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>

      {/* 1- nav bar */}
        <NavBar foods={foods}/>

      {/* 2- define all routes */}
      <div className="container">
        <Routes foods={foods} />
      </div>

       {/* 3- add new food form */}
      <li>
      <Link to="/new">Add New Food</Link>
      </li>

      </BrowserRouter>
    </div>
  );
}


export const foods = [
  {type: "snacks",
      content: [{
          name: "nachos",
          description: "An American classic!",
          receipt: "Cover expensive, organic tortilla chips with Cheez Whiz.",
          serve: "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
        }, 
        {
          name: "hummus",
          description: "Sure to impress your vegan friends!",
          receipt: "Purchase one container of hummus.",
          serve: "Place unceremoniously on the table, along with pita bread."
        }, 
        {
          name: "salad",
          description: "Tart and delicious.",
          receipt: "Mix arugula, toasted walnuts, and thinly-sliced Parmesan cheese. Dress with lemon and olive oil.",
          serve: "Place on tiny, precious little plates"
        }]
  }, 

  {type: "drinks",
      content: [{
        name: "juice",
        description: "Breakfast must have",
        receipt: "Purchase one container of fresh oranges.",
        serve: "Place unceremoniously on the table, along with pita bread."
      }, 
      {
        name: "latte",
        description: "Working professional's blood",
        receipt: "Receive a fresh working professional after a cup of latte.",
        serve: "Place on tiny, precious little coffee mug"
      }]}
];


App.defaultProps = { foods };

export default App;



// ,

//       {type: "smoothies",
//       content: [{
//         name: "very-berries",
//         description: "Breakfast must have",
//         receipt: "Smoothy made out of berries",
//         serve: "Place unceremoniously on the table, along with pita bread."
//       }, 
//       {
//         name: "apple-banana",
//         description: "Easy bathroom time",
//         receipt: "Receive a fresh working professional after a bowl of apple-banana smoothy.",
//         serve: "Place on tiny, precious little coffee mug"
//       }]}