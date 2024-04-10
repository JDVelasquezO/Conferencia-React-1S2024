import {useState} from "react";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const [ username, setUsername ] = useState('');
    const [ infoVisible, setInfoVisible ] = useState(false);
    const navigate = useNavigate();

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const clearForm = () => {
        document.getElementById("username").value = '';
    }

    const login = (e) => {
        e.preventDefault();
        if (username !== 'Daniel') {
            setInfoVisible(true);
            setUsername('');
            clearForm();
            showInfo();
        } else {
            localStorage.setItem('username', username);
            navigate('/home');
        }
    }

    const showInfo = () => {
        setTimeout(() => {
            setInfoVisible(false);
        }, 3000);
    }

    return (
        <>
            <div className="container grey lighten-4"
                 style={{padding: '2%', marginTop: '4%'}}>

                <h1 style={{padding: '1%'}}>Iniciar Sesión</h1>

                <div className="row">
                    <div className="col s12">
                        <div className="card" style={{padding: '3%'}}>
                            <form id="form" onSubmit={e => login(e)}>
                                <div className="card-content">
                                    <input autoFocus id={"username"} onChange={handleChangeUsername} type="text" placeholder="Nombre"/>
                                </div>

                                <div className="card-action">
                                    <button className="btn waves-effect waves-light" type="submit" name="action">
                                        Entrar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                { infoVisible ? (
                    <div className="col s12 mt-3">
                        <div className="card red darken-1">
                            <div className="card-content white-text">
                                <p>Este nombre de usuario no es correcto</p>
                            </div>
                        </div>
                    </div>
                ) : <></>  }

            </div>
        </>
    )
};

export default Login;