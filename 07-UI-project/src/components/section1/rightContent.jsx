import React from 'react'
import RightCard from './RightCard'
const rightContent = (props) => {
    return (
        <div id='right' className='w-2/3 h-full p-10 text-lg gap-10 rounded-4xl overflow-x-auto flex text-white'>
            {props.users.map((user, index) => (
                <RightCard 
                    key={index}
                    num={index + 1}
                    imgUrl={user.img}
                    desc={user.desc}
                    tag={user.tag}
                />
            ))}
        </div>
    )
}

export default rightContent