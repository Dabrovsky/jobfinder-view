import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import ApiProvider from "@/api/api_provider";
import JobSerializer from "@/api/serializers/job_serializer";
import Error from "./error";
import NoRecordsFound from "./empty";
import Job from "./job";
import Pagination from "./pagination";
import { deepEqual } from "@/helpers/utils";

function Jobspage(props) {
  const API_ERROR = useMemo(() => ({
    status: "500",
    message: "Something went wrong"
  }), []);

  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [pagy, setPagy] = useState({});
  const [apiError, setApiError] = useState(API_ERROR);
  const prevParams = useRef();
  const initialMount = useRef(true);

  const fetchJobs = useCallback((params = {}) => {
    const apiProvider = new ApiProvider();

    apiProvider.getJobs(params)
      .then((response) => {
        const jobs = response.data.data.map(data => JobSerializer(data));

        setError(false);
        setJobs(jobs);
        setPagy(response.data?.meta);

        if (!jobs.length) {
          setEmpty(true);
        } else {
          setEmpty(false);
        }
      })
      .catch(error => {
        setError(true);
        setApiError(Object.assign({}, API_ERROR, error.response?.data));
      });
  }, [API_ERROR]);

  useEffect(() => {
    if (initialMount.current || !deepEqual(props.params, prevParams.current)) {
      fetchJobs(props.params);
      prevParams.current = props.params;
      initialMount.current = false;
    }
  }, [props.params, fetchJobs]);

  if (error) return <Error error={apiError} />;
  if (empty) return <NoRecordsFound />;

  return (
    <div className="flex flex-col gap-1 items-center min-h-full py-12 bg-gray-200 px-4 md:px-0">
      <div className="container bg-white w-full h-full rounded-t rounded-b overflow-hidden">
        {jobs.map((job, index) => (
          <Job key={index} job={job} />
        ))}
      </div>
      <Pagination pagination={pagy} />
    </div>
  );
}

Jobspage.propTypes = {
  params: PropTypes.object.isRequired,
};

export default Jobspage;
