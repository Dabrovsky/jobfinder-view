import ApiClient from "@/api/api_client";
import JobSerializer from "@/api/serializers/job_serializer";

class ApiProvider {
  constructor() {
    this.api_version = "v1";
    this.api_client = new ApiClient();
  }

  async getJobs(params = {}) {
    const response = await this.api_client.get(`/api/${this.api_version}/jobs`, params);
    const serialized = response.data.map(data => JobSerializer(data));

    return serialized;
  }
}

export default ApiProvider;
