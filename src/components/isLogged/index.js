import React, { useContext } from 'react';
import { Context } from '../Store';
import { Link, useHistory  } from 'react-router-dom';
import firebase from '../../fireConnection';

const IsLogeed = () => {
    const [state] = useContext(Context);
    let history = useHistory();
    function handleClick() {
        firebase.logout();
        localStorage.removeItem("nome");
        history.push("/login");
    }

    return (
        <>
        <ul>
            {!state && (
                <li>
                    <Link className="white-text" to='/login'>
                        Entrar
                    </Link>
                </li>

            )}

            {!state && (
                <li>
                    <Link className="white-text" to='/registrar'>
                        Registrar
                    </Link>
                </li>

            )}

            {state && (
                <li>
                    <Link to="#" className="white-text" onClick={handleClick}>
                        Sair
                    </Link>
                </li>
            )}
            </ul>
        </>
    )

}

export default IsLogeed;