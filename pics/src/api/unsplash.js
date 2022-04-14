import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID djijew-inPArc_B_U0YmDRHGTeJcLqT_kPOu67e07DY",
  },
});
