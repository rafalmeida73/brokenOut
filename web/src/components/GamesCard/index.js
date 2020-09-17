import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import './styles.css';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

let games = [
 {
  id: 271590,
  name: "Grand Theft Auto V",
  category: "action",
  img: "https://cdn.cloudflare.steamstatic.com/steam/apps/271590/header.jpg?t=1598662171"
 },
 {
  id: 779340,
  name: "Total War: THREE KINGDOMS",
  category: "strategy",
  img: "https://cdn.cloudflare.steamstatic.com/steam/apps/779340/header.jpg?t=1598662171"
 },
 {
  id: 310950,
  name: "Street Fighter V",
  category: "fight",
  img: "https://cdn.cloudflare.steamstatic.com/steam/apps/310950/header.jpg?t=1598662171"
 },
 {
  id: 1222680,
  name: "Need for Speed™ Heat",
  category: "running",
  img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/header.jpg?t=1598662171"
 },
 {
  id: 1096900,
  name: "RPG Maker MZ",
  category: "rpg",
  img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1096900/header.jpg?t=1598662171"
 },
 {
  id: 24780,
  name: "SimCity™ 4 Deluxe Edition",
  category: "construction",
  img: "https://cdn.cloudflare.steamstatic.com/steam/apps/24780/header.jpg?t=1598662171"
 },
 {
  id: 1222670,
  name: "The Sims™ 4",
  category: "vr",
  img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg?t=1598662171"
 },
 {
  id: 446560,
  name: "Just Dance 2017",
  category: "music",
  img: "https://cdn.cloudflare.steamstatic.com/steam/apps/446560/header.jpg?t=1598662171"
 },
 {
  id: 1225330,
  name: "NBA 2K21",
  category: "sports",
  img: "https://cdn.cloudflare.steamstatic.com/steam/apps/1225330/header.jpg?t=1598662171"
 },

]


function GamesCard() {
 const [value] = React.useState(2);
 return (
  <div>
   {games.map(game => {
    return (
     <div key={game.id}>
      <Link to={`/jogos/${game.id}`}>
       <div className={"col s12 m6 l4"}>
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

         <Box className="center-align" component="fieldset" mb={3} borderColor="transparent">
          <Rating name="disabled" value={value} disabled />
         </Box>
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