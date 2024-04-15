import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({

    name : "user",
    initialState : {
        
    },
    reducers : {
        postUser : (state,action) =>{
            return action.payload;
        }
    }
})s

export const {postUser} = userSlice.actions;
export default userSlice.reducer;