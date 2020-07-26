import {GET_USER, SET_USER, TOGGLE_PROGRESS} from "./constants";
import {GetUser, SetUser, ToggleProgress, User} from "./types";

export const getUser = (): GetUser => ({
    type: GET_USER,
})

export const setUser = (user: User): SetUser => ({
    type: SET_USER,
    user: user
})

export const toggleProgress = (isProgress: boolean): ToggleProgress => ({
    type: TOGGLE_PROGRESS,
    isProgress: isProgress
})


