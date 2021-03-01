import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const playerInfo = (props) => {
    const {image, name, salary, jersey_no, category} = props.player;
    const jersey = jersey_no;
    const playerImageStyle = {height:'200px', width:"100%", borderRadius:"10px"}
    const playerCardStyle = {border:'1px solid lightgray', borderRadius:'10px', margin:'10px', width:"300px", backgroundColor:'green'}
    const handleAddPlayer = props.handleAddPlayer;
    return (
        
        <div className="card m-3" style={{width: '18rem'}}>
            <img src={image} style={playerImageStyle} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">Salary: {salary}</p>
                <p className="card-text">Category: {category}</p>
                <button href="#" className="btn btn-primary" onClick={() => handleAddPlayer(props.player)}>Sign Player <span><FontAwesomeIcon icon={faPlus} /></span></button>
            </div>
        </div>
        // <div style={playerCardStyle}>
        //     <div>
        //     <img style={playerImageStyle} src={image} alt=""/>
        //     <h2>{name}</h2>
        //     <p>Salary: {salary}</p>
        //     <button classNameName='btn btn-danger' onClick={() => handleAddPlayer(props.player)}>Sign Player</button>
        //     </div>
        // </div>
    );
};

export default playerInfo;          