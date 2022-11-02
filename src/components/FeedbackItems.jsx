import FeedbackItem from "./FeedbackItem"
import PropTypes from "prop-types"

function FeedbackItems({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <div> No List Available</div>
    }

    return <div className="feedback-list">
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
    </div>    
}

FeedbackItems.propTypes = {
    feedback : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackItems