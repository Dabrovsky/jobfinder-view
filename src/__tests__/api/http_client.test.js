import axios from "axios";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { httpClient } from "@/api/http_client";

vi.mock("axios");

describe("httpClient", () => {
  let instance;
  const headers = {
    "Content-Type": "application/json"
  };

  beforeEach(() => {
    axios.create.mockReturnValue({ defaults: { headers } });

    instance = httpClient();
  });

  it("should create an axios instance", () => {
    expect(instance).toHaveProperty("defaults");
  });

  it("should pass headers correctly to axios instance", () => {
    expect(instance.defaults.headers).toMatchObject(headers);
  });
});
