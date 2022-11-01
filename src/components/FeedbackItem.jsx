import PropTypes from 'prop-types'
import { useState } from 'react'

function FeedbackItem() {
    const [rating, setRating] = useState(0)
    const [text, setText] = useState("This is just an example feedback item.")
    
    const addRating = () => { 
        // setRating(10)
        setRating((prev) => { 
            console.log("🚀 ~ file: FeedbackItem.jsx ~ line 12 ~ setRating ~ prev", prev)
            return prev + 1;
        })
    }

    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">
                {text}
            </div>
            <button onClick={addRating}>Click</button>
        </div>
    )
}
FeedbackItem.propTypes = {}
export default FeedbackItem