import {GET_USER, SET_USER} from "./constants";
import {SetUser, User} from "./types";

export const getUser = () => ({
    type: GET_USER
})

export const setUser = (user: User): SetUser => ({
    type: SET_USER,
    user: user
})