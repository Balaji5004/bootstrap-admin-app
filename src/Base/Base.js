import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function Base({children}) {
    const[isOpen, setIsOpen] = useState(false)
    const[utility, setUtility] = useState(false)
    const[page, setPage] = useState(false)
    const history = useHistory()
  return (
    
    <div className='Base-component'>
        <div className='left-component'>
              <h3 className='heading'>SB ADMIN <sup>2</sup></h3>
             
              <p className='btns' onClick={()=>history.push("/")}>Dashboard</p>
            
              <p className="text-muted">INTERFACE  </p>

            <div >
               <p className='btns' onClick={() => setIsOpen(!isOpen)}>Components</p>
                {isOpen && (
                <div className='inner-btns'>
                <p className='text-muted'>custom Components</p>
                <button type="button" class="btn btn-light" onClick={() => history.push("/buttons")}>Buttons</button><br/><br/>
                <button type="button" class="btn btn-light">cards</button>
             </div>
                   )}
             </div>

             <div>
               <p className='btns' onClick={() => setUtility(!utility)}>Utilities</p>
                {utility && (
                <div className='inner-btns'>
                <p className='text-muted'>custom utilities</p>
                <button type="button" class="btn btn-light">Colors</button><br/><br/>
                <button type="button" class="btn btn-light">Borders</button><br/><br/>
                <button type="button" class="btn btn-light" onClick={() => history.push("/animations")}>Animations</button><br/><br/>
                <button type="button" class="btn btn-light">Others</button>
             </div>
                   )}
             </div>

            
              <p className='text-muted'>ADDONS</p>
              <div>
               <p className='btns' onClick={() => setPage(!page)}>Pages</p>
                {page && (
                <div className='inner-btns'>
                <p className='text-muted'>Login Screens</p>
                <button type="button" class="btn btn-light">Login</button><br/><br/>
                <button type="button" class="btn btn-light">Register</button><br/><br/>
                <button type="button" class="btn btn-light">Forget Password</button><br/><br/>
                <p className='text-muted'>other pages</p>
                <button type="button" class="btn btn-light" onClick={() => history.push("/nopage")}>404 page</button><br/><br/>
                <button type="button" class="btn btn-light">Blank page</button>
             </div>
                   )}
             </div>

             <p className='btns' onClick={""}>Charts</p>
             <p className='btns' onClick={()=>history.push("/tables")}>Tables</p>


        </div>

        <div className='right-base'>

        <div className='Nav-bar'>
             <div className='nav-search'>
                <input
                type='text'
                placeholder='search for...'
                />
                <button>search</button>
             </div>

             <div className='login-btn'>
                 <p className='log-name'>Balaji P</p>

                <img src="avator" alt='B'  className="avatar"></img>
             </div>       
       </div>


        <div className='Right-content'>
              {children}
        </div>

        </div>


    </div>

     
      
  )
}

export default Base