import React from 'react'
import buyerimg from "../../../images/clarity_book-solid.png";
import modalbannerimage from "../../../images/New Project.png";
export default function VerifyMail() {
   
    return (
<>
                <div className='bookdetails_signin_modalpart modal-part verifymail-modal text-center'>

                    <div className='modal-content' >
                        <div className='row d-flex display-full' >
                            <div className='col-md-6 display1 text-white' style={{ backgroundImage: `url('${modalbannerimage}')`, position: 'relative' }}>
                                <div className="slick-slider" id="signin_modal_Slider">

                                    <div className='signin-modal-slide'>
                                        <p className='text-white'>Welcome to</p>
                                        <h3>Ababil Books</h3>
                                        <img src={buyerimg} style={{ margin: "10px 0" }} />
                                        <h3>Request for books</h3>
                                        <p className='text-white'>Request for prints when books
                                            are not printed anymore</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 display2'>
                                <h3>Verify mail</h3>
                                <p>An E-mail has been sent to your mail .
                                    Please verify it and login</p>

                                <div className='terms'>
                                    <span>Terms & Conditions</span>
                                    <span>Privacy</span>
                                    <span>Help</span>
                                </div>
                            </div>
                        </div>
                        <button className="close-modal-part" style={{ border: "0" }}>
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            
        </>
    )
}
