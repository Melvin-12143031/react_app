import React, { useState } from "react";

function UpdateStateArray() {

    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFood() {
        const NewFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, NewFood]);

    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (<div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) =>
                <li key={index} onClick={() => handleRemoveFood(index)}> {food} </li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Input Food" />
        <button onClick={handleAddFood}>Add Food</button>


    </div>);
}

export default UpdateStateArray