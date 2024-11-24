import React, { useState } from "react";

const PlaylistForm = ({ open, handleClose, getPlaylistId }) => {
  const [state, setState] = useState("");
  console.log("playlist form -> ", state);

  const handleSubmit = () => {
    if (!state) {
      alert("Invalid State");
    } else {
      getPlaylistId(state);
      setState("");
      handleClose();
    }
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            {/* Dialog Title */}
            <div className="border-b p-4">
              <h2 className="text-xl font-semibold">Add Playlist</h2>
            </div>
            {/* Dialog Content */}
            <div className="p-4">
              <p className="text-gray-600 mb-4">
                To add a playlist, you should input here the playlist link or
                ID. Otherwise, we can't provide you any playlist.
              </p>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Playlist Link or ID"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            {/* Dialog Actions */}
            <div className="flex justify-end border-t p-4">
              <button
                className="px-4 py-2 text-gray-500 hover:text-gray-700"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Add Playlist
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaylistForm;
