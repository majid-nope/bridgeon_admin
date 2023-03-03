import { createSlice } from "@reduxjs/toolkit";
import { getUsers, updateAttendance } from "../async/userAsync";



const usersSlice = createSlice({
    name: "users",
    initialState: { users: [], total: 0 },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            console.log(action.payload);
            state.total = action.payload.total
            state.users = action.payload.data

        })
        builder.addCase(updateAttendance.fulfilled, (state, action) => {
        
        })
    }


})


export default usersSlice.reducer