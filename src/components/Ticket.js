import React from 'react';
import './ticket.css' 


const Ticket = () => {

 return (
  <div className='wrapper'>
     <div className="head "> 
 <div className="header">Book Bus Ticket</div>
 <div className="">
  <div className='start'>
   <label  className="depart">Depart From : </label>
<select className='city'>
    <option value="delhi">Delhi</option>
    <option value="noida">Noida</option>
    <option value="ghaziabad">Ghaziabad</option>
    <option value="lucknow">Lucknow</option>
</select>
</div>
 <label className='destination'>Destination : </label>
<select className='city'>
    <option value="delhi">Delhi</option>
    <option value="noida">Noida</option>
    <option value="ghaziabad">Ghaziabad</option>
    <option value="lucknow">Lucknow</option>
</select>
</div>

<div className='datee'>
  <div className='indate'>
<label>Boarding date: </label>
<input type='date' />
</div>
<div className='outdate'>
<label>Deboarding date: </label>
<input type='date' />
</div>
</div>

<button className='book'>Book Ticket</button>

 
  </div>
  </div>
 
 );
}

export default Ticket;