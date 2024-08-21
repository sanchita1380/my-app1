
import { useRouter } from 'next/navigation';
import { useState } from 'react'
const UserSignup = (props) => {
  const [name, setName] = useState()
  const [email,setEmail]= useState()
  const [password, setPassword] = useState();
    const [confirmpassword,setConfirmPassword]=useState();
    const [city,setCity]=useState();
    const [address,setAddress]=useState()
    const [mobile,setMobile]=useState()
    const router = useRouter();

         const handleSignup=async()=>{
       console.log(name,email,password,confirmpassword,city,address,mobile);
       let response = await fetch('http://localhost:3000/api/user',{
        method:'post',
        body:JSON.stringify({name,email,password,city,address})
       })
         
         response = await response.json();
         if(response.success){
            alert("user signup done")
            const {result}=response;
            delete result.password;
            localStorage.setItem('user',JSON.stringify(result));
            if(props?.redirect?.order){
              router.push('/order')

            }else{
              router.push('/')

            }
           
         }else{
          alert("failed")
         }
        }
  return (
    <div>
      <div className="input-wrapper">
        <input type="text" className="input-field" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter name" />
      </div>
      <div className='input-wrapper'>
        <input type='text' className='input-field' value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Enter email' />
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
        <input type='text' className='input-field' value={mobile} onChange={(event) => setMobile(event.target.value)} placeholder='Enter mobile number' />
      </div>
      <div className='input-wrapper'>
          <button onClick={handleSignup} className='button'>Signup</button>
      </div>
    </div>
  )
}
export default UserSignup;