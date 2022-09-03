import React from 'react'
import {clints} from "../clint/data"
const Clint = () => {
  return (
    <div>
      <div class="row">
        <h2 className='text-center text-primary'>React Project</h2>
      {clints.map((item) => (
        <div class="col-lg-4">
         <img className='bd-placeholder-img rounded-circle' src={item.img} width="140" height="140" />

          <h2 class="fw-normal">{item.title}</h2>
          <p>{item.link}</p>
        
        </div>
            ))}
        
      </div>
    </div>
  )
}

export default Clint
