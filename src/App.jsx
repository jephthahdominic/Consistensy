import { ThemeProvider } from "./contexts/ThemeContext"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddRoutine from "./pages/AddRoutine"
import {AppContextProvider} from './contexts/AppContext'
import NotFound from "./pages/NotFound"
import LandingPage from "./pages/LandingPage"


function App() {
  return <>
    <AppContextProvider>
      <ThemeProvider>
        <BrowserRouter>
            <Header/>
            <Routes>
              <Route path = "/" element={<Dashboard />} />
              <Route path = "/add_routine" element={<AddRoutine/>} />

              <Route path ="login" element={<LandingPage />}/>
              <Route path = "*" element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppContextProvider>
  </>
}

export default App
