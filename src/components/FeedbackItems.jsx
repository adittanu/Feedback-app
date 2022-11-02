import FeedbackItem from "./FeedbackItem"
import PropTypes from "prop-types"
import { Fa}

function FeedbackItems({ feedback }) {
    if (!feedback || feedback.length === 0) {
        return <div> No List Available</div>
    }

    return <div className="feedback-list">
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} />
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