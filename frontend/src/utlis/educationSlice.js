import {createSlice} from "@reduxjs/toolkit"

const educationSlice = createSlice({

    name : "education",
    initialState : {
        addEducation : false,
    },
    reducers : {
        toggleEducation : (state) =>{
            state.addEducation = !state.addEducation
        }
    }
})

export const {postEducation,toggleEducation} = educationSlice.actions;
export default educationSlice.reducer;