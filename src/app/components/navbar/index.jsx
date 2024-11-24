"use client";
import React, { useState } from "react";
import PlaylistForm from "../playlist-form";

const Navbar = ({ getPlaylistById }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPlaylistId = (playlistId) => {
    console.log("navbar function called");
    getPlaylistById(playlistId);
    console.log("navbar function getPlaylistById", getPlaylistById(playlistId));
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 shadow-lg py-4 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo and Text */}
        <div>
          <h1 className="text-2xl font-bold">Clean YouTube</h1>
          <p className="text-gray-600 text-sm">By Mohosin Hasan Akash</p>
        </div>
        {/* Add Playlist Button */}
        <button
          onClick={handleClickOpen}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Playlist
        </button>
      </div>

      {/* Playlist Form Dialog */}
      <PlaylistForm
        open={open}
        handleClose={handleClose}
        getPlaylistId={getPlaylistId}
      />
    </header>
  );
};

export default Navbar;
