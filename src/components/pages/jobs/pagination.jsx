import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Pagination(props) {
  const location = useLocation();
  const { pagination } = props?.pagination;
  const total_pages = Math.ceil(pagination?.total_items / pagination?.per_page);

  if (total_pages <= 1) return (
    <div className="w-full py-4"></div>
  )

  const setPagePath = (page) => {
    const params = new URLSearchParams(location.search);

    if (params.size === 0) {
      return `/?page=${page}`;
    } else {
      params.set("page", page);
      return `/?${params.toString()}`;
    }
  }

  return (
    <div className="container pt-3 flex justify-center">
      <div className="w-full flex items-center justify-center border-t border-gray-200">
        <div className="sm:flex hidden">
          {Array.from({ length: total_pages }, (_, page) =>
            (page+=1) === pagination?.current_page ?
              <a className="text-sm font-medium leading-none cursor-pointer text-pink-800 border-t border-pink-800 pt-3 mr-4 px-2" key={page}>{page}</a>
            :
            <Link key={page} to={setPagePath(page)} className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-pink-800 border-t border-transparent hover:border-pink-800 pt-3 mr-4 px-2">{page}</Link>
          )}
        </div>
      </div>
    </div>
  )
}

Pagination.propTypes = {
  pagination: PropTypes.shape({
    total_items: PropTypes.number,
    per_page: PropTypes.number,
    current_page: PropTypes.number,
  }).isRequired,
};

export default Pagination;
