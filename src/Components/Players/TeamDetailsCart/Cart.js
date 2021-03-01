import React, { useState } from 'react';


const Cart = (props) => {
    const cart = props.cart;
    const teamCartStyle = {border:'1px solid lightgray', borderRadius:'10px', float:'right', height:"400px"}
    const totalSalary = cart.reduce((sum, player) => sum + player.salary, 0)
    console.log('chvavhcah',cart.salary)

    return (
        <div className='d-flex  justify-content-end'>
            <div className="card m-3" style={{width:'25rem'}}>
                <div className="card-body">
                    <h2 className="card-title">Dream Team</h2>
                    <h4 className="card-text">Player Added: {cart.length}</h4>
                    <p className='text-danger card-text'>Total Salary: {totalSalary}</p>
                    <h4 className='text-danger'>Selected Players List</h4>
                    {cart.map(playerName => <h4 className='text-info'>{playerName.name} Salary: {playerName.salary}</h4>)}
                    
                </div>
            </div>
        </div>
    );
};

export default Cart;