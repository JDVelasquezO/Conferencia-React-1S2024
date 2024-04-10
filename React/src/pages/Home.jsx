import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const closeSession = () => {
        localStorage.removeItem('username');
        navigate('/');
    }

    return (
        <div className="container grey lighten-4"
             style={{padding: '2%', marginTop: '4%'}}>

            <h1 id="welcome" style={{ padding: '1%' }}>
                Bienvenido { localStorage.getItem('username') }
            </h1>

            <button onClick={closeSession}
                id="btnCloseSession" className="btn">Cerrar Sesión</button>
        </div>
    );
};

export default Home;