import { createContext, useContext, useEffect, useReducer } from "react"

const AppContext = createContext()

const initialState = {
    status: "loading",
    routines: [],
    success: false,
    error: false,
    errorMsg: null
}

function reducer(state, action){
    switch(action.type){
        case "openLoader":
            return {
                ...state, 
                status: 'loading',
            }
        case "loaded":
            return {
                ...state,
                status: 'loaded'
            }
        case "addRoutine":
            return {
                ...state,
                success: true,
                error: false,
                routines: [...state.routines, action.payload]
            }
        case "hideMessage":
            console.log(state.routines)
            return{
                ...state,
                success: false,
                error: false
            }
        case "error":
            return {
                ...state,
                error: true,
                errorMsg: action.payload
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
        throw new Error("Context was called outside the provider, consume the context in any component within the context provider.")
    }
    return context;
}

export {AppContextProvider, useAppContext}