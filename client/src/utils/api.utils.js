import { appConfig } from "../config/config";

const GENERIC_ERROR = "Something went wrong";

class CustomError extends Error {
  constructor(message, errors) {
    super(message);
    this.errors = errors;
  }
}

const createUrlParams = params => {
  const esc = encodeURIComponent;
  const query = Object.keys(params)
    .map(k => esc(k) + "=" + esc(params[k]))
    .join("&");

  return query;
};

const handleResponse = response => {
  const contentType = response.headers.get("content-type");
  const isJson = contentType && contentType.indexOf("application/json") !== -1;

  if (response.ok) {
    if (isJson) {
      return response.json();
    }
    return response.text();
  } else {
    if (isJson) {
      return response.json().then(json => {
        const error = new CustomError(
          json.description || json.error_description || GENERIC_ERROR,
          json.errors
        );
        return Promise.reject(Object.assign(error, { response }));
      });
    } else {
      throw new Error(GENERIC_ERROR);
    }
  }
};

export const apiCall = async (
  requestType,
  url,
  customHeaders,
  requestBody,
  requestParams
) => {
  let headers = {
    ...customHeaders,
    "Content-type": "application/json"
  };

  const { xsrfToken, xsrfTokenHeader } = appConfig;

  if (xsrfToken && xsrfTokenHeader) {
    headers[xsrfTokenHeader] = xsrfToken;
  }

  const requestOptions = {
    method: requestType,
    headers,
    body: requestBody ? JSON.stringify(requestBody) : undefined
  };
  if (requestParams) {
    const urlParams = createUrlParams(requestParams);
    url = `${url}?${urlParams}`;
  }

  return fetch(url, requestOptions).then(handleResponse);
};
