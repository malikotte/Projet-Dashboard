import React, { useState, useContext, useEffect } from 'react';
import logo from '../Admin/ece.png';
import firebaseContext from '../Firebase/context';
import './Login.css';
import { Redirect } from "react-router-dom";


const Login = () => {
    const firebase = useContext(firebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn === true) {
            setBtn(false);
        }
    }, [password, email, btn])

    const handleSubmit = e => {
        e.preventDefault();
        firebase.loginUser(email, password)
            .then(user => {
                setEmail('');
                setPassword('');
                setRedirect(true);
            })
            .catch(error => {
                setError(error);
                setEmail('');
                setPassword('');
            })
    }
    if (redirect) {
        return <Redirect to='/Admin' />
    }
    return (
        <div>
            <div className="card card-register">

                <div className="card-body" id="card-body">
                    <img src={logo} alt="Ece" />

                    <p id="para">Inscription</p>

                    <form onSubmit={handleSubmit}>

                        <center>
                            <input type="email" className="form-control form" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Adresse email" required />
                            <input type="password" className="form-control form" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" />
                            {btn ? <button type="submit" className="btn btn-success bouton2">Se connecter</button> : <button type="submit" className="btn btn-success bouton2" disabled>Se connecter</button>}
                            <p className="mt-3">Pas encore inscrit ? <a href="/Register">S'inscrire</a></p>
                        </center>

                    </form>
                    {error !== '' && <div className="error1">
                        Les informations saisies sont incorrectes !
</div>}
                </div>
            </div>
        </div>
    )
}



export default Login;