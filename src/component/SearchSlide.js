import React, { useEffect } from 'react'

export default function SearchSlide() {
  const loop =[
    {"image": "assets/images/book_card_img1.jpg"},
    {"image": "assets/images/book_card_img2.jpg"},
    {"image": "assets/images/book_card_img3.jpg"},
    {"image": "assets/images/book_card_img4.jpg"},
    {"image": "assets/images/book_card_img2.jpg"},
    {"image": "assets/images/book_card_img2.jpg"},
    {"image": "assets/images/book_card_img3.jpg"}
  ]
    useEffect(() => {
        Slider()
    }, [])
    const Slider = () => {
        window.$('#recent__Search').not(".slick-initialized").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            prevArrow: '<i class="fa-solid fa-angle-left left_ico"></i>',
            nextArrow: '<i class="fa-solid fa-angle-right right_ico"></i>',
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  arrows: true,
                  slidesToShow: 4,
                  slidesToScroll: 4
                }
              },
              {
                breakpoint: 991,
                settings: {
                  arrows: true,
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
              },
              {
                breakpoint: 768,
                settings: {
                  arrows: true,
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 600,
                settings: {
                  arrows: true,
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          });
    }
  return (
    <>
     <div className="slick-slider top__Categories" id="recent__Search">
      {loop.map ((item) =>{
        return(
          < div className="categories__inner">
          <div className="categories__image">
            <img
              src={item.image}
              alt=""
              className="img-fluid"
            />
          </div>
          <p className="name__Category" style={{color:"#523929"}}>Book name</p>
        </div>
        )
      }

      )}
         
        
          </div>
    
    </>
  )
}
