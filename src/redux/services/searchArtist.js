import {searchArtistStarted, searchArtistSucceed, searchArtistFailed} from "../actions/searchArtist"
import axios from 'axios';

export function searchArtist(token, search) {
    return (dispatch, getState) => {
        dispatch(searchArtistStarted());
        const url = "https://api.spotify.com/v1/search?q=" + encodeURIComponent(search) + "&type=artist&limit=1";
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => {
            console.log(response)
            dispatch(searchArtistSucceed(response.data.artists.items[0]));
        })
        .catch(error => {
            console.log(error);
            dispatch(searchArtistFailed(error));
        })
    }
}