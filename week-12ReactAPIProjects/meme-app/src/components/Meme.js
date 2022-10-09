import React from 'react'
import MemeCard from './MemeCard.js'

const Meme = ({memeData, setMeme}) => {
   // console.log(memeData);

  function handleClick(item) {
    // console.log(item.box_count);
    setMeme(item)
  }

  const generateData = memeData.map((item) => {
    return <img key={item.id} src={item.url} alt="meme" onClick={() => handleClick(item)}/>
  })

    return (
        <div className="memeContainer">
          {generateData}
        </div>
    )
}

export default Meme
