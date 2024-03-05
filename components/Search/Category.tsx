import { Playlist } from "hooks/useFuturedPlaylists";
import { useEffect, useState } from "react";
import spotify from "spotify";
import { useRouter } from "next/router";
import {  useAppSelector } from "hooks";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

interface Category {
  id: string;
  name: string;
  image: string;
}

export default function Category() {
  const [playlists, setPlaylists] = useState<Playlist[]>();
  const [cate, setCate] = useState<Category>();


  const token = useAppSelector((state) => state.auth.access_token);
  const router = useRouter();

  

  const fetchPlaylists = async () => {
    const res = await spotify.getBrowse(router.query.id as string);
    console.log(res);
    let singlePlaylist: Playlist = {} as Playlist;
    let allPlaylists: Playlist[] = [];
    for (const playlist of res.playlists.items) {
      singlePlaylist.id = playlist.id;
      singlePlaylist.description = playlist.description;
      singlePlaylist.image = playlist.images[0].url;
      singlePlaylist.name = playlist.name;
      singlePlaylist.uri = playlist.uri;
      allPlaylists.push(JSON.parse(JSON.stringify(singlePlaylist)));
    }
    setPlaylists(allPlaylists);
  };

  const fetchCate = async () => {
    const res = await spotify.getCategory(router.query.id as string);
    let cat: Category = {} as Category;
    cat.id = res.id;
    cat.name = res.name;
    cat.image = res.icons[0].url;
    setCate(cat);
  };

  useEffect(() => {
    fetchPlaylists();
    fetchCate();
  }, [token]);
  return (
    <div className="pb-10">
      <Head>
        <title>Search{cate?.name}</title>
      </Head>
      <div className="text-white font-bold text-3xl mt-8 ml-8 hover:underline cursor-pointer">
        {cate?.name}
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 mt-4 mx-4">
        {playlists?.map((item) => (
          <div
            key={item.id}
            className="bg-end hover:bg-white hover:bg-opacity-10 transition duration-300 ease-in-out p-4 rounded"
          >
            <div className="item w-full relative">
              <Link href={`/playlist/${item.id}`}>
                <div>
                  <Image
                    layout="responsive"
                    height="64"
                    width="64"
                    src={item.image}
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className="text-sm font-semibold mt-2">
              <Link href={`/playlist/${item.id}`}>
                <div className="text-white whitespace-nowrap overflow-hidden overflow-ellipsis hover:underline cursor-pointer">
                  {item.name}
                </div>
              </Link>
            </div>
            <div className="text-xs text-gray-400 mt-2 font-medium overflow-ellipsis overflow-hidden h-12">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
