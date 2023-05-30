import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";

const App = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const getCurrentlyPlaying = async () => {
    const api = new SpotifyWebApi({
      clientId: "YOUR_CLIENT_ID",
      clientSecret: "YOUR_CLIENT_SECRET",
    });

    const response = await api.getCurrentlyPlaying();

    setCurrentlyPlaying(response);
  };

  useEffect(() => {
    getCurrentlyPlaying();
  }, []);

  return (
    <div>
      {currentlyPlaying && (
        <div>
          <h1>Currently Playing</h1>
          <p>Track: {currentlyPlaying.item.name}</p>
          <p>Progress: {currentlyPlaying.progressMs} ms</p>
        </div>
      )}
    </div>
  );
};

export default App;
