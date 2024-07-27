"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const EditFoodItems = (props) => {
  console.log(props.params.id);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false)
  const router = useRouter();


  useEffect(() => {
    handleLoadFoodItem();
  }, [])

  const handleLoadFoodItem = async () => {
    let response = await fetch("http://localhost:3000/api/Restaurant/foods/edit/" + props.params.id,);
    response = await response.json();
    if (response.success){
      setName(response.result.name)
      setPrice(response.result.price)
      setPath(response.result.img_path)
      setDescription(response.result.description)
    }
  }

  const handleEditFoodItem = async()=>{
   if (!name || !path || !price || !description) {
      setError(true)
      return false
    } else {
      setError(false)
    }
    console.log(name, price, path, description);


    let response = await fetch("http://localhost:3000/api/Restaurant/foods/edit/" + props.params.id, {
      method: 'PUT',
      body: JSON.stringify({ name,price,img_path:path,description })
    });
     response = await response.json();
     if(response.success){
       router.push("../dashboard")
     }else{
      alert("Data is not updated please try again")
     }
  }


  return (<div className="container">
    <h1> Update Food Item</h1>
    <div className="input-wrapper">
      <input type="text" className="input-field" placeholder="Enter food name"
        value={name} onChange={(event) => setName(event.target.value)} />
      {
        error && !name && <span className="input-error">Please enter valid name</span>
      }
    </div>
    <div className="input-wrapper">
      <input type="text" className="input-field" placeholder="Enter price"
        value={price} onChange={(event) => setPrice(event.target.value)} />
      {
        error && !price && <span className="input-error">please enter valid price</span>
      }
    </div>
    <div className="input-wrapper">
      <input type="text" className="input-field" placeholder="Enter image path"
        value={path} onChange={(event) => setPath(event.target.value)} />
      {
        error && !path && <span className="input-error">please enter valid path</span>
      }
    </div>
    <div className="input-wrapper">
      <input type="text" className="input-field" placeholder="Enter description"
        value={description} onChange={(event) => setDescription(event.target.value)} />
      {
        error && !description && <span className="input-error">Please enter valid description</span>
      }

      <div className="input-wrapper">
        <button className="button" onClick={handleEditFoodItem}>Update Food Item</button>
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={() => router.push('../dashboard')}>Back to Food Item List</button>
      </div>


    </div>
  </div>

  )
}
export default EditFoodItems;

