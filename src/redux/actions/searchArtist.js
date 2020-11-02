import { SEARCH_ARTIST_STARTED, SEARCH_ARTIST_SUCCESS, SEARCH_ARTIST_FAILED } from '../constants/artist'

export function searchArtistStarted() {
    return {type: SEARCH_ARTIST_STARTED, }
}

export function searchArtistSucceed(response) {
    return {type: SEARCH_ARTIST_SUCCESS, response}
}

export function searchArtistFailed(message) {
    return {type: SEARCH_ARTIST_FAILED, message}
}