import { BrowserRouter, Route, Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="container pt-10 sm:pt-16 mx-auto">
      <div className="flex flex-col justify-between items-center pb-10 px-4 lg:px-0 sm:flex-row">
        <ul className="flex flex-row space-x-5">
          <li>
            <a href="/" className="text-xs text-gray-600 transition-colors duration-300 hover:text-pink-800 hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="text-xs text-gray-600 transition-colors duration-300 hover:text-pink-800 hover:underline">
              Cookie Settings
            </a>
          </li>
          <li>
            <Link
                to="/changelog"
                className="text-xs text-gray-600 transition-colors duration-300 hover:text-pink-800 hover:underline"
            >
            Changelog</Link>
          </li>
        </ul>
        <p className="text-xs text-gray-500 pt-2 sm:pt-0">
          v1.0.0
        </p>
      </div>
    </div>
  );
};
