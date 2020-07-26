import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/store";
import {getUser} from "./store/user/actions";

export default function App() {

    const dispatch = useDispatch();
    const {user, isProgress} = useSelector((state: RootState) => state.user)

    useEffect(() => { dispatch(getUser()) }, [])

    return (
        <div>
            <h2>{!isProgress ? `${user.title} ${user.first} ${user.last}` : 'Loading...'}</h2>
            <button onClick={() => dispatch(getUser())} disabled={isProgress}>
                Get name
            </button>
        </div>
    )
}