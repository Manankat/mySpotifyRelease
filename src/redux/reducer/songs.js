import { SEARCH_SONGS_STARTED, SEARCH_SONGS_SUCCESS, SEARCH_SONGS_FAILED } from "../constants/songs";

let initialState = {
    researchSongs: "",
    loading: false
}

export default function Songs(state = initialState, action) {
    switch (action.type) {
        case SEARCH_SONGS_STARTED:
            return {
                ...state,
                researchSongs: "",
                loading: true,
        };
        case SEARCH_SONGS_SUCCESS:
            return {
                ...state,
                researchSongs: action.response,
                loading: false,
        };
        case SEARCH_SONGS_FAILED:
            return {
                ...state,
                researchSongs: action.message,
                loading: false,
        };
        default:
            return state
    }
}