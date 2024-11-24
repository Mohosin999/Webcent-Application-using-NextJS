"use client";
import React from "react";
import Navbar from "./components/navbar";
import usePlaylists from "./hooks/usePlaylists";
import PlaylistCardItem from "./components/playlist-card-item";

const Home = () => {
  const { playlists, getPlaylistById } = usePlaylists();
  console.log("playlist - ", playlists);

  const playlistArray = Object.values(playlists);

  return (
    <div>
      <Navbar getPlaylistById={getPlaylistById} />

      {playlistArray.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {playlistArray.map((item) => (
            <div key={item.playlistId} className="mb-4">
              <PlaylistCardItem
                playlistThumbnail={item.playlistThumbnail}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
