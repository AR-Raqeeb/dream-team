import React, { useState } from 'react';

const Cart = (props) => {
    console.log('props',props)
    const cart = props.cart;
    const teamCartStyle = {border:'1px solid lightgray', borderRadius:'10px', float:'right', height:"400px"}
    const totalSalary = cart.reduce((sum, player) => sum + player.salary, 0)
    const name = props.name;
    console.log(player);
    return (
        <div style={teamCartStyle}>
            <h2>Dream Team</h2>
            <h4>Player Added: {cart.length}</h4>
            <p>Total Salary: {totalSalary}</p>
            <h4>Player List</h4>
            {/* <h2>{}</h2> */}
        </div>
    );
};

export default Cart;