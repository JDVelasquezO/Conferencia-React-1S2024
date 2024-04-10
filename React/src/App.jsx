import '@materializecss/materialize/dist/css/materialize.css';
import '@materializecss/materialize/dist/js/materialize';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";

function App() {
    return (
        <div className={"app"}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Login />} />
                    <Route path={"/home"} element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
