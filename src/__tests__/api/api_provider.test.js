import { describe, it, expect } from "vitest";
import ApiProvider from "../../api/api_provider";

describe("ApiProvider", () => {
  it("should throw an error if the request fails", async () => {
    const apiProvider = new ApiProvider();

    await expect(apiProvider.getJobs()).rejects.toThrow("ECONNREFUSED");
  });
});
