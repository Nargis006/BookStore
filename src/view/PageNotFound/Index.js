import React from 'react'
import notfoundimg from "../../images/New Project (1).png";

export default function Index() {
  return (
<>
<div className='container'>
    <div className='page_not_found_section text-center'>
    <img src={notfoundimg}/>
    <h2>Page not found</h2>
    </div>
</div>

</>
  )
}
