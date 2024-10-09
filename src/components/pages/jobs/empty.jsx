function NoRecordsFound() {
  return (
    <div className="flex items-center justify-center text-center bg-gray-200">
      <div className="container px-4 lg:px-0">
        <div className="flex bg-gray-100 py-6 px-8 my-8 text-sm text-gray-500 w-full rounded" role="alert">
          <div className="flex flex-col items-start text-left">
            <span className="font-medium text-gray-700">No records Found!</span> Sorry, we couldn&apos;t find any record that match your search criteria
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoRecordsFound;
