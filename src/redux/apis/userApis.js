import { axiosConfig } from "../../lib/axios";

const axios = axiosConfig("/api");

export const usersApis = {
  getAll: (limit, page, batch) => {
    if (batch)
      return axios.get(`users?batch=${batch}&limit=${limit}&page=${page}`);
    else {
      return axios.get(`users?limit=${limit}&page=${page}`);
    }
  },
  updateAttendance: (data) => axios.put("users/attendance", data ),
};
