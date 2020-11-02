import {searchAlbumStarted, searchAlbumSucceed, searchAlbumFailed} from "../actions/searchAlbum"
import axios from 'axios';

export function searchAlbum(token, search) {
    return (dispatch, getState) => {
        console.log(search);
        dispatch(searchAlbumStarted());

        const url = "https://api.spotify.com/v1/search?q=" + encodeURIComponent(search) + "&type=album&limit=1";
        axios.get(url, { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => {
            dispatch(searchAlbumSucceed(response.data.albums.items[0]));
        })
        .catch(error => {
            console.log(error);
            dispatch(searchAlbumFailed(error));
        })
    }
}