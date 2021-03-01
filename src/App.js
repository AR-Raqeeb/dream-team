import React, { useEffect, useState } from 'react';
import './App.css';
import Player from './Components/Players/Players';
import Cart from './Components/Players/TeamDetailsCart/Cart';
import playerInfo from './fakeData/data.json';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [players, setPlayers] = useState([]);
  //const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    setPlayers(playerInfo);
  }, [])

  // useEffect(() => {
  //   fetch('https://restcountries.eu/rest/v2/all')
  //   .then(res => res.json())
  //   .then(data => setCountries(data))
  //   .catch(error => console.log(error))    
  // }, [])
  
  const handleAddPlayer = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
    console.log("newCart", newCart)
  }

  return (
    <div className='App'>
      
      <Cart cart= {cart}></Cart>
        {
          players.map(player => <Player player = {player} handleAddPlayer={handleAddPlayer} key = {player.jersey_no}></Player>)
        }
    </div>
  );
};

export default App;