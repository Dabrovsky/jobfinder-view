import axios from "axios";
import { vi, describe, test, expect, beforeEach } from "vitest";
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

  test("should create an axios instance", () => {
    expect(instance).toHaveProperty("defaults");
  });

  test("should pass headers correctly to axios instance", () => {
    expect(instance.defaults.headers).toMatchObject(headers);
  });
});
