import { createContext, useContext, useReducer } from "react"

const AppContext = createContext()

const initialState = {
    status: "loading",
    routines: []
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