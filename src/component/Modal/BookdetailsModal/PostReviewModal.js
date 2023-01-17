import React, { useState } from 'react'

export default function PostReviewModal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    };

    if (modal) {
        document.body.classList.add('active-modl')
    } else {
        document.body.classList.remove('active-modl')

    }

    return (
        <div>

            {modal && (
                <div className='book_details_modal modal-part'>

                    <div className='modal-content'>
                        <h3>Review and rating</h3>
                        <span>Rating</span>
                        <div className="maincnt_rating2">
                            <span className="fa-solid fa-star checked" />
                            <span className="fa-solid fa-star checked" />
                            <span className="fa-solid fa-star checked" />
                            <span className="fa-solid fa-star checked" />
                            <span className="fa-solid fa-star" style={{ fontSize: "24px", color: "#aeaaa7" }} />

                        </div>
                        <form className=''>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Title</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                />

                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">We are happy for you . Tell us more</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <button type="submit" className="btn bookdetails_modal_btn" onClick={() => {
                                toggleModal()
                                setModal(false)
                            }}>
                                Post review
                            </button>
                        </form>


                        <button onClick={() => setModal(!modal)} className="close-modal-part" style={{ border: "0" }}>
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
