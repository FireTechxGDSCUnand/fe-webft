const login = async (username, password) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const formdata = new FormData();
  formdata.append("username", username);
  formdata.append("password", password);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    const url = `${import.meta.env.VITE_API_BASE_URL}api/login`;

    const response = await fetch(url, requestOptions);

    const result = await response.json();
    const token = result.token;

    if (token) {
      localStorage.setItem("authToken", token);
    }
    return result;
  } catch (error) {
    console.log("Fetch error:", error);
    throw error;
  }
};

export default login;
