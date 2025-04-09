import axios from "axios";
import { baseURL } from "../utils/SummaryApi";

const Axios = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    // Add other common headers here, like Authorization if needed
  },
});

export default Axios;