import {UserActions, UserStore} from "./types";
import {SET_USER, TOGGLE_PROGRESS} from "./constants";

const initialState: UserStore = {
    user: {
        title: '',
        first: '',
        last: ''
    },
    isProgress: false
};

export default function reducer(state = initialState, action: UserActions) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        case TOGGLE_PROGRESS:
            return {
                ...state,
                isProgress: action.isProgress
            }
        default: return state
    }
}