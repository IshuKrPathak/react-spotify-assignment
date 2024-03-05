
import Topic from "./Topic";
import Reac, { useContext } from "react";
import HomeContext from "context";
import Head from "next/head"



export default function Home() {
  const context = useContext(HomeContext);

  return (
    <Reac.Fragment>
      <Head>
        <title>Spotify Assignment</title>
      </Head>
      <Topic
        title="Recently Played"
        sub_title="Your soonest plays"
        tracks={context.recentlyTracks}
        type="track"
        playlists={[]}
        albums={[]}
      />
      <Topic
        title="Album"
        sub_title="Our suggestions for you"
        tracks={[]}
        albums={context.newRelease}
        type="album"
        playlists={[]}
      />
      <Topic
        title=" Popular"
        sub_title="Spotify's top pick"
        playlists={context.futuredPlaylists}
        tracks={[]}
        albums={[]}
        type="playlist"
      />
    </Reac.Fragment>
  );
}
