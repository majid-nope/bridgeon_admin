import { axiosConfig } from "../../lib/axios";

const axios = axiosConfig("/api");

export const usersApis = {
  getAll: (limit, page) => axios.get(`users?limit=${limit}&page=${page}`),
};
