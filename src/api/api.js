const checkHttpStatus = response => {
  if (response.ok) {
    return response;
  } else {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

const parseJson = response => {
  try {
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchWrapper = async (url, method = "GET") => {
  const options = {
    url,
    method
  };
  return await fetch(url, options)
    .then(checkHttpStatus)
    .then(parseJson)
    .then(data => {
      return data;
    })
    .catch(error => error);
};
