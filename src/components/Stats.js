import React from 'react';
import { Consumer } from './Context';

const Stats = () => {
 
  // const totalPlayers = props.players.length;
  // const totalPoints = props.players.reduce( (total, player) => {
  //   return total + player.score;
  // }, 0);

  return (
    <Consumer>
        {context => {
          const totalPlayers = context.players.length;
          const totalPoints = context.players.reduce( (total, player) => {
            return total + player.score;
          }, 0);

          return(
          <table>
            <tbody>
            <tr>
              <td>Players:</td>
              <td>{ totalPlayers }</td>
            </tr>
            <tr>
              <td>Total Points:</td>
              <td>{ totalPoints }</td>
            </tr>
          </tbody>
         </table>  
          )
        }}
      </Consumer>
  );
}

export default Stats;