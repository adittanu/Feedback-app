import { useState } from "react"
import Button from "./shared/Button"
import Card from "./shared/Card"

function FeedbackForm() {
    const [text, setText] = useState('')
    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    return (
        <Card>
            <form> 
                <h2>How you will rate your service with us?</h2>
                <div className="input-group">
                    {/* Select component */}
                    <input type="text" placeholder="Write a review" onChange={handleTextChange} value={text}/>
                    <Button type="submit" version={'secondary'} isDisabled={true}>Send</Button>
                </div>
            </form>
        </Card>
    )
}
export default FeedbackForm