import {useState} from "react"
import {useNavigate} from "react-router-dom"
import { InputField,Lable} from "../Component/styled";

const LoginPage =()=>{
    
    const [users,setUsers] =useState(
        {
            name: "",
            email:"",
            Password:"",
        }
    )
    let navigate = useNavigate();
    const HandleChange =() =>{
      setUsers({
            ...users,
            name:document.getElementById("name").value,
            email:document.getElementById("email").value,
            Password:document.getElementById("password").value,

        })
    }
    let data = users;
    const redirectHandler =() =>{
        navigate('/profile',{state: {users}})
    }
    return(
        <>
             <div>
                 <h2>USER DEATILS</h2>
             <Lable>User-FullName</Lable>
             <InputField type="text" id="name" placeholder="Enter name" onChange={HandleChange}/>  
             <Lable>User-Email</Lable>
             <InputField type="email" id="email" placeholder="Enter email" onChange={HandleChange}  />
             <Lable>Password</Lable>
             <InputField type="password" id="password" placeholder="Password" onChange={HandleChange}  />  
             <button onClick={redirectHandler}> Submit</button>
         </div>
        </>
    )
}
export default LoginPage;