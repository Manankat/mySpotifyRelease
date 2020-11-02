import { SEARCH_SONGS_STARTED, SEARCH_SONGS_SUCCESS, SEARCH_SONGS_FAILED } from '../constants/songs'

export function searchStarted() {
    return {type: SEARCH_SONGS_STARTED, }
}

export function searchSucceed(response) {
    return {type: SEARCH_SONGS_SUCCESS, response}
}

export function searchFailed(message) {
    return {type: SEARCH_SONGS_FAILED, message}
}