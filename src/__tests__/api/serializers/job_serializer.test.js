import { describe, it, expect, beforeEach } from "vitest";
import JobSerializer from "../../../api/serializers/job_serializer";

describe("JobSerializer", () => {
  let data, expected_data;

  beforeEach(() => {
    data = {
      attributes: {
        title: "Software Engineer",
        image: "avatar.jpg",
        company_name: "Tech Inc.",
        category: "Backend",
        seniority: "Mid",
        salary: {
          min: 10000.0,
          max: 20000.0,
          currency: "USD"
        },
        tags: ["tag"],
        remote: true
      }
    };

    expected_data = {
      title: "Software Engineer",
      image: "avatar.jpg",
      company_name: "Tech Inc.",
      category: "Backend",
      seniority: "Mid",
      salary: "USD 10,000 - 20,000",
      tags: ["tag"],
      remote: true
    }
  });

  it("should serialize the data with the given attributes", () => {
    const serialized_data = JobSerializer(data);

    expect(serialized_data).toEqual(expected_data);
  });

  it("should serialize only the whitelisted attributes", () => {
    const extra_data = { ...data, ...{ extra: "Extra field" } };
    const serialized_data = JobSerializer(extra_data);

    expect(serialized_data).toEqual(expected_data);
  });
});
