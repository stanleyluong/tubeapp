import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    part: "snippet",
    maxResults: 20,
    key: process.env.REACT_APP_API_KEY,
  },
});
