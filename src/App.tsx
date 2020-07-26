import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {User} from "./store/user/types";
import {RootState} from "./store/store";
import {getUser} from "./store/user/actions";

export default function App() {

    const dispatch = useDispatch();
    const {title, first, last}: User = useSelector((state: RootState) => state.user.user)

    return (
        <div>
            <h2>{title ? `${title} ${first} ${last}` : 'Noname'}</h2>
            <button onClick={() => dispatch(getUser())}>Get name</button>
        </div>
    )
}