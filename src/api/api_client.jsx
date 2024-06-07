import { httpClient } from "./http_client";

class ApiClient {
  get(endpoint, queryParams = {}) {
    const params = new URLSearchParams();

    Object.entries(queryParams).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => params.append(`${key}[]`, v.toString()));
      } else {
        params.append(key, value.toString());
      }
    });

    const endpointWithParams = [endpoint, params.toString()].filter(Boolean).join("?");

    const response = httpClient().get(endpointWithParams)
      .then(response => response)
      .catch(error => {
        throw error;
      });

    return response;
  }
}

export default ApiClient;
