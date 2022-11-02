import Card from "./shared/Card"
import PropTypes from "prop-types"
import { FaTimes } from "react-icons/fa"

function FeedbackItem({ item }) {

    const handleDelete = (id) => { 
        console.log("🚀 ~ file: FeedbackItem.jsx ~ line 8 ~ handleDelete ~ id", id)
    }

    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            <button className="close">
                <FaTimes color="purple" onClick={() => { handleDelete(item.id) }}/>
            </button>
            <div className="text-display">
                {item.text}
            </div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item : PropTypes.object.isRequired
}

export default FeedbackItem