"use client"
import { useState, useEffect} from 'react';

import DeliveryHeader from '@/app/DeliveryHeader';
import { useRouter } from 'next/navigation';
const Deliverypartner =()=>{


const[loginMobile,setLoginMobile]=useState('');
const [loginpassword,setLoginPassword]=useState('');


const [name,setName]=useState('');
const [mobile,setMobile]=useState('');
const [password,setPassword]=useState('');
const [confirmpassword,setConfirmPassword]=useState('');
const [city,setCity]=useState('');
const [address,setAddress]=useState('');
const  router = useRouter();

useEffect=(()=>{
const delivery = JSON.parse(localStorage.getItem('delivery'));
if(delivery){
  router.push('/deliverydashboard')
}
},[])

const handleSignup=async()=>{
  console.log(name,mobile,password,confirmpassword,city,address);
  let response = await fetch('http://localhost:3000/api/deliverypartners/signup',{
   method:'post',
   body:JSON.stringify({name,mobile,password,city,address})
  })
    
    response = await response.json();
    if(response.success){
       alert("user signup done")
       const {result}=response;
       delete result.password;
       localStorage.setItem('delivery',JSON.stringify(result));
   router.push('deliverydashboard')
       
      
    }else{
     alert("failed")
    }
   }

   const loginHandle = async () => {
    let response = await fetch('http://localhost:3000/api/deliverypartner/login', {
        method: 'post',
        body: JSON.stringify({ mobile:loginMobile, password:loginpassword })
    })

    response = await response.json();
    if (response.success) {
        alert("user signup done")
        const { result } = response;
        delete result.password;
        localStorage.setItem('delivery', JSON.stringify(result));
        router.push('deliverydashboard')

    } else {
        alert("failed to login. Please try again with valid mobile and password")
    }

}




    return(
        <div>
          <DeliveryHeader />
            <h1>Delivery Partner</h1>
            <div className="auth-container">
                   <div className="login-wrapper">
                <h3>Login</h3>
                <div className="input-wrapper">
                <input type="text" placeholder="Enter mobile" value={loginMobile} onChange={(event) => setLoginMobile(event.target.value)} className="input-field" />
            </div>
            <div className='input-wrapper'>
                <input type='text' placeholder='Enter password' value={loginpassword} onChange={(event) => setLoginPassword(event.target.value)} className='input-field' />
            </div>
            <div className='input-wrapper'>
                <button onClick={loginHandle} className='button'>Login</button>
            </div>

   </div>

               <div className="signup-wrapper">
                <h3>Signup</h3>
               <div className="input-wrapper">
        <input type="text" className="input-field" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter name" />
      </div>
      <div className='input-wrapper'>
        <input type='text' className='input-field' value={mobile} onChange={(event) => setMobile(event.target.value)} placeholder='Enter mobile number' />
      </div>
      <div className='input-wrapper'>
        <input type='text' className='input-field' value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Enter  password' />
      </div>
      <div className='input-wrapper'>
        <input type='text' className='input-field' value={confirmpassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder='Enter confirm password' />
      </div>
      <div className='input-wrapper'>
        <input type='text' className='input-field' value={city} onChange={(event) => setCity(event.target.value)} placeholder='Enter city' />
      </div>
      <div className='input-wrapper'>
        <input type='text' className='input-field' value={address} onChange={(event) => setAddress(event.target.value)} placeholder='Enter address' />
      </div>
      <div className='input-wrapper'>
          <button onClick={handleSignup} className='button'>Signup</button>
      </div>



               </div>
            </div>
        </div>
    )
}
export default Deliverypartner;