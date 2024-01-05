export  const addUser= (userDetails)=>{
    console.log("in addUser function")
    console.log("user data is", userDetails);
    return{
        type:"addUser",
        payload:{
                userDetails   
            
        }
        
    }
}
