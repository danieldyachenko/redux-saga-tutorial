import {GET_USER, SET_USER, TOGGLE_PROGRESS} from "./constants";

export type User = {
    title: string
    first: string
    last: string
}

export type UserStore = {
    user: User
    isProgress: boolean
}

export type SetUser = {
    type: typeof SET_USER
    user: User
}

export type GetUser = {
    type: typeof GET_USER
}

export type ToggleProgress = {
    type: typeof TOGGLE_PROGRESS,
    isProgress: boolean
}

export type UserActions = SetUser | ToggleProgress