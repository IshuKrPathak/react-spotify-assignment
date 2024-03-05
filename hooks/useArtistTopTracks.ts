// Importing the necessary hooks and dependencies
import { useAppSelector } from "hooks"; 
import { useEffect, useState } from "react"; 
import spotify from "spotify";

// Defining the structure of a Track object
interface Track {
  id: string;
  name: string;
  image: string;
  duration_ms: number;
  uri: string;
  offset: number;
}

// Custom hook to fetch and return top tracks of an artist
export default function useArtistTopTracks(artist_id: string) {
  
  const token = useAppSelector((state) => state.auth.access_token); 
  
  // State to store the fetched tracks
  const [tracks, setTracks] = useState<Track[]>(); 
  

  useEffect(() => {
    const fetchArtistTopTracks = async () => {
      // Fetching top tracks using the Spotify API
      const res = await spotify.getArtistTopTracks(artist_id); 
      let totalTopTracks: Track[] = [];
      
      // Mapping the fetched tracks to the Track interface structure
      totalTopTracks = res.tracks.map((track: any) => ({
        id: track.id,
        name: track.name,
        image: track.album.images[0].url,
        duration_ms: track.duration_ms,
        uri: track.album.uri,
        offset: track.track_number,
      }));
      
     
      setTracks(totalTopTracks);
    };
    
    // Fetch top tracks only if artist_id is provided
    if (artist_id) fetchArtistTopTracks();
  }, [token, artist_id]); 

 
  return tracks;
}
