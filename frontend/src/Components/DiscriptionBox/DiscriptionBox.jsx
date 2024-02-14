import React from 'react'
import './DiscriptionBox.css'

const DiscriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className= 'descriptionbox-nav-box'>Description</div>
            <div className= 'descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt voluptatum dolores corrupti, error perspiciatis maxime inventore molestiae doloribus sed nam ipsum tempora quia nisi nobis. Aspernatur eum cumque saepe accusamus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
  )
}

export default DiscriptionBox