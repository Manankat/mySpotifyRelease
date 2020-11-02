import {searchStarted, searchSucceed, searchFailed} from "../actions/searchSongs"
import axios from 'axios';

export function searchSongs(token, search) {
    return (dispatch, getState) => {
        dispatch(searchStarted());

        const url = "https://api.spotify.com/v1/search?q=" + encodeURIComponent(search) + "&type=track&limit=1";
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => {
            dispatch(searchSucceed(response.data.tracks.items[0]));
        })
        .catch(error => {
            console.log(error);
            dispatch(searchFailed(error));
        })
    }
}