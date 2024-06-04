import Cookies from "universal-cookie";

const api = async (route, request) => {
  const cookies = new Cookies();

  // Adding Authorization Bearer from cookies, if route is not public
  if (!route.includes("public")) {
    const token = cookies.get("Authorization");
    request.headers = {
      Authorization: token,
    };
  }

  // Request processing
  console.log(request);
  const response = await fetch(route, request);
  if (!response.ok) {
    throw new Error(
      `Request failed: ${response.status} ${response.statusText} ${response.text}`,
    );
  }

  // Response processing, saving token into cookies
  const responseJson = await response.json();
  if (responseJson.token)
    cookies.set(
      "Authorization",
      `Bearer ${responseJson.token}`,
      { path: "/" },
    );

  return responseJson;
};

export default api;
