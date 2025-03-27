import { useState } from "react";

export default function AdminGarments() {
  const [garments, setGarments] = useState([
    { id: 1, name: "Urban Jacket", status: "pending" },
    { id: 2, name: "Casual T-Shirt", status: "approved" },
    { id: 3, name: "Formal Blazer", status: "pending" },
  ]);

  const approveGarment = (id) => {
    setGarments(
      garments.map((g) => (g.id === id ? { ...g, status: "approved" } : g))
    );
  };

  const rejectGarment = (id) => {
    setGarments(
      garments.map((g) => (g.id === id ? { ...g, status: "rejected" } : g))
    );
  };

  return (
    <div className="text-gray-700 text-lg">
      <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
        Garment Management
      </h3>
      <ul className="space-y-4">
        {garments.map((garment) => (
          <li
            key={garment.id}
            className="p-4 border rounded-lg flex flex-col md:flex-row justify-between items-center"
          >
            <span className="font-medium">{garment.name}</span>
            <span
              className={`${
                garment.status === "approved"
                  ? "text-green-500"
                  : garment.status === "rejected"
                  ? "text-red-500"
                  : "text-yellow-500"
              }`}
            >
              {garment.status}
            </span>
            {garment.status === "pending" && (
              <div className="flex space-x-2 mt-2 md:mt-0">
                <button
                  onClick={() => approveGarment(garment.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  Approve
                </button>
                <button
                  onClick={() => rejectGarment(garment.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Reject
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}