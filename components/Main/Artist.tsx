"use client"
import useArtist from "hooks/useArtist";
import useArtistTopTracks from "hooks/useArtistTopTracks";
import Image from "next/image";
import { msToTime } from "utils";
import Head from "next/head";
import PaginationRanges from "components/Pagination";
import { useState } from "react";

interface Props {
  id: string;
}

export default function Artist({ id }: Props) {
  const profile = useArtist(id);
  const topTracks = useArtistTopTracks(id);
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const pageSize = 4;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <div className="px-10 pb-10">
      <Head>
        <title>Artist {profile?.name}</title>
      </Head>
      <div className="h-72 text-gray-400">
        <div className="flex items-end h-full">
          <div className="h-full w-64">
            <Image
              layout="responsive"
              height="64"
              width="64"
              src={profile?.image || "/images/test.jpeg"}
              alt=""
            />
          </div>
          <div className="ml-8 pt-6 pb-3 h-full flex flex-col justify-between">
            <div className="text-white text-xl">Artist</div>
            <div>
              <div className="text-5xl text-white mb-6 font-black">
                {profile?.name}
              </div>
              <div>{profile?.followers} Followers</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white mt-10 mb-6 text-3xl font-bold">
        Top 10 Songs
      </div>
      {topTracks?.slice(startIndex, endIndex).map((track, index) => (
        <div
          key={track.id}
          className="text-gray-400 w-8/12 hover:bg-white hover:bg-opacity-10 py-2 px-4 rounded"
        >
          <div className="flex justify-between w-full items-center">
            <div className="flex w-7/12 items-center">
              <div className="w-1/12 flex justify-center items-center">
                <div className="w-full flex justify-center items-center">
                  <div>{index + 1}</div>
                </div>
              </div>
              <div className="flex items-center h-10">
                <Image
                  layout="responsive"
                  height="64"
                  width="64"
                  src={track?.image || "/images/test.jpeg"}
                  alt=""
                />
                <div className="ml-2 text-white hover:underline cursor-pointer">
                  <div>{track.name}</div>
                </div>
              </div>
            </div>
            <div>{msToTime(track.duration_ms)}</div>
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-4">
        <PaginationRanges
          count={Math.ceil(topTracks?.length! / pageSize)} // Corrected variable usage
          defaultPage={1}
          onChange={handleChange}
          siblingCount={10}
        />
      </div>
    </div>
  );
}
