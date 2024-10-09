import PropTypes from "prop-types";

function Error(props) {
  const { error } = props;

  return (
    <div className="flex flex-col gap-1 items-center justify-center min-h-full h-48 sm:h-96 py-4 bg-gray-200">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        <p className="text-6xl font-bold tracking-wider text-gray-400">{error.status}</p>
        <p className="text-gray-500 mt-2">Whoops, {error.message}</p>
      </div>
    </div>
  )
}

Error.propTypes = {
  error: PropTypes.object.isRequired,
};

export default Error;
