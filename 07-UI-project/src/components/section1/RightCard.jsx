import React from 'react'
import RightCardContent from './RightCardContent';
const RightCard = (props ) => {
    return (
        /* 
           This div is the direct child of the flex row in rightContent.
           Adding shrink-0 here prevents the card from shrinking below w-60!
        */
        <div className='relative h-full w-60 shrink-0 overflow-hidden rounded-3xl shadow-lg'>
            <img 
                src={props.imgUrl} 
                alt="segment card" 
                className='h-full w-full object-cover rounded-3xl' 
            />
            <RightCardContent num={props.num}/>
        </div>
    )
}

export default RightCard
