import './App.css'
import { Route, Routes } from "react-router-dom";
import Registration from './registration'
import Login from './login'


function App() {

    return (
        <Routes>
            <Route path='/' Component={Login} />
            <Route path='/registration' Component={Registration} />
        </Routes>
    );
}

export default App
