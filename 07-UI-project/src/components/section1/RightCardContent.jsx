import React from 'react'
import { MoveRight } from 'lucide-react';
const RightCardContent = (props) => {
    return (
        <div>
            <h2 className='absolute top-3 left-3 bg-white text-black p-3 text-xl text-center font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg'>
                {props.num}
            </h2>
            <div className='absolute bottom-0 left-0 w-full pt-20 pb-6 px-4 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col gap-8 items-start justify-end'>
                <p className='text-sm leading-relaxed opacity-90 font-medium'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium cupiditate voluptas magni pariatur odio asperiores saepe provident totam omnis commodi..
                </p>

                <button className='bg-blue-600 text-white px-3 py-1.5 w-full text-center flex gap-5 items-center justify-between text-xs font-semibold rounded-full shadow-sm cursor-pointer'>
                    Satisfied
                    <MoveRight strokeWidth={0.7} size={16} />
                </button>

            </div>
        </div>
    )
}

export default RightCardContent