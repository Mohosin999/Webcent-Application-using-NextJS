// "use client";

// import { useUser } from "@clerk/nextjs";

// const Dashboard = () => {
//   const { user } = useUser();
//   console.log(user);

//   const addMetadata = () => {
//      user?.credit += 10
//   };

//   return (
//     <div className="m-20">
//       <h1>{user?.fullName}</h1>
//       <h3>Your Credit is - {user?.publicMetadata?.credit}</h3>
//       <button onClick={addMetadata}>Increase Your Credit</button>
//     </div>
//   );
// };

// export default Dashboard;

"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";

const Dashboard = () => {
  const { user } = useUser();
  const [credit, setCredit] = useState(user?.publicMetadata?.credit || 0);

  const addMetadata = async () => {
    try {
      const response = await fetch("/api/update-metadata", {
        method: "POST", // Correct HTTP method
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          credit: 100, // Example body data
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Metadata Updated Successfully:", result);
    } catch (error) {
      console.error("Error updating metadata:", error);
    }
  };

  return (
    <div className="m-20">
      <h1>{user?.fullName}</h1>
      <h3>Your Credit is - {credit}</h3>
      <button onClick={addMetadata}>Increase Your Credit</button>
    </div>
  );
};

export default Dashboard;
