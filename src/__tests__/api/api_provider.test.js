import { describe, test, expect } from "vitest";
import ApiProvider from "@/api/api_provider";

describe("ApiProvider", () => {
  test("should throw an error if the request fails", async () => {
    const apiProvider = new ApiProvider();

    await expect(apiProvider.getJobs()).rejects.toThrow("ECONNREFUSED");
  });
});
