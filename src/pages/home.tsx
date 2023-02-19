import { FC, useEffect, useState } from "react";
import { IPopularTrack, ITopHit } from "../types/types";
import { API_KEY } from "../Api";
import TopHitItem from "../components/topHitItem";
import PopularTrackItem from "../components/popularTrackItem";

const HomePage: FC = () => {
  const [hits, setHits] = useState<ITopHit[]>([]);
  const [popularTracks, setPopularTracks] = useState<IPopularTrack[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (loaded) return;
    fetchHits();
    fetchPopularTracks();
    setLoaded(true);
  }, [loaded]);

  /** GET запрос к lastFm Api на получение топа артистов */
  function fetchHits() {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&limit=12&format=json`
    )
      .then((res) => res.json())
      .then((data) => data.artists)
      .then((artist) =>
        setHits(
          artist.artist.sort((a: ITopHit, b: ITopHit) => {
            return b.listeners - a.listeners;
          })
        )
      )
      .catch((err) => alert("Не получилось загрузить хиты:\n" + err));
  }

  /** GET запрос к lastFm Api на получение топа треков */
  function fetchPopularTracks() {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&limit=18&format=json`
    )
      .then((res) => res.json())
      .then((data) => data.tracks)
      .then((track) =>
        setPopularTracks(
          track.track.sort((a: IPopularTrack, b: IPopularTrack) => {
            return b.listeners - a.listeners;
          })
        )
      )
      .catch((err) =>
        alert("Не получилось загрузить популярные треки:\n" + err)
      );
  }

  return (
    <main className="content">
      <h1 className="main_title">Music</h1>
      <h2 className="title">Hot right now</h2>
      <div className="hits">
        {hits.map((el) => {
          return <TopHitItem key={el.name} hit={el} />;
        })}
      </div>
      <h2 className="title">Popular tracks</h2>
      <div className="popular_tracks">
        {popularTracks.map((el) => {
          return <PopularTrackItem key={el.name} popularTrack={el} />;
        })}
      </div>
    </main>
  );
};
export default HomePage;
