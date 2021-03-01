import React from 'react';
// import button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const playerInfo = (props) => {
    const {image, name, salary} = props.player;
    const playerImageStyle = {height:'200px', width:"100%", borderRadius:"10px"}
    const playerCardStyle = {border:'1px solid lightgray', borderRadius:'10px', margin:'10px', width:"300px", backgroundColor:'green'}
    const handleAddPlayer = props.handleAddPlayer;
    return (            
        <div style={playerCardStyle}>
            <div>
            <img style={playerImageStyle} src={image} alt=""/>
            <h2>{name}</h2>
            <p>Salary: {salary}</p>
            <button onClick={() => handleAddPlayer(props.player)}>Sign Player</button>
            </div>
        </div>
    );
};

export default playerInfo;          