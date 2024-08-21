'use client'
import CustomerHeader from "@/_components/CustomerHeader";
import RestaurantFooter from "@/_components/RestaurantFooter";
import UserSignup from "../../_components/UserSignup";
import UserLogin from "../../_components/UserLogin";
import { useState } from "react";

const UserAuth=(props)=>{
    const [login,setLogin]=useState(true);
    console.log("order flag",props);
    return(
        <div>
            <CustomerHeader />
            <div className="container">
            <h1>{login?'UserLogin':'UserSignup'} </h1>
            {
                login?<UserLogin redirect={props.searchParams} />:<UserSignup redirect={props.searchParams} />
            }
            <button className="button-link" onClick={()=>setLogin(!login)}>
             {login?'Do not have account? Signup':'Already have  account ?login'}
            </button>
            </div>
          
           
            <RestaurantFooter />
        </div>
    )
}
export default UserAuth;