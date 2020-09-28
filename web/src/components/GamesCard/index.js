import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import './styles.css';
import { Link } from 'react-router-dom';
import firebase from '../../fireConnection';
import { useState } from 'react';

function GamesCard() {
const [games, setGames] = useState([]);

useEffect(() => {
        firebase.app.ref('games').on('value', (snapshot)=> {  
                let info = []; 
                snapshot.forEach((childItem)=>{

                info.push({
                    key: childItem.key,
                    category: childItem.val().categoria,
                    img: childItem.val().imagem,
                    name: childItem.val().nome,
                    note: childItem.val().nota,
                  })
                });

                setGames(info);
              })
      }, []);

 return (
  <div>
   {games.map(game => {
    return (
     <div key={game.key}>
      <Link to={`/jogos/${game.key}`}>
       <div className={"col s12 m6 l4 iconsNote"}>

        <div className={`cardGame ${game.category === "action" ? "action" :
         game.category === "strategy" ? "strategy" :
          game.category === "fight" ? "fight" :
           game.category === "running" ? "running" :
            game.category === "rpg" ? "rpg" :
             game.category === "construction" ? "construction" :
              game.category === "music" ? "music" :
               game.category === "sports" ? "sports" :
                game.category === "vr" ? "vr" :
                 ""
         }`}>
                 
        <img className="responsive-img" src={game.img} alt={game.name} />
        <h4 className="center-align">{game.name}</h4>

        </div>
       </div>
      </Link>
     </div>
    )
   })}
  </div>
 )
}


export default GamesCard;