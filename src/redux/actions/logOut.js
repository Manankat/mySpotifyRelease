import { LOG_USER_OUT } from '../constants/logOut'

export function logOut() {
    return {type: LOG_USER_OUT}
}