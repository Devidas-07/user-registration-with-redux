const initialUserState={
    userList:[]
}

 export const userReducer=(state=initialUserState,action)=>{
    console.log("User list is ",state.userList);
    console.log("initial User State",initialUserState)
    console.log("action is",action.payload)
    switch (action.type) {
        case "addUser":
            const {userDetails}=action.payload
            console.log("action.payload is",action.payload)
            console.log("user data in addUser switch case",userDetails)
            return{
                ...state,
                userList:[
                    ...state.userList,{userDetails}
                
            ]
            }
                    
            
        

            
    
        default:
            return state
            
    }

}
