import { useState, useContext } from "react"
import RatingSelect from "./RatingSelect"
import Button from "./shared/Button"
import Card from "./shared/Card"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(5)

    const { addFeedback } = useContext(FeedbackContext)
    
    const handleTextChange = (e) => {
        if (text === "" || text == null){
            setBtnDisabled(true)
            setMessage(null)
        } else if ( text !== "" && text.trim().length < 10) {
            setBtnDisabled(true)
            setMessage('Message should be at least 10 character.')
        } else {
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text.trim().length >= 10) {
            const newFeedback = {
                text,
                rating
            }
            
            addFeedback(newFeedback)

            setText('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}> 
                <h2>How you will rate your service with us?</h2>
                <RatingSelect select={(rating) => { setRating(rating) }}/>
                <div className="input-group">
                    <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text}/>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}
export default FeedbackForm