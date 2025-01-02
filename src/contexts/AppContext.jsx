import { createContext, useContext, useEffect, useReducer } from "react"

const AppContext = createContext()

const initialState = {
    status: "loading",
    routines: [],
    success: false,
    error: false
}

function reducer(state, action){
    switch(action.type){
        case "openLoader":
            return {
                ...state, 
                status: 'loading'
            }
        case "loaded":
            return {
                ...state,
                status: 'loaded'
            }
        case "addRoutine":
            console.log(action.payload)
            // const data = action.payload;
            // for(const key in data){
            //     console.log(key, data[key]);
            //     if(!data[key]){
            //         console.log("crappy data")
            //     }
            // }
            return {
                ...state,
                success: true,
                error: false,
                routines: [...state.routines, action.payload]
            }
        case "hideMessage":
            return{
                ...state,
                success: false,
                error: false
            }
        case "error":
            return {
                ...state,
                error: true
            }
    }
}

function AppContextProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

function useAppContext(){
    const context = useContext(AppContext);
    if(context === undefined){
        throw new Error("Context was called outside the provider")
    }
    return context;
}

export {AppContextProvider, useAppContext}