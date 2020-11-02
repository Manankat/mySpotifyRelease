import { SEARCH_ARTIST_STARTED, SEARCH_ARTIST_SUCCESS, SEARCH_ARTIST_FAILED } from "../constants/artist";

let initialState = {
    researchArtist: "",
    loading: false
}

export default function Artist(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ARTIST_STARTED:
            return {
                ...state,
                researchArtist: "",
                loading: true,
        };
        case SEARCH_ARTIST_SUCCESS:
            return {
                ...state,
                researchArtist: action.response,
                loading: false,
        };
        case SEARCH_ARTIST_FAILED:
            return {
                ...state,
                researchArtist: action.message,
                loading: false,
        };
        default:
            return state
    }
}