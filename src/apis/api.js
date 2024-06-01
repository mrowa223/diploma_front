/* eslint-disable prettier/prettier */
import Cookies from "universal-cookie";

const url = "https://65b2168e9bfb12f6eafccb68.mockapi.io";

const api = async (route, request) => {
  const cookies = new Cookies();
  if (!route.contains("public")) {
    const token = cookies.get("Authorization");
    request.headers = {
      Authorization: token,
    };
  }
  const response = await fetch(url + route, request);
  if (!response.ok) {
    console.log(
      `Request failed: ${response.status} ${response.statusText} ${response.text}`,
    );
    throw new Error(
      `Request failed: ${response.status} ${response.statusText} ${response.text}`,
    );
  }
  const responseJson = await response.json();
  if (responseJson.token)
    cookies.set(
      "Authorization",
      `Bearer ${responseJson.token}`,
      { path: "/" },
    );
  return await response.json();
};

export default api;
