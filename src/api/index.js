import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://t-connect-backend.koreasouth.cloudapp.azure.com/movies/"
    : "http://localhost:5000/";

const myAxios = axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
  },
});

export async function postRequest(url, body) {
  try {
    const res = await myAxios.post(url, body);
    return {
      hasError: false,
      data: res.data,
    };
  } catch (err) {
    return {
      hasError: true,
      data: JSON.stringify(err),
    };
  }
}

export async function getRequest(url) {
  try {
    const res = await myAxios.get(url);
    return {
      hasError: false,
      data: res.data,
    };
  } catch (err) {
    return {
      hasError: true,
      data: JSON.stringify(err),
    };
  }
}
