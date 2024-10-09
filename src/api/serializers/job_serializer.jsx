function JobSerializer(data) {
  const response = {
    "external_slug": data.attributes.external_slug,
    "external_source": data.attributes.external_source,
    "title": data.attributes.title,
    "category": data.attributes.category,
    "company_logo": data.attributes.company_logo,
    "company_name": data.attributes.company_name,
    "seniority_level": data.attributes.seniority_level,
    "salary": salaryRange(data.attributes.salary_range, data.attributes.salary_currency),
    "tags": data.attributes.tags,
    "remote": data.attributes.remote
  }

  return response;
}

function salaryRange(salaryRange, salaryCurrency) {
  if (!salaryRange) {
    return "-";
  }

  return `${salaryRange} ${salaryCurrency}`;
}

export default JobSerializer;
