'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
const RestaurantLogin=()=>{

const [email,setEmail]=useState();
const [password,setPassword]=useState(); 
const [error,setError]=useState(false);
const router= useRouter();

const handleLogin=()=>{
  if(!email || !password){
    setError(true)
  }else{
    setError(false)
  }
}
return(
  <>
  <h3>Login Component</h3>
  <div>
            <div className="input-wrapper">
             <input type="text" placeholder="Enter email id" className="input-field" value={email} onChange={(event)=>setEmail(event.target.value)} />
             {
                        error && !email && <span className="input-error">Please enter valid email </span>
                    }
            
             </div>
               </div>
        <div>
            <div className="input-wrapper">
             <input type="password" placeholder="Enter password " className="input-field" value={password} onChange={(event)=>setPassword(event.target.value)} />
               {error && !password &&<span className="input-error">Please enter valid password</span>}
             </div>
             
             <button onClick={handleLogin} className="button">Login</button>
        </div> 

        

  </>
)
   }
    

        
export default RestaurantLogin;