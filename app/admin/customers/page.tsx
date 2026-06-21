"use client";

import { useEffect, useState } from "react";

export default function CustomersPage() {

  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    setUsers(
      JSON.parse(localStorage.getItem("users") || "[]")
    );
  }, []);

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Customers
      </h1>

      <div className="space-y-4">

        {users.map((user) => (

          <div
            key={user.email}
            className="bg-[#121821] border border-white/10 rounded-xl p-6 flex justify-between"
          >

            <div>

              <h2 className="font-bold">
                {user.name}
              </h2>

              <p>{user.email}</p>

            </div>

            <span className="text-orange-500">
              {user.role}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}