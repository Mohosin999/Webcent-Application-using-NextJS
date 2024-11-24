import React from "react";

const PlaylistCardItem = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
  playlistId,
}) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden m-4">
      {/* Thumbnail */}
      <img
        src={playlistThumbnail.url}
        alt={playlistTitle}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4 flex-1">
        <h3 className="text-lg font-semibold text-gray-900">
          {playlistTitle.length > 50
            ? `${playlistTitle.substr(0, 50)}...`
            : playlistTitle}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{channelTitle}</p>
      </div>

      {/* Actions */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center justify-center gap-2 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12c0-4.97-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9 9-4.03 9-9z"
            />
          </svg>
          Start Tutorial
        </button>
      </div>
    </div>
  );
};

export default PlaylistCardItem;
