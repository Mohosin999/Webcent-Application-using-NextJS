"use client";

import { useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const { user } = useUser();

  const addMetadata = async () => {
    try {
      // Update public metadata
      await user.update({
        publicMetadata: {
          credits: 100, // Add credits
        },
      });
      console.log("Metadata added successfully!");
    } catch (error) {
      console.error("Error adding metadata:", error);
    }
  };

  return <button onClick={addMetadata}>Add Metadata</button>;
};

export default Dashboard;
