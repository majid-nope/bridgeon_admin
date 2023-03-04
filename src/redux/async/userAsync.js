import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersApis } from "../apis/userApis";

export const getUsers = createAsyncThunk(
  "users/get",
  async ({ page, limit, batch }) => {
    try {
      const response = await usersApis.getAll(limit, page, batch);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const attendance = createAsyncThunk(
  "users/attendance",
  async (data) => {
    try {
      const response = await usersApis.updateAttendance(data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
