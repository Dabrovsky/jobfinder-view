import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Jobspage from "@/components/pages/jobs/jobspage";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { cleanUpEntries, deepEqual } from "@/helpers/utils";

const Mainpage = () => {
  const location = useLocation();
  const prevFilters = useRef();

  const getFilters = useCallback(() => {
    const params = new URLSearchParams(location.search);
    const object = {};
    const arrayParams = ["keywords", "contracts", "technologies", "seniority"];

    params.forEach((value, key) => {
      if (arrayParams.includes(key)) {
        object[key] = value?.split(",").filter(Boolean);
      } else {
        object[key] = value;
      }
    });

    return object;
  }, [location.search]);

  const [filters, setFilters] = useState(getFilters);

  useEffect(() => {
    const { page, ...currentFilters } = getFilters();
    let selectedFilters = cleanUpEntries(currentFilters);

    if (deepEqual(prevFilters.current, currentFilters)) {
      selectedFilters = Object.assign({ "page": page }, currentFilters);
    }

    prevFilters.current = currentFilters;
    setFilters(selectedFilters);
  }, [getFilters]);

  return (
    <div>
      <Header params={filters} />
      <Jobspage params={filters} />
      <Footer />
    </div>
  );
};

export default Mainpage;
