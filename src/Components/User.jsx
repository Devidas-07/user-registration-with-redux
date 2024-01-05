import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Actions/actions";

const User = ()=>{
   const [fname,setFname]= useState("")
   console.log("first Name is",fname)
   const [lname,setLname]= useState("")
   const [email,setEmail]= useState("")
   const [password, setPassword] = useState("")

   const dispatch = useDispatch();

   const userList = useSelector((state)=>state.userReducer.userList);
   console.log("UserList :",userList)

   

    return(
        <>
            <form>
                <label htmlFor="fname">First Name:</label>
                <input type="text" id="fname" value={fname}  onChange={(e)=>setFname(e.target.value)}></input>
                <br></br>
                {/* <label htmlFor="lname">Last Name:</label>
                <input type="text" id="lname" required onChange={(e)=>setLname(e.target.value)}></input>
                <br></br>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required onChange={(e)=>setEmail(e.target.value)}></input>
                <br></br>
                <label htmlFor="pass">Password</label>
                <input type="password" required onChange={(e)=>setPassword(e.target.value)}></input>
                <br></br> */}
                <button onClick={()=>dispatch(addUser(fname))&& addUser("")}>Add User</button>
            </form>
            <div>
                <h2>User Information </h2>
                <div>
                {userList.map((listItem)=>{
                    return(
                        <div>
                            <li style={{listStyleType:"none"}} key={listItem.id}>{listItem.userData}</li>
                        </div>
                    )
                })}
                </div>
            </div>
            
            
        </>
    )
}
export default User