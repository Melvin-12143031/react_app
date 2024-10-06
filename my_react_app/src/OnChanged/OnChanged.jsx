import React, { useState } from 'react';

function OnChanged() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChanged(event) {
        setName(event.target.value);
    }

    function handleQuantityChanged(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChanged(event){
        setComment(event.target.value);
    }

    function handlePaymentChanged(event){
        setPayment(event.target.value);
    }

    function handleShippingChanged(event){
        setShipping(event.target.value);
    }

    return (<div>
        <input value={name} onChange={handleNameChanged} />
        <p>Name:{name}</p>
        <hr />

        <input value={quantity} onChange={handleQuantityChanged} type='number' />
        <p>Quantity:{quantity}</p>
        <hr />

        <textarea value={comment} onChange={handleCommentChanged} placeholder='Enter Delivery Instructions'/>
        <p>{comment}</p>
        <hr />

        <select value={payment} onChange={handlePaymentChanged}>
            <option value = "">Select Payment</option>
            <option value = "Visa">Visa</option>
            <option value = "Mastercard">Mastercard</option>
            <option value = "Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>
        <hr />

        <label>
            <input type="radio" value="Pick Up" checked= {shipping === "Pick Up"} OnChanged={handleShippingChanged} />
            Pick Up
        </label> <br />
        <label>
            <input type="radio" value="Delivery" checked= {shipping === "Delivery"} OnChanged={handleShippingChanged} />
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
        <hr />
    </div>)

}

export default OnChanged