"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchAllUsers() {
      const response = await fetch("https://dummyjson.com/users", {
        method: "GET",
      });

      const result = await response.json();
      if (result && result.users) setUsers(result.users);
    }

    fetchAllUsers();
    setLoading(false);
  }, []);

  console.log(users);
  if (loading) return <h1>Data is loading! Please Wait</h1>;
  return (
    <>
      <h1>Users List:</h1>

      <ul className="list-disc">
        {users && users.length ? (
          users.map(user => 
            <li key={user.id}>
              <h1>
                {user.firstName} {user.lastName}
              </h1>
            </li>
          )
        ) : (
          <h1>No User found</h1>
        )}
      </ul>
    </>
  );
}
