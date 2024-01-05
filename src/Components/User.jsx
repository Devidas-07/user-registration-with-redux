import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Actions";
import { useFormik } from "formik";

const initialValues={
    fname:"",
    lname:"",
    email:"",
    password:""

}


const User = ()=>{
   
   

   const dispatch = useDispatch();

   const userList = useSelector((state)=>state.userReducer.userList);

   console.log("UserList :",userList)


   const{values, handleBlur, handleChange,handleSubmit}=useFormik({
    initialValues:initialValues,
    onSubmit:(values)=>{
        console.log("values are :",values)
    }
    
})
const [userDetails,setUserDetails]= useState({values})
   console.log("first Name is",userDetails)
   

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name:</label>
                <input type="text" id="fname" name="fname" value={values.fname}  onChange={handleChange}></input>
                <br></br>
                <label htmlFor="lname">Last Name:</label>
                <input type="text" id="lname" name="lname" value={values.lname} required onChange={handleChange}></input>
                <br></br>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={values.email} required onChange={handleChange}></input>
                <br></br>
                <label htmlFor="pass">Password</label>
                <input type="password" id="pass" name="password"  value={values.password} onChange={handleChange}></input>
                <br></br>
                <button type="submit">Submit</button>
                <button type="submit" onClick={()=>dispatch(addUser(values))}>Add User</button>
            </form>
            
                <h2>User's  Information </h2>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                    {userList.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.userDetails.fname}</td>
                            <td>{user.userDetails.lname}</td>
                            <td>{user.userDetails.email}</td>
                            <td>{user.userDetails.password}</td>
                        </tr>
                    ))}
                </tbody>
            
            
            
        </>
    )
}
export default User