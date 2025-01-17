import axios from "axios";

const client = axios.create({
  baseURL: "https://backend.botaplace.com/api",
});

export { client };
