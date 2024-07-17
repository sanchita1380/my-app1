'use client'
import Link from "next/link";
import { useRouter,usePathname } from "next/navigation";
import { useEffect, useState} from "react";


const RestaurantHeader = () => {
   const [details,setDetails]=useState();
   const router = useRouter();
   const pathName=usePathname();
     useEffect(()=>{
     let data = localStorage.getItem("restaurantUser");
     if(!data && pathName == "/restaurant/dashboard"){
       // router.push("/restaurant")
  // }else if(data && pathName == "/restaurant"){
      //router.push("/restaurant/dashboard");
   }else{
       setDetails(JSON.parse(data))
      }
    })
const logout=()=>{
   localStorage.removeItem("restaurantUser")
   
}
return( 
          
          <div className="header-wrapper">
           <div className="logo">
           <img style={{width:150}} src="https://s.tmimgcdn.com/scr/1200x750/242400/food-delivery-custom-design-logo-template_242462-original.png" />
           </div>
         
         <ul>
         
            <li>  <Link href="/">Home</Link> </li>
             <li><button onClick={logout}>Logout</button></li>

              {
               details && details.name? 
              <>
           
           
               <li> <Link href="/">Login/Signup</Link></li></>
          
              : <li> <Link href="/">Profile</Link></li>
            
            
              }
           


           
         </ul>
           </div>
        
      )    
      }  
             
         

export default RestaurantHeader;