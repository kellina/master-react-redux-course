import axios from "axios";

const KEY = "AIzaSyAYK6435yVzTiOELtHCV5jBL9DIycI2RJY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
