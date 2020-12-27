import React, { useContext, useState, useEffect } from 'react';
import Admin from '../Admin/Admin';
import Form from '../Form/Form';
import Logout from '../Logout/Index';
import firebaseContext from '../Firebase/context';
import { Redirect } from "react-router-dom";

import "./LandingAdmin.css";


const LandingAdmin = ({ parentCallback }) => {

    const firebase = useContext(firebaseContext);
    const [userSession, setUserSession] = useState(null);
    const [redirect, setRedirect] = useState(false);
    const [userData, setUserdata] = useState({});

    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : setRedirect(true);
        })
        if (userSession !== null) {
            firebase.user(userSession.uid)
                .get()
                .then(doc => {
                    if (doc && doc.exists) {
                        const myData = doc.data()
                        setUserdata(myData)

                    }

                })

                .catch(error => {
                    //console.log(error);
                })
        }

        return () => {
            listener()
        };
    }, [userSession])
    if (redirect) {
        return <Redirect to='/Login' />
    }

    return userSession === null ? (

        <div>
            <div className="lds-ring"></div>
            <p>Chargement...</p>
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    ) : (
            <div>
                <div className="container mt-3">
                    <div className="row mb-5">
                        <div className="col-xl-6 col-lg-6 mb-2">
                            <Admin userData={userData} />
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-2">
                            <Form />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Logout />
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default LandingAdmin;