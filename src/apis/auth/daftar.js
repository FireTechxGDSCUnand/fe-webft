const daftar = async (username, email, password, password_confirmation) => {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");

  const formdata = new FormData();
  formdata.append("username", username);
  formdata.append("email", email);
  formdata.append("password", password);
  formdata.append("password_confirmation", password_confirmation);
  
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow"
  };

  try {
    const url = `${import.meta.env.VITE_API_BASE_URL}/register`;

    const response = await fetch(url, requestOptions);

    
    const result = await response.json();

    return result;
  } catch (error) {
    console.log("Fetch error:", error);
    throw error;
  }
};

export default daftar;
