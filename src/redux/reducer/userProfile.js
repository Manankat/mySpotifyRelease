import { LOG_USER_OUT } from "../constants/logOut";
import { ACCESS_PROFILE_FAILED, ACCESS_PROFILE_STARTED, ACCESS_PROFILE_SUCCESS } from "../constants/userProfile";

let initialState = {
    userProfile: "",
}

export default function UserProfile(state = initialState, action) {
    switch (action.type) {
        case ACCESS_PROFILE_STARTED:
            return {
                ...state,
                userProfile: "",
        };
        case ACCESS_PROFILE_SUCCESS:
            return {
                ...state,
                userProfile: action.content,
        };
        case ACCESS_PROFILE_FAILED:
            return {
                ...state,
                userProfile: "error",
        };
        case LOG_USER_OUT:
            return {
                ...state,
                userProfile: "",
        };
        default:
            return state;
    }
}