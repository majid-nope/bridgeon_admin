import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../async/userAsync";



const usersSlice = createSlice({
    name: "users",
    initialState: { users: [] },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {

            state.users = action.payload
        })
    }


})


export default usersSlice.reducer