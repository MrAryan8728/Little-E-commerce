import React from 'react'
import './card.css'

const Card = (props) => {

    const { url, name, detail, star } = props;

    return (
        <div className=' Card'>
            {/* Image, Name, Cuisine, Rating */}
            <div className=' Details'>
                <img src={url} className='image' />
                <div>
                    <h3>{name}</h3>
                </div>
                <div className='one-Row'>
                    <h4>{detail}</h4>
                    <h3>{star}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card