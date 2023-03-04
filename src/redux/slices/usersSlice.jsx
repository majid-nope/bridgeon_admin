import { createSlice } from "@reduxjs/toolkit";
import { getUsers, attendance } from "../async/userAsync";



const usersSlice = createSlice({
    name: "users",
    initialState: { users: [], total: 0, status: { user: "", attendance: "" } },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {

            state.status.user = "fulfilled"
            state.total = action.payload.total
            state.users = action.payload.data

        })
        builder.addCase(getUsers.pending, (state, action) => {
            state.status.user = "pending"

        })
        builder.addCase(attendance.pending, (state, action) => {
            state.status.attendance = "pending"
        })
        builder.addCase(attendance.rejected, (state, action) => {
            state.status.attendance = "rejected"
        })
        builder.addCase(attendance.fulfilled, (state, action) => {
            state.status.attendance = "fulfilled"
        })
    }


})


export default usersSlice.reducer