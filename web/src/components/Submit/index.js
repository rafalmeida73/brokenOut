import React, { useContext } from 'react';
import { Context } from '../Store';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Icon, Button } from 'react-materialize';
import './styles.css';

const IsLogeed = (props) => {
   const [state] = useContext(Context);

   return (
      <>
         {state ?
            <Button style={{ backgroundColor: props.color }} node="button" type="submit" waves="light">
               Comentar
                      <Icon right className="white-text">
                  send
                      </Icon>
            </Button>
            :
            <Link style={{ backgroundColor: props.color }} className="waves-effect waves-light btn" to="/login">
               Fazer login
                   </Link>
         }
      </>
   )

}

export default IsLogeed;