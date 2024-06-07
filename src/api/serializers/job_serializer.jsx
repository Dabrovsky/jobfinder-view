function JobSerializer(data) {
  const response = {
    "title": data.attributes.title,
    "image": data.attributes.image,
    "company_name": data.attributes.company_name,
    "category": data.attributes.category,
    "seniority": data.attributes.seniority,
    "salary": salaryRange(data.attributes.salary),
    "tags": data.attributes.tags,
    "remote": data.attributes.remote
  }

  return response;
}

function salaryRange(salary) {
  if (salary.min === 0 && salary.max === 0) {
    return "";
  }

  return `${salary.currency} ${salary.min.toLocaleString("en-US")} - ${salary.max.toLocaleString("en-US")}`;
}

export default JobSerializer;
