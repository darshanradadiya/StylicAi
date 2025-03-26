import { useState } from "react";

export default function AdminGarments() {
  // Dummy Garment Data (Since No Backend)
  const [garments, setGarments] = useState([
    { id: 1, name: "Urban Jacket", status: "pending" },
    { id: 2, name: "Casual T-Shirt", status: "approved" },
    { id: 3, name: "Formal Blazer", status: "pending" },
  ]);

  const approveGarment = (id) => {
    setGarments(garments.map(g => g.id === id ? { ...g, status: "approved" } : g));
  };

  const rejectGarment = (id) => {
    setGarments(garments.map(g => g.id === id ? { ...g, status: "rejected" } : g));
  };

  return (
    <div className="text-gray-700 text-lg">
      <h3 className="text-xl font-semibold mb-4">Garment Management</h3>
      <ul>
        {garments.map((garment) => (
          <li key={garment.id} className="p-2 border-b flex justify-between">
            {garment.name} -{" "}
            <span
              className={
                garment.status === "approved"
                  ? "text-green-500"
                  : garment.status === "rejected"
                  ? "text-red-500"
                  : "text-yellow-500"
              }
            >
              {garment.status}
            </span>
            <div>
              {garment.status === "pending" && (
                <>
                  <button
                    onClick={() => approveGarment(garment.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => rejectGarment(garment.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Reject
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}