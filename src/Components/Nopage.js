import React from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom';

function Nopage() {
    const history = useHistory()
    
  return (
    <Base>
      <h1 style={{textAlign:'center'}}>404 Error Page</h1>
      <p style={{textAlign:'center'}}>Page Not Fount</p>
    <div>
       
       <button class="btn btn-primary" type="button" style={{marginLeft:'38vw'}}
       onClick={()=>history.push("/")}
       > 
       Go to Dashboard</button>

    </div>

    </Base>
  )
}

export default Nopage