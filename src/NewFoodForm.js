import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewFoodForm.css";


// NEED TO WORK ON addFood function
//pass in addFood function to store the newFood into foods object
function NewFoodForm({ addFood }){
    

    const [form, updateForm] = useState({type: "", name: "", description: "", receipt: "", serve: ""});
    const history = useHistory();

    function handleChange(e){
        e.persist();  //?????
        updateForm(f => ({ ...f, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e){
        e.preventDefault();
        addFood([form.type, { name: form.name, description: form.description, receipt: form.receipt, serve: form.serve }]); //store the newFolor into folors object
        history.push("/"); // redirect to homepage after add
    }

  
    //destructure hex, name from form.hex & form.name
    const {type, name, description, receipt, serve } = form;


    return (
        <div>
        <h1> </h1>
        <div className="NewColor">
        <form onSubmit={handleSubmit}>
        
    
            <p><label htmlFor="type">Food Type: </label>
            <input
            name="type"
            id="type"
            placeholder="snacks or drinks only"
            onChange={handleChange}
            value={type} /></p>


            <p><label htmlFor="name">Food Name: </label>
            <input
            name="name"
            id="name"
            placeholder="Enter food name"
            onChange={handleChange}
            value={name} /></p>

            <p><label htmlFor="description">Description: </label>
            <input
            name="description"
            id="description"
            placeholder="Enter food description"
            onChange={handleChange}
            value={description} /></p>

            <p><label htmlFor="receipt">Receipt: </label>
            <input
            name="receipt"
            id="receipt"
            placeholder="Enter food receipt"
            onChange={handleChange}
            value={receipt} /></p>

            <p><label htmlFor="serve">Serve: </label>
            <input
            name="serve"
            id="serve"
            placeholder="Enter food serve"
            onChange={handleChange}
            value={serve} /></p>
        

        
        <input type="Submit" value="Add this food" readOnly />
      </form>
    </div>
    </div>
    );
}

export default NewFoodForm;