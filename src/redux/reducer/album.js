import { SEARCH_ALBUM_STARTED, SEARCH_ALBUM_SUCCESS, SEARCH_ALBUM_FAILED } from "../constants/album";

let initialState = {
    researchAlbum: "",
    loading: false
}

export default function Album(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ALBUM_STARTED:
            return {
                ...state,
                researchAlbum: "",
                loading: true,
        };
        case SEARCH_ALBUM_SUCCESS:
            return {
                ...state,
                researchAlbum: action.response,
                loading: false,
        };
        case SEARCH_ALBUM_FAILED:
            return {
                ...state,
                researchAlbum: action.message,
                loading: false,
        };
        default:
            return state
    }
}