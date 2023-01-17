import React from 'react'

export default function Exclusive() {
  const loop= [
    {"image":"assets/images/Exclusives1.png"},
    {"image":"assets/images/Exclusives2.png"},
    {"image":"assets/images/Exclusives3.png"},
    {"image":"assets/images/Exclusives4.png"}
  ]
  return (
    <>
      <div className="ababil__Exclusives">
        <div className="d-flex align-items-center justify-content-between top__Horrortext">
          <h4 className="section_Title">Ababil Exclusives</h4>
          <p style={{color:"#8F6447"}}>
            See all{" "}
            <span>
              <img
                src="assets/images/sell__allicons.png"
                alt="Arrow Icons"
                className="img-fluid"
              />
            </span>
          </p>

        </div>
        <div className="ababil__Exclus_Inner">
          <div className="row">
            {loop.map((item) =>{
              return(
                <div className="col-md-3 col-sm-6 col-12 mb-2">
                <div className="ababil__Exclus_row">
                  <div className="ababil__Exclus_rowimage">
                    <img
                      src={item.image}
                      alt=""
                      className="img-fluid ababil__Exclus_image"
                    />
                  </div>
                  <div className="ababil__Exclus__Caption">
                    <h4>Translations</h4>
                    <a href="#" className="learnMore">
                      Learn more{" "}
                      <span>
                        <img src="./assets/images/sell__allicons.png" alt="" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              )
            }

            )}
           
           
          </div>
        </div>
      </div>
    </>
  )
}
