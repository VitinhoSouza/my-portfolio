import { useState, useEffect, Dispatch, SetStateAction } from "react";

import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

type IUsePersistedStateResponse<T>=[
    T,
    Dispatch<SetStateAction<T>>,
];

export function usePersistedState<T>(key:string,initialState:any):IUsePersistedStateResponse<T>{
    const [state,setState] = useState(()=>{
        const storageValue = localStorage.getItem(key);

        if(storageValue)
            return storageValue === 'light' ? light : dark;
        else
            return initialState;
    }); 

    useEffect(()=>{
        localStorage.setItem(key,state.title);
    },[key,state])

    return [state,setState];
}