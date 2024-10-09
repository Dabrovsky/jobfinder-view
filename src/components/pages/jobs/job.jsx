/* eslint-disable react/prop-types */

function Job({ job }) {
  return (
    <a className="flex p-3 min-h-24 bg-white border-b border-gray-200 hover:bg-gray-100 transition" href={job.external_slug} target="_blank" title={job.title}>
      <div className="flex justify-center items-center min-w-20 sm:min-w-28">
        <img className="max-w-16 max-h-11" src={job.company_logo} alt="" />
      </div>
      <aside className="flex flex-col flex-1 px-2 overflow-hidden">
        <div className="flex justify-between md:items-center flex-col md:flex-row">
          <div className="max-w-screen-sm">
            <p className="text-sm md:text-md lg:text-base text-gray-900 truncate">{job.title}</p>
          </div>
          <span className="text-xs sm:text-sm text-pink-800">{job.salary}</span>
        </div>
        <p className="text-sm text-gray-700 font-light truncate">{job.company_name}</p>
        <div className="flex justify-between md:items-center mt-2 flex-col md:flex-row">
          <div className="sm:mb-2 md:mb-0 truncate">
            {job.tags.map((tag, index) => (
              <div key={index} className="sm:mr-1 text-xs inline-flex sm:items-center lowercase sm:px-2 py-1 text-gray-700 sm:border sm:bg-white [&:last-child>.foo]:hidden">
                {tag}
                <span className="px-1 sm:hidden foo">-</span>
              </div>
            ))}
          </div>
          <div className="text-xs text-gray-500">
            {job.external_source}
          </div>
        </div>
      </aside>
    </a>
  );
}

export default Job;
