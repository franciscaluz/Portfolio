import React from "react";
import { withRouter } from 'react-router-dom';
import { albums } from '../constant';
import BaseScreen from "./BaseScreen";
import AlbumLyrics from "../components/AlbumLyrics"

const AlbumLyricsScreen = ({ match, history, location }) => {
    const songMatch = albums.find(({ id }) => id === match.params.albumId)
        .trackList.find(({ id }) => id === match.params.songId)
    const Match = albums.find(({ id }) => id === match.params.albumId)
    return (
        <BaseScreen>
            <AlbumLyrics
                name={Match.name}
                title={Match.title}
                background={Match.background}
                year={Match.year}
                length={Match.length}
                tracks={Match.tracks}
                trackList={songMatch}
            />
        </BaseScreen>
    );

}

export default withRouter(AlbumLyricsScreen)

