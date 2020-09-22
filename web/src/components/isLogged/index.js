import React, { useContext } from 'react';
import { Context } from '../Store';
import { Link } from 'react-router-dom';
import firebase from '../../fireConnection';

const IsLogeed = () => {
    const [state, setState] = useContext(Context);

    function handleClick() {
        firebase.signOut();
    }

    return (
        <>
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
                    <Link className="white-text" onClick={handleClick}>
                        Sair
    </Link>
                </li>
            )}
        </>
    )

}

export default IsLogeed;