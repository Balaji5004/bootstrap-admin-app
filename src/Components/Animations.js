import React from 'react'
import Base from '../Base/Base'

function Animations() {
    return (
        <Base>
            <h3 style={{ padding: "10px" }}>Animations</h3>
            <div className='ani-container'>
                <div class="card" style={{ width: '500px' }}>
                    <div class="card-header" style={{ color: 'royalblue' }}>
                        Grow In Animation Utilty
                    </div>
                    <div class="card-body">
                        <p class="card-text" style={{ color: 'red' }}>.animated--grow-in</p><br />
                        <p style={{ fontWeight: 'normal', fontSize: 'small', marginRight: '100px' }}>Navbar Dropdown Example:</p>

                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                                <p class="navbar-brand" >Navbar</p>
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul class="navbar-nav">
                                        <li class="nav-item dropdown">
                                            <button class="nav-link dropdown-toggle"  data-bs-toggle="dropdown">
                                                Dropdown link
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><button class="dropdown-item" href="#">Action</button></li>
                                                <li><button class="dropdown-item" href="#">Another action</button></li>
                                                <li><button class="dropdown-item" href="#">Something else here</button></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <p style={{fontWeight:'normal', fontSize:'small'}}>Note: This utility animates the CSS transform property, meaning it will override any existing 
                            transforms on an element being animated! In this theme, the grow in animation is
                             only being used on dropdowns within the navbar.</p>

                    </div>
                </div>

            </div>
        </Base>
    )
}

export default Animations