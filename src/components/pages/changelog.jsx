import React from "react";

const changelogData = [
  {
    version: "1.2.0",
    date: "2024-09-01",
    changes: [
      { type: "Added", description: "Dark mode support for the entire application." },
      { type: "Fixed", description: "Resolved an issue where the navbar would collapse unexpectedly on mobile." },
      { type: "Improved", description: "Enhanced performance of data fetching in the dashboard." },
    ],
  },
  {
    version: "1.1.0",
    date: "2024-08-15",
    changes: [
      { type: "Added", description: "New user profile page with customizable settings." },
      { type: "Changed", description: "Updated the UI for the notifications panel." },
      { type: "Removed", description: "Deprecated the old messaging module." },
    ],
  },
  {
    version: "1.0.0",
    date: "2024-08-01",
    changes: [
      { type: "Initial release", description: "Launched the first version of the product." },
    ],
  },
];

const Changelog = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Changelog</h1>
      <div className="space-y-8">
        {changelogData.map((release, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-blue-600">
                Version {release.version}
              </h2>
              <p className="text-gray-500">{release.date}</p>
            </div>
            <ul className="space-y-2">
              {release.changes.map((change, i) => (
                <li key={i} className="flex items-start">
                  <span
                    className={`inline-block w-24 font-semibold mr-4 ${
                      change.type === "Added"
                        ? "text-green-500"
                        : change.type === "Fixed"
                        ? "text-yellow-500"
                        : change.type === "Improved"
                        ? "text-blue-500"
                        : change.type === "Changed"
                        ? "text-orange-500"
                        : change.type === "Removed"
                        ? "text-red-500"
                        : "text-gray-500"
                    }`}
                  >
                    {change.type}:
                  </span>
                  <span>{change.description}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Changelog;
