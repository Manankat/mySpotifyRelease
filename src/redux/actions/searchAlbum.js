import { SEARCH_ALBUM_STARTED, SEARCH_ALBUM_SUCCESS, SEARCH_ALBUM_FAILED } from '../constants/album'

export function searchAlbumStarted() {
    return {type: SEARCH_ALBUM_STARTED, }
}

export function searchAlbumSucceed(response) {
    return {type: SEARCH_ALBUM_SUCCESS, response}
}

export function searchAlbumFailed(message) {
    return {type: SEARCH_ALBUM_FAILED, message}
}