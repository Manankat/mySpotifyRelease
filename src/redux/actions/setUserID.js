import { SET_USER_ID } from '../constants/userID'

export function setUserID(code) {
    return {type: SET_USER_ID, code}
}