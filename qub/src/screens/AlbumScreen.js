import React from "react";
import { withRouter } from 'react-router-dom';
import { albums } from '../constant';
import BaseScreen from "./BaseScreen";
import AlbumSingle from "../components/AlbumSingle";

const AlbumScreen = ({ match }) => {
  const albumMatch = albums.find(({ id }) => id === match.params.albumId)
  return (
    <BaseScreen>
      <AlbumSingle
        name={albumMatch.name}
        title={albumMatch.title}
        year={albumMatch.year}
        length={albumMatch.length}
        background={albumMatch.background}
        tracks={albumMatch.tracks}
        trackList={albumMatch.trackList}
      />
    </BaseScreen>
  );
}

export default withRouter(AlbumScreen);
