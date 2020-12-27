import React, { useState, useEffect, useContext } from 'react'
import firebaseContext from '../Firebase/context';

/**
* @author
* @function Logout
**/

const Logout = () => {
    const [checked, setChecked] = useState(false);
    const firebase = useContext(firebaseContext);
    useEffect(() => {
        if (checked) {
            firebase.signoutUser();
        }

    }, [checked, firebase]);

    const handleChange = event => {
        setChecked(event.target.checked);
    }
    return (
        <div>
            <div class="custom-control custom-switch">
                <input onChange={handleChange} type="checkbox" class="custom-control-input" id="customSwitch1" checked={checked} />
                <label class="custom-control-label" for="customSwitch1">Se déconnecter</label>
            </div>
        </div>
    )

}

export default Logout