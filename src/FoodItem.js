import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

// page with every food item detail
function FoodItem({ temp }) {

  const { name } = useParams();
  const { type } = useParams();

  // [{snacks, content: [{}, {}, {}]}, {}, {}]

  let foodType = temp.find(t => t["type"] === type); 

  if (!foodType) return <Redirect to="/" />;
  console.log(JSON.stringify(foodType));

  let food = foodType["content"].find(f => f.name === name);
  if (!food) return <Redirect to="/" />;
  console.log(`food: ${food}`);
  
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {food.name}
          </CardTitle>
          <CardText className="font-italic"></CardText>
          <p>
          <b>Description:</b> {food.description}
          </p>
          <p>
            <b>Recipe:</b> {food.receipt}
          </p>
          <p>
            <b>Serve:</b> {food.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;