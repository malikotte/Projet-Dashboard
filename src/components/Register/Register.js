import React, { useState, useContext } from 'react';
import logo from '../Admin/ece.png';
import firebaseContext from '../Firebase/context';
import './Register.css';


const Register = () => {
    const firebase = useContext(firebaseContext);
    const data = {
        email: '',
        password: '',
        confirmPassword: ''
    }


    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('');
    const [error1, setError1] = useState('');

    const [success, setSuccess] = useState('');
    const handleChange = e => {
        setLoginData({ ...loginData, [e.target.id]: e.target.value });
    }
    const handleSubmit = e => {
        e.preventDefault();
        const { email, password } = loginData;
        firebase.signupUser(email, password)
            .then(authUser => {
                return firebase.user(authUser.user.uid).set({
                    email: email,

                })
            })
            .then(user => {
                setLoginData({ ...data });
                setSuccess(success.code);
                setError('');
                setError1('');
            })
            .catch(error => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        setError(error.code);
                        setLoginData({ ...data });

                        break;
                    case 'auth/weak-password':
                        setError1(error.code);
                        setLoginData({ ...data });

                        break;

                }



            })

    }

    const { email, password, confirmPassword } = loginData;
    const btn = email === '' || password === '' || password !== confirmPassword
        ? <button type="submit" className="btn btn-success bouton2" disabled>Inscription</button> : <button type="submit" className="btn btn-success bouton2" >Inscription</button>


    // Gestion des erreurs

    const errorMsg = error !== '' && <div className="error">
        L'adresse e-mail est déjà utilisée !
  </div>
    const errorMsg1 = error1 !== '' && <div className="error1">
        Le mot de passe doit contenir 6 caractères !
</div>
    const successMsg = success !== '' && <div className="success">
        Votre inscription a bien été validée!
</div >


    return (
        <div>
            <div className="card card-register">

                <div className="card-body" id="card-body">
                    <img src={logo} alt="Ece" />

                    <p id="para">Inscription</p>

                    <form onSubmit={handleSubmit}>

                        <center>
                            <input type="email" className="form-control form" id="email" name="email" value={email} onChange={handleChange} placeholder="Adresse email" required />
                            <input type="password" className="form-control form" id="password" name="password" value={password} onChange={handleChange} placeholder="Mot de passe" />
                            <input type="password" className="form-control form" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="Confirmer le mot de passe" />
                            {btn}
                            <p className="mt-3">Déjà inscrit ? <a href="/Login">Se connecter</a></p>
                        </center>

                    </form>
                    {successMsg}
                    {errorMsg}
                    {errorMsg1}
                </div>
            </div>
        </div>
    )
}



export default Register;