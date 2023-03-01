import axios from "axios";

export const axiosConfig = (path) =>
  axios.create({ baseURL: `${process.env.REACT_APP_SERVER_URL}${path}` });
