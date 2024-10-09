import { Link } from "react-router-dom";

function Pagination(props) {
  const { pagination } = props?.pagination;
  const total_pages = Math.ceil(pagination?.total_items / pagination?.per_page);

  return (
    <div className="container pt-3 flex justify-center">
      <div className="w-full flex items-center justify-center border-t border-gray-200">
        <div className="sm:flex hidden">
          {Array.from({ length: total_pages }, (_, page) =>
            (page+=1) === pagination?.current_page ?
              <a className="text-sm font-medium leading-none cursor-pointer text-pink-800 border-t border-pink-800 pt-3 mr-4 px-2" key={page}>{page}</a>
            :
            <Link key={page}
                to={`/?page=${page}`} className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-pink-800 border-t border-transparent hover:border-pink-800 pt-3 mr-4 px-2">{page}</Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Pagination;
