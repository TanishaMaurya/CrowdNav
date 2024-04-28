import React from 'react';
import './report.css' 


const Report = () => {

 return (
  <div className='wrapper'>
    <div className="head "> 
 <div className="header">Report Grievances </div>
 <div className="">
  <div className='start'>
   <label  className="depart">Problem : </label>
   <input  type='text' placeholder='Write here...' className="problem"/>
</div>

 <label className='destination'>Name : </label>
 <input type="text" placeholder="Name" />

</div>

<div className='datee'>
  <div className='indate'>
<label className='dateey'>Date of boarding the bus: </label>
<input type='date' />
 
 <div className='timein'> 
  
  <label className='time'>Time  of boarding the bus : </label>
<input type='time'  className=""></input>
</div>
</div>

</div>

<button className='book'>Report Grievances </button>

 
  </div>
  </div>
  
 );
}

export default Report;