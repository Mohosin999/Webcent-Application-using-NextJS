"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";

const Profile = () => {
  const { user } = useUser();
  return (
    <div className="m-20">
      <h1>{user?.publicMetadata?.credit}</h1>
    </div>
  );
};

export default Profile;
