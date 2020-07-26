import {SET_USER} from "./constants";

export type User = {
    title: string
    first: string
    last: string
}

export type UserStore = {
    user: User
}

export type SetUser = {
    type: typeof SET_USER
    user: User
}