import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
    name : "experience",
    initialState : {
       
        addExperience : false,
    },
    reducers : {
       
        toggleExperience : (state)=>{
            state.addExperience = !state.addExperience
        }
    }
})

export const {postExperience, toggleExperience} = experienceSlice.actions;
export default experienceSlice.reducer

