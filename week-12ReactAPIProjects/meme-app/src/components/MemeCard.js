import React, {useState} from 'react'

const MemeCard = ({meme,setMeme}) => {
  // console.log(meme,setMeme);
  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    id:meme.id,
    boxes:[]
  })

  function generateMeme(){
       setImage(true)
  }

  let selected = null, x_pos = 0, y_pos = 0, x_elem = 0, y_elem = 0;
  function dragInit(elem) {
    // console.log(elem)
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
  }

  // Will be called when user dragging an element
  function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
      selected.style.left = (x_pos - x_elem) + 'px';
      selected.style.top = (y_pos - y_elem) + 'px';
    }
  }

  // Destroy the object when we are done
  function _destroy() {
    selected = null;
  }

  document.onmousemove = _move_elem;
  document.onmouseup = _destroy;


    return (
        <div>
           {image ? (<div className="meme">
          <img src={meme.url} alt="meme" className="memeImage" />
          {[...Array(data.boxes.length)].map((box,index)=> {
            let style = `memeText text${index}`
            return <h2 key={index} className={style} onMouseDown={(e) => dragInit(e.target)}>{data.boxes[index].text}</h2>
          })}</div>) :  <img src={meme.url} alt="meme" className="memeImage" />}
           <div className="inputsContainer">
               {[...Array(meme.box_count)].map((box,index) => {
                 return <input key={index} type="text" placeholder={`Meme Caption ${index+1}`}
                 onChange= {(e) =>{
                  const newBoxes = data.boxes;
                  newBoxes[index] = {text:e.target.value};
                  setData({...data, boxes: newBoxes})
                }}/>
               })}
            </div>
           <div className="btnContainer">
             <button onClick={()=> generateMeme()}>Generate Meme</button>
             <button onClick={()=> setMeme(null)}>Choose Other Template</button>
             <button>Save Meme</button>
           </div>
        </div>
    )
}

export default MemeCard
