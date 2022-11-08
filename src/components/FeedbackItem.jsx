import { FaEdit, FaTimes } from "react-icons/fa"
import Card from "./shared/Card"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
function FeedbackItem({ item }) {
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button className="close">
                <FaTimes color="purple" onClick={() => { deleteFeedback(item.id) }}/>
            </button>
            <button className="edit">
                <FaEdit color="purple" onClick={() => { editFeedback(item) }}/>
            </button>
            <div className="text-display">
                {item.text}
            </div>
        </Card>
    )
}

export default FeedbackItem