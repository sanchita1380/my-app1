"use client"
import RestaurantHeader from "@/_components/RestaurantHeader";
import './../style.css'
import FoodItemList from "@/_components/FoodItemList";
import AddFoodItems from "@/_components/AddFoodItem";
import { useState } from 'react';


const Dashboard = () => {
    const [addItem,setAddItem] = useState(false)
    return (<div>
        <RestaurantHeader />
        <button onClick={() => setAddItem(true)}>Add Food</button>
        <button onClick={() => setAddItem(false)}>Dashboard</button>
        {
            addItem ? <AddFoodItems setAddItem={setAddItem} /> : <FoodItemList />
        }


    </div>)
}
export default Dashboard;


