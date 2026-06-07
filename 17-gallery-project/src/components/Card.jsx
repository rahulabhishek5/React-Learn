import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div key={props.idx}>
        <a href={props.e.url} target="_blank">

          <div className="h-60 w-50 rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={props.e.download_url} alt="" />
          </div>
          <h2 className="font-bold pl-4">{props.e.author}</h2>
        </a>
      </div>
    </div>
  )
}

export default Card