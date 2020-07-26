import {SetUser, UserStore} from "./types";
import {SET_USER} from "./constants";

const initialState: UserStore = {
    user: {
        title: '',
        first: '',
        last: ''
    }
};

export const reducer = (state = initialState, action: SetUser) => {
    if (action.type === SET_USER) {
        return {
            ...state,
            user: action.user
        }
    } else return state
}