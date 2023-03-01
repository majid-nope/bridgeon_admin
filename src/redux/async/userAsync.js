import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersApis } from "../apis/userApis";

export const getUsers = createAsyncThunk("users/get", async ({page,limit}) => {
  try {
  
    const response = await usersApis.getAll(limit, page);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});
