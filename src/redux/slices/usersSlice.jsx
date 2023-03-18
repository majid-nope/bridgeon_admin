import { createSlice } from "@reduxjs/toolkit";
import { showNotification, updateNotification } from "@mantine/notifications";
import { getUsers, attendance, batch } from "../async/userAsync";
import CheckIcon from "@mui/icons-material/CheckCircle";
// import { Icon123 } from "@tabler/icons";

const usersSlice = createSlice({
    name: "users",
    initialState: { users: [], total: 0, status: { user: "", attendance: "" }, batch: [] },
    reducers: {
        clear(state) {
            state.users = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.status.user = "fulfilled";
            state.total = action.payload.total;
            state.users = action.payload.data;
        });
        builder.addCase(getUsers.pending, (state, action) => {
            state.status.user = "pending";
        });
        builder.addCase(attendance.pending, (state, action) => {
            showNotification({
                id: "load-data",
                loading: true,
                title: "Attendance",
                message: "Marking attendance please wait",
                autoClose: false,
                disallowClose: true,
            });
            state.status.attendance = "pending";
        });
        builder.addCase(attendance.rejected, (state, action) => {
            state.status.attendance = "rejected";
        });
        builder.addCase(attendance.fulfilled, (state, action) => {
            updateNotification({
                id: "load-data",
                color: "teal",
                title: "Today attendance finished",
                message: "Attendance successfully marked",
                icon: <CheckIcon />,
                autoClose: 6000,
            });
            state.status.attendance = "fulfilled";
        });

        builder.addCase(batch.fulfilled, (state, action) => {

            state.batch = action.payload
        })
    },
});

export default usersSlice.reducer;
export const { clear } = usersSlice.actions
