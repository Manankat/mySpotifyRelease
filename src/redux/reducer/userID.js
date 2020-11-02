import { SET_USER_ID } from "../constants/userID";

let initialState = {
    userID: "",
}

export default function UserID(state = initialState, action) {
    switch (action.type) {
        case SET_USER_ID:
            return {
                ...state,
                userID: action.code
            };
        default:
            return state
    }
}