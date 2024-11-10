import ApiClient from "@/api/api_client";

class ApiProvider {
  constructor() {
    this.api_version = "v1";
    this.api_client = new ApiClient();
  }

  async getJobs(params = {}) {
    const response = await this.api_client.get(`/api/${this.api_version}/job_offers`, params);

    return response;
  }
}

export default ApiProvider;
