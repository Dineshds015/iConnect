import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name : "project",
    initialState : {
        
        addProject : false,
    },
    reducers : {
       
        toggleProject : (state)=>{
            state.addProject = !state.addProject
        }
    }
})
export const {postProject,toggleProject} = projectSlice.actions;
export default projectSlice.reducer