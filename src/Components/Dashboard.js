import React from 'react'
import Base from '../Base/Base'

function Dashboard() {
    const carddata = [
        {
            name:"EARNINGS(MONTHLY)",
            Price:"$40,000"
        },
        {
            name:"EARNINGS(ANNUAL)",
            Price:"$2,15,000"
        },
        {
            name:"TASKS",
            Price:"50%"
        },
        {
            name:"PENDING REQUEST",
            Price:"18"
        },

    ]
  return (
    <Base>
    <h3 style={{padding:"10px"}}>Dashboard</h3>
    
    <div className='card-container'>

        {carddata.map((data,idx) => (
              <div className='card' key={idx}>
              <p style={{color:"green"}}>{data.name} </p>
              <p>{data.Price}</p>
           </div>
        ))}
        
    </div>

    <div className='color-container'>
        <div className='col-card' style={{backgroundColor:'royalblue'}}>
          <p>Primary</p>
        </div>

        <div className='col-card' style={{backgroundColor:"lightseagreen"}}>
          <p>Success</p>
        </div>
       
        <div className='col-card' style={{backgroundColor:"mediumturquoise"}}>
          <p>Info</p>
        </div>

        <div className='col-card' style={{backgroundColor:"sandybrown"}}>
          <p>Warning</p>
        </div>

        <div className='col-card' style={{backgroundColor:"tomato"}}>
          <p>Danger</p>
        </div>

        <div className='col-card' style={{backgroundColor:"gray"}}>
          <p>Secondary</p>
        </div>
    </div>
    
    
    </Base>
  )
}

export default Dashboard