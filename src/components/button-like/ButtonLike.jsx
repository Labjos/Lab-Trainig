import './Buttonlike.css'
import { useState } from 'react';


function ButtonLike() {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [likes, setLikes] = useState(0);

    const likesButton = () => {
        setLikes(likes + 1);
    }

    const like = likes === 1 ? 'like' : ' likes'




  return (
    <div>
        <button onClick={likesButton} className='like-button' style={{backgroundColor: colors[likes % 6]}}>
            {likes} {like}
        </button>
    </div>
  )
}

export default ButtonLike