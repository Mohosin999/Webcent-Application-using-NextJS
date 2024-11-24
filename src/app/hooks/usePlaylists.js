import { useState } from "react";
import getPlaylist from "../api";

/**
 * A custom hook for managing YouTube playlists, including fetching playlists by ID,
 * handling recent and favorite playlists, and tracking loading and error states.
 *
 * @returns {Object} - An object containing playlist data, error/loading states, and helper methods.
 */
const usePlaylists = () => {
  // State for storing playlists, recent playlists, and favorite playlists
  const [state, setState] = useState({
    playlists: {},
    recentPlaylists: [],
    favorite: [],
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * Fetches a playlist by its ID and updates the state.
   *
   * @param {string} playlistId - The ID of the playlist to fetch.
   * @param {boolean} [force=false] - If true, forces a fresh fetch from the API.
   */
  const getPlaylistById = async (playlistId, force = false) => {
    // Avoid fetching if playlist exists and force is not enabled
    if (state.playlists[playlistId] && !force) {
      return;
    }

    setLoading(true); // Set loading state to true during the API call

    try {
      // Fetch the playlist from the API
      const playlist = await getPlaylist(playlistId);
      setError("");
      // Update the state
      setState((prev) => ({
        ...prev,
        playlists: {
          ...prev.playlists,
          [playlistId]: playlist, // Add or update the fetched playlist in state
        },
      }));
    } catch (e) {
      // Handle errors and update the error state
      setError(e.response?.data?.error?.message || "Something Went Wrong");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  /**
   * Adds a playlist ID to the recent playlists list.
   *
   * @param {string} playlistId - The ID of the playlist to add to recent playlists.
   */
  const addToRecent = (playlistId) => {
    setState((prev) => ({
      ...prev,
      recentPlaylists: [...prev.recentPlaylists, playlistId],
    }));
  };

  /**
   * Adds a playlist ID to the favorite playlists list.
   *
   * @param {string} playlistId - The ID of the playlist to add to favorite playlists.
   */
  const addToFavorite = (playlistId) => {
    setState((prev) => ({
      ...prev,
      favorite: [...prev.favorite, playlistId],
    }));
  };

  /**
   * Retrieves playlists from the state by an array of playlist IDs.
   *
   * @param {string[]} ids - An array of playlist IDs.
   * @returns {Array} - An array of playlist objects corresponding to the given IDs.
   */
  const getPlaylistsByIds = (ids = []) => {
    return ids.map((id) => state.playlists[id]); // Map IDs to playlist objects
  };

  // Return the playlists state, error/loading states, and helper functions
  return {
    playlists: state.playlists,
    recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
    favorite: getPlaylistsByIds(state.favorite),
    error,
    loading,
    getPlaylistById,
    addToRecent,
    addToFavorite,
  };
};

export default usePlaylists;
