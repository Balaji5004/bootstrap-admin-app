import React from 'react'
import Base from '../Base/Base'
import { ImFacebook2 } from "react-icons/im";
import { FcApproval, FcHighPriority } from "react-icons/fc";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { HiOutlineArchive } from "react-icons/hi";

function Buttons() {
    return (
        <Base>
            <h3 style={{ padding: "10px" }}>Buttons</h3>
            <div className='btn-container'>
                <div class="card" style={{ width: '600px' }}>
                    <div class="card-header" style={{ color: 'royalblue' }}>
                        Circle-buttons
                    </div>
                    <div class="card-body">

                        <p class="card-text" style={{ fontWeight: "normal" }}>Use Font Awesome Icons (included with this theme package) along with
                            the circle buttons as shown in the examples below!</p>

                        <p style={{ color: 'red' }}>.btn-circle</p>
                        <div style={{ gap: '1rem', display: "flex" }}>
                            <ImFacebook2 style={{ borderRadius: "50px", fontSize: "30px", color: "blue" }} />
                            <FcApproval style={{ fontSize: '35px' }} />
                            <FcHighPriority style={{ fontSize: '35px' }} />
                            <BsFillExclamationCircleFill style={{ fontSize: '35px', color: "cyan" }} />
                            <HiOutlineArchive style={{ fontSize: '35px', color: "red" }} />
                        </div>
                        <br />
                        <p style={{ color: 'red' }}>.btn-circle-sm</p>
                        <div style={{ gap: '1rem', display: "flex" }}>
                            <ImFacebook2 style={{ borderRadius: "50px", fontSize: "20px", color: "blue" }} />
                            <FcApproval style={{ fontSize: '20px' }} />
                            <FcHighPriority style={{ fontSize: '20px' }} />
                            <BsFillExclamationCircleFill style={{ fontSize: '20px', color: "cyan" }} />
                            <HiOutlineArchive style={{ fontSize: '20px', color: "red" }} />
                        </div>

                        <br />
                        <p style={{ color: 'red' }}>.btn-circle-lg</p>
                        <div style={{ gap: '1rem', display: "flex" }}>
                            <ImFacebook2 style={{ borderRadius: "50px", fontSize: "45px", color: "blue" }} />
                            <FcApproval style={{ fontSize: '45px' }} />
                            <FcHighPriority style={{ fontSize: '45px' }} />
                            <BsFillExclamationCircleFill style={{ fontSize: '45px', color: "cyan" }} />
                            <HiOutlineArchive style={{ fontSize: '45px', color: "red" }} />
                        </div>
                    </div>
                </div>

                <div class="card" style={{ width: "500px" }}>
                    <h5 class="card-header" style={{ color: 'royalblue' }}>Brand Buttons</h5>
                    <div class="card-body">
                        <p class="card-text" style={{fontWeight:'normal'}}>Google and Facebook buttons are available featuring each company's respective brand color.
                                           They are used on the user login and registration pages.
                                          You can create more custom buttons by adding a new color variable in the _variables.scss file and 
                                          then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.</p>
                        <button class="btn btn-primary" style={{width:'400px', backgroundColor:'brown',border:'none'}}>btn-google</button><br /><br />
                        <button href="#" class="btn btn-primary" style={{width:'400px'}}>btn-facebook</button>
                    </div>
                </div>

            </div>

        </Base>
    )
}

export default Buttons