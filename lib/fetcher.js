export async function fetcher(...args) {
  try {
    const response = await fetch(...args);

    const data = await response.json();

    if (response.status === 200) {
      return data;
    }

    const error = new Error(response.statusText);
    error.response = response;
    error.data = data;
    throw error;
  } catch (error) {
    if (!error.data) {
      error.data = { error: true, message: error.message };
    }
    throw error.data;
  }
}

export async function getFetch(endpoint, token) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  if (token) headers["Data-Token"] = token;
  try {
    const response = await fetcher(process.env.API_URL + endpoint, {
      method: "GET",
      headers,
      mode: "cors",
    });
    return response;
  } catch (error) {
    return error;
  }
}
