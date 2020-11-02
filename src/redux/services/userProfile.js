import {accessStarted, accessSucceed, accessFailed} from "../actions/getUserProfile"
import axios from 'axios';

export function getUserProfile(token) {
    return (dispatch, getState) => {
        dispatch(accessStarted());
        axios.get("https://api.spotify.com/v1/me", { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => {
            dispatch(accessSucceed(response.data));
        })
        .catch(error => {
            dispatch(accessFailed(error.message));
        })
    }
}