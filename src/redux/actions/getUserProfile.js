import { ACCESS_PROFILE_SUCCESS, ACCESS_PROFILE_STARTED, ACCESS_PROFILE_FAILED} from '../constants/userProfile'

export const accessStarted = (content) => ({
    type: ACCESS_PROFILE_STARTED,
    content
});

export const accessSucceed = (content) => ({
    type: ACCESS_PROFILE_SUCCESS,
    content
});

export const accessFailed = (content) => ({
    type: ACCESS_PROFILE_FAILED,
    content
});