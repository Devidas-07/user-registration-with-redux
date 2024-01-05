export  const addUser= (userData)=>{
    console.log("in addUser function")
    console.log("user data is", userData);
    return{
        type:"addUser",
        payload:{
            id:new Date().getTime().toString(),
            userData:userData
        }
    }
}
