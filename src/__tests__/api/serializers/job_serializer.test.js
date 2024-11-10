import { describe, test, expect, beforeEach } from "vitest";
import JobSerializer from "@/api/serializers/job_serializer";

describe("JobSerializer", () => {
  let data, expected_data;

  beforeEach(() => {
    data = {
      attributes: {
        external_slug: "slug",
        external_source: "source",
        title: "Software Engineer",
        company_logo: "avatar.jpg",
        company_name: "Tech Inc.",
        category: "Backend",
        seniority_level: "Mid",
        salary_range: "10,000 - 20,000",
        salary_currency: "USD",
        tags: ["tag"],
        remote: true
      }
    };

    expected_data = {
      external_slug: "slug",
      external_source: "source",
      title: "Software Engineer",
      company_logo: "avatar.jpg",
      company_name: "Tech Inc.",
      category: "Backend",
      seniority_level: "Mid",
      salary: "10,000 - 20,000 USD",
      tags: ["tag"],
      remote: true
    }
  });

  test("should serialize the data with the given attributes", () => {
    const serialized_data = JobSerializer(data);

    expect(serialized_data).toEqual(expected_data);
  });

  test("should serialize only the whitelisted attributes", () => {
    const extra_data = { ...data, ...{ extra: "Extra field" } };
    const serialized_data = JobSerializer(extra_data);

    expect(serialized_data).toEqual(expected_data);
  });
});
