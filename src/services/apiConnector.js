import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL;

export const axiosInstance = axios.create({
  // baseURL: BASE_URL,
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  // console.log("✅ Calling API:", url);
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};
