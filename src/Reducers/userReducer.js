const initialUserState={
    userList:[]
}

 export const userReducer=(state=initialUserState,action)=>{
    console.log("User list is ",state.userList);
    console.log("initial User State",initialUserState)
    console.log("action is",action.payload)
    switch (action.type) {
        case "addUser":
            const {id, userData}=action.payload
            console.log("action.payload is",action.payload)
            return{
                ...state,
                userList:[
                    ...state.userList,
                {
                    id:id,
                    userData:userData
                }
            ]
            }
                    
            
        

            
    
        default:
            return state
            
    }

}
