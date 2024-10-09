import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import Dropable from "@/components/header/dropable";
import { CONTRACTS, TECHNOLOGIES, SENIORITY } from "@/constants/filter_attributes";
import { cleanUpEntries } from "@/helpers/utils";

function Header(props) {
  const [filters, setFilters] = useState({ ...props.params, keywords: props.params.keywords || "" });
  let [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setFilters(prevState => ({ ...prevState, ...props.params, keywords: props.params.keywords || "" }));
  }, [props.params]);

  const handleDropdownChange = currentState => {
    setFilters(prevState => Object.assign({}, prevState, currentState));
  };

  const handleKeywordsChange = (input) => {
    setFilters(prevState => ({
      ...prevState,
      keywords: input.target.value.replace(/[ ,.-]+/g, ",")
    }));
  };

  function handleSubmit(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendForm();
    }
  }

  const sendForm = () => {
    const { page, ...currentFilters } = filters;
    const params = new URLSearchParams(cleanUpEntries(currentFilters)).toString();
    setSearchParams(params);
  }

  return (
    <div className="bg-violet-900">
      <div className="container px-4 md:px-0 py-12 mx-auto">
        <h2 className="mb-8 font-sans text-4xl md:text-7xl font-bold tracking-normal text-white sm:text-6xl sm:leading-none">
          Jobs Board. <span className="text-base block sm:inline text-indigo-100 font-thin md:text-4xl tracking-normal">Find the job that fits you</span>
        </h2>
        <form className="flex flex-col w-full mb-4 md:flex-row">
          <div className="relative md:w-7/12 border-b-2 md:border-b-0 md:border-r-2 input-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-search pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-3" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            <input name="keywords" onInput={handleKeywordsChange} onKeyDown={handleSubmit} value={filters.keywords?.toString().replace(/[,]+/g, ", ")} placeholder="keywords: ex. cloud, admin" className="input px-4 py-3 pl-9 text-sm rounded-none md:rounded-l"></input>
          </div>

          <div className="grid w-full grid-cols-3">
            <Dropable options={{ items: CONTRACTS, placeholder: "Contract", key: "contracts" }} selected={filters.contracts} handleDropdownChange={handleDropdownChange}></Dropable>
            <Dropable options={{ items: TECHNOLOGIES, placeholder: "Technology", key: "technologies" }} selected={filters.technologies} handleDropdownChange={handleDropdownChange}></Dropable>
            <Dropable options={{ items: SENIORITY, placeholder: "Seniority", key: "seniority" }} selected={filters.seniority} handleDropdownChange={handleDropdownChange}></Dropable>
          </div>

          <button type="button" onClick={sendForm} className="flex items-center justify-center bg-violet-700 pl-8 pr-6 py-2 text-white text-xs group form-button md:rounded-r">
            Filter
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

Header.propTypes = {
  params: PropTypes.object.isRequired,
};

export default Header;
