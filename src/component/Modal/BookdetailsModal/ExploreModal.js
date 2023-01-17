import React, { useState } from 'react'

export default function ExploreModal() {

    const [modal2, setModal2] = useState(false);

    const toggleModal2 = () => {
        setModal2(!modal2)
    };

    if (modal2) {
        document.body.classList.add('active-modl')
    } else {
        document.body.classList.remove('active-modl')

    }

    return (
        <div>

            {modal2 && (
                <div className='book_details_modal2 modal-part'>

                    <div className='modal-content'>
                        <h2>Thanks for your feedback</h2>
                        <p>We are glad that you are happy with your product. We have offers for you</p>
                        <button className='book_details_btn_explore'>Explore offers</button>
                        <a href='#'>Return to homepage</a>
                        <button onClick={toggleModal2} className="close-modal-part" style={{ border: "0" }}>
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
