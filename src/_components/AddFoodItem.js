 
 import { useState } from "react";

 const AddFoodItems=(props)=>{
  
    const [name,setName]=useState("");
   const [price,setPrice]=useState("");
   const [path,setPath]=useState("");
   const [description,setDescription]=useState("");
   const [error,setError]=useState(false)

   const handleAddFoodItem= async()=>{
    console.log(name,price,path,description);
    if(!name || !path || !price || !description){
     setError(true)
     return false
    }else{
      setError(false)
    }
     let resto_id;
     const restaurantData = JSON.parse( localStorage.getItem("restaurantUser"));
     if (restaurantData){
      resto_id=restaurantData._id
     }
     let response = await fetch("http://localhost:3000/api/Restaurant/foods",{
     method:"POST",
     body:JSON.stringify({name,price,img_path:path, description,resto_id})
     });
      response = await response.json();
      if (response.success) {
       alert("Food item added")
       props.setAddItem(false)
      }else{
       alert("Food item not added")
      }


   }


   return(<div className="container">
    <h1> Add New Food Item</h1>
    <div className="input-wrapper">
        <input type="text" className="input-field" placeholder="Enter food name"
        value={name} onChange={(event)=>setName(event.target.value)} />
        {
          error && !name &&<span className="input-error">Please enter valid name</span>
        }
    </div>
    <div className="input-wrapper">
        <input type="text" className="input-field" placeholder="Enter price"
           value={price} onChange={(event)=>setPrice(event.target.value)}  />
           {
            error && !price &&<span className="input-error">please enter valid price</span>
           }
    </div>
    <div className="input-wrapper">
        <input type="text" className="input-field" placeholder="Enter image path" 
           value={path} onChange={(event)=>setPath(event.target.value)} />
           {
            error && !path &&<span className="input-error">please enter valid path</span>
           }
    </div>
    <div className="input-wrapper">
        <input type="text" className="input-field" placeholder="Enter description"
            value={description} onChange={(event)=>setDescription(event.target.value)} />
         {
          error && !description &&<span className="input-error">Please enter valid description</span>
         }

          <div className="input-wrapper">
            <button className="button" onClick={handleAddFoodItem}>Add Food Item</button>
            </div>  
    </div>
   </div>

   )
 }
export default AddFoodItems;
        